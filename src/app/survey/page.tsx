"use client";

import { useState } from "react";
import Link from "next/link";

/** Pre/post measure — knowledge & survey placeholder */
const SURVEY_ITEMS = [
  { id: "k1", type: "knowledge", text: "What do you think are the main components of an ecosystem?" },
  { id: "k2", type: "knowledge", text: "In one sentence, why can't we say 'why' something happened from observed data alone?" },
  { id: "s1", type: "likert", text: "When reading science texts, it is important to distinguish 'facts' from 'claims'.", scale: 5 },
  { id: "s2", type: "likert", text: "A single piece of data is enough to identify a cause.", scale: 5 },
];

export default function SurveyPage() {
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen max-w-2xl mx-auto p-6">
      <h1 className="text-xl font-bold text-[var(--accent)]">
        READS — Pre/Post Measure
      </h1>
      <p className="text-sm text-gray-500 mt-1">
        Knowledge check & survey (researcher use)
      </p>

      {!submitted ? (
        <form
          className="card mt-6 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            if (typeof window !== "undefined") {
              try {
                const stored = JSON.parse(localStorage.getItem("reads_survey") ?? "[]");
                stored.push({ when: new Date().toISOString(), responses });
                localStorage.setItem("reads_survey", JSON.stringify(stored));
              } catch {
                // ignore
              }
            }
            setSubmitted(true);
          }}
        >
          {SURVEY_ITEMS.map((item) => (
            <div key={item.id}>
              <label className="block font-medium text-gray-800 mb-2">
                {item.text}
              </label>
              {item.type === "knowledge" ? (
                <textarea
                  className="w-full min-h-[80px] p-3 border border-[var(--border)] rounded-lg"
                  value={responses[item.id] ?? ""}
                  onChange={(e) =>
                    setResponses((prev) => ({ ...prev, [item.id]: e.target.value }))
                  }
                />
              ) : (
                <div className="flex gap-2 flex-wrap">
                  {Array.from({ length: (item as { scale: number }).scale }, (_, i) => i + 1).map(
                    (n) => (
                      <label key={n} className="flex items-center gap-1">
                        <input
                          type="radio"
                          name={item.id}
                          value={String(n)}
                          checked={responses[item.id] === String(n)}
                          onChange={() =>
                            setResponses((prev) => ({ ...prev, [item.id]: String(n) }))
                          }
                        />
                        <span className="text-sm">{n}</span>
                      </label>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </form>
      ) : (
        <div className="card mt-6">
          <p className="text-[var(--accent)] font-medium">Submitted.</p>
          <p className="text-sm text-gray-500 mt-1">
            Responses are saved in your browser (localStorage reads_survey).
          </p>
          <Link href="/" className="btn-secondary mt-4 inline-block">
            Home
          </Link>
        </div>
      )}

      <Link href="/" className="block mt-4 text-sm text-gray-500 hover:underline">
        ← Home
      </Link>
    </main>
  );
}
