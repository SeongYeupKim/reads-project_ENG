"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import type { EpisodeContent, ResponseLog } from "@/lib/types";

type Step = "narrative" | { se: number } | "miniLesson" | "done";

export default function SessionFlow({
  episodeId,
  episodeTitle,
  content,
  hasFullContent,
  nextEpisode,
}: {
  episodeId: string;
  episodeTitle: string;
  content: EpisodeContent;
  hasFullContent: boolean;
  nextEpisode: string | null;
}) {
  const [step, setStep] = useState<Step>("narrative");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [logs, setLogs] = useState<ResponseLog[]>([]);

  const logResponse = useCallback(
    (itemId: string, itemType: ResponseLog["item_type"], raw: string) => {
      const entry: ResponseLog = {
        response_id: `resp_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        session_id: `sess_${episodeId}_${typeof window !== "undefined" ? Date.now() : ""}`,
        user_id: "anonymous",
        episode_id: episodeId,
        item_id: itemId,
        item_type: itemType,
        displayed_at: new Date().toISOString(),
        response_raw: raw,
        response_submitted_at: new Date().toISOString(),
      };
      setLogs((prev) => [...prev, entry]);
      if (typeof window !== "undefined") {
        try {
          const stored = JSON.parse(localStorage.getItem("reads_logs") ?? "[]");
          stored.push(entry);
          localStorage.setItem("reads_logs", JSON.stringify(stored));
        } catch {
          // ignore
        }
      }
    },
    [episodeId]
  );

  const goNext = useCallback(() => {
    if (step === "narrative") {
      setStep({ se: 0 });
      return;
    }
    if (typeof step === "object" && step !== null && "se" in step) {
      if (step.se < content.selfExplanation.length - 1) {
        setStep({ se: step.se + 1 });
      } else {
        setStep("miniLesson");
      }
      return;
    }
    if (step === "miniLesson") {
      setStep("done");
    }
  }, [step, content]);

  if (!hasFullContent) {
    return (
      <div className="max-w-2xl mx-auto p-6 card mt-8">
        <h1 className="text-xl font-bold text-[var(--accent)]">
          Episode {episodeId} — {episodeTitle}
        </h1>
        <p className="text-gray-600 mt-2">
          This episode is not available yet. Please start with Episode 1.
        </p>
        <Link href="/" className="btn-primary mt-4 inline-block">
          Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-semibold text-[var(--accent)]">
          READS · Episode {episodeId} — {episodeTitle}
        </h1>
        <Link href="/" className="text-sm text-gray-500 hover:underline">
          Home
        </Link>
      </header>

      {step === "narrative" && (
        <section className="card max-w-2xl overflow-hidden">
          <div className="relative w-full h-28 rounded-lg overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 mb-4">
            <img
              src="/img/episode-ocean.svg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <h2 className="text-sm font-medium text-gray-500 mb-3">Passage</h2>
          <div
            className="prose-narrative"
            dangerouslySetInnerHTML={{
              __html: content.narrative.replace(
                /\*\*(.*?)\*\*/g,
                "<strong>$1</strong>"
              ),
            }}
          />
          <button onClick={goNext} className="btn-primary mt-6">
            Next: Self-Explanation
          </button>
        </section>
      )}

      {typeof step === "object" && step !== null && "se" in step && content.selfExplanation[step.se] && (
        <section className="grid grid-cols-1 lg:grid-cols-10 gap-4 lg:h-[75vh] lg:overflow-hidden">
          <div className="lg:col-span-7 card overflow-hidden flex flex-col min-h-0">
            <h2 className="text-sm font-medium text-gray-500 mb-2 shrink-0">Passage</h2>
            <div
              className="prose-narrative flex-1 overflow-y-auto pr-2 min-h-0"
              dangerouslySetInnerHTML={{
                __html: content.narrative.replace(
                  /\*\*(.*?)\*\*/g,
                  "<strong>$1</strong>"
                ),
              }}
            />
          </div>
          <div className="lg:col-span-3 card overflow-hidden flex flex-col min-h-0">
            <h2 className="text-sm font-medium text-gray-500 mb-2 shrink-0">
              Self-Explanation {step.se + 1}/{content.selfExplanation.length}
            </h2>
            <p
              className="font-medium text-gray-800 mb-3 shrink-0 text-sm leading-snug"
              dangerouslySetInnerHTML={{
                __html: content.selfExplanation[step.se].text.replace(
                  /\*\*(.*?)\*\*/g,
                  "<strong>$1</strong>"
                ),
              }}
            />
            <textarea
              className="w-full min-h-[120px] max-h-[40vh] flex-1 p-3 border border-[var(--border)] rounded-lg resize-y text-sm"
              placeholder="Explain in your own words..."
              value={answers[content.selfExplanation[step.se].id] ?? ""}
              onChange={(e) =>
                setAnswers((prev) => ({
                  ...prev,
                  [content.selfExplanation[step.se].id]: e.target.value,
                }))
              }
            />
            <button
              onClick={() => {
                const se = content.selfExplanation[step.se];
                logResponse(se.id, "self_explanation", answers[se.id] ?? "");
                goNext();
              }}
              className="btn-primary mt-3 shrink-0"
            >
              {step.se < content.selfExplanation.length - 1
                ? "Next question"
                : "Next: Mini-lesson"}
            </button>
          </div>
        </section>
      )}

      {step === "miniLesson" && (
        <section className="card max-w-2xl">
          <h2 className="text-sm font-medium text-gray-500 mb-3">Mini-lesson</h2>
          <div className="prose-narrative">{content.miniLesson}</div>
          <button onClick={goNext} className="btn-primary mt-6">
            Complete Episode
          </button>
        </section>
      )}

      {step === "done" && (
        <section className="card text-center max-w-2xl">
          <h2 className="text-xl font-semibold text-[var(--accent)]">
            Episode {episodeId} Complete
          </h2>
          <p className="text-gray-600 mt-2">
            Responses have been saved in your browser. (Research log: localStorage reads_logs)
          </p>
          {episodeId === "4" && (
            <p className="text-gray-700 mt-4 font-medium">
              Next, please complete the <strong>Background Knowledge Check</strong> before the main reading activity.
            </p>
          )}
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {episodeId === "4" && (
              <Link href="/background-knowledge" className="btn-primary">
                Background Knowledge Check
              </Link>
            )}
            {nextEpisode && (
              <Link href={`/session/${nextEpisode}`} className="btn-primary">
                Continue to Episode {nextEpisode}
              </Link>
            )}
            <Link href="/" className="btn-secondary">
              Home
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
