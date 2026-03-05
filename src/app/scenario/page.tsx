"use client";

import { useState } from "react";
import Link from "next/link";

const SCENARIO = `In a local lake, fish populations have declined sharply over the past few years. Residents disagree about the cause. Some point to fertilizer from nearby farms washing into the water; others think water temperature changes or invasive species might be involved.

You are the head of the regional environmental research team and are about to start an investigation into the cause of this phenomenon.`;

const QUESTION_A =
  "Present a plan to investigate the cause of this problem, with reasons (e.g., what data you would collect and how).";
const QUESTION_B =
  "Explain how different types of data can help understand possible causes of the problem.";

export default function ScenarioPage() {
  const [answerA, setAnswerA] = useState("");
  const [answerB, setAnswerB] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      try {
        const payload = {
          when: new Date().toISOString(),
          scenario_a: answerA,
          scenario_b: answerB,
        };
        const stored = JSON.parse(
          localStorage.getItem("reads_scenario") ?? "[]"
        );
        stored.push(payload);
        localStorage.setItem("reads_scenario", JSON.stringify(stored));
      } catch {
        // ignore
      }
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-xl border border-[var(--border)] shadow-sm p-8 text-center">
          <h1 className="text-xl font-bold text-[var(--accent)]">
            Scenario Task Submitted
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Responses saved. (localStorage: reads_scenario)
          </p>
          <Link href="/" className="btn-primary mt-6 inline-block">
            Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-6">
          <h1 className="text-xl font-bold text-[var(--accent)]">
            READS — Scenario Task
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Read the scenario below and answer the questions.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-10 gap-5 lg:h-[75vh] lg:overflow-hidden">
          <div className="lg:col-span-7 bg-white rounded-xl border border-[var(--border)] shadow-sm overflow-hidden flex flex-col min-h-0">
            <div className="relative w-full h-36 sm:h-44 shrink-0 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
              <img
                src="/img/scenario-lake.svg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="px-5 pt-4 pb-2 shrink-0">
              <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-1 rounded">
                [Scenario]
              </span>
            </div>
            <div className="flex-1 overflow-y-auto px-5 pb-5 min-h-0 whitespace-pre-line text-gray-800 leading-relaxed">
              {SCENARIO}
            </div>
          </div>
          <div className="lg:col-span-3 bg-white rounded-xl border border-[var(--border)] shadow-sm overflow-hidden flex flex-col min-h-0 p-5">
            <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-1 rounded mb-4 shrink-0 w-fit">
              [Questions]
            </span>
            <form
              onSubmit={handleSubmit}
              className="flex-1 overflow-y-auto min-h-0 space-y-5 flex flex-col"
            >
              <div>
                <p className="font-medium text-gray-800 text-sm mb-2 leading-snug">
                  (a) {QUESTION_A}
                </p>
                <textarea
                  className="w-full min-h-[140px] p-3 border border-[var(--border)] rounded-lg resize-y text-sm focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 outline-none transition"
                  placeholder="Type your answer..."
                  value={answerA}
                  onChange={(e) => setAnswerA(e.target.value)}
                />
              </div>
              <div>
                <p className="font-medium text-gray-800 text-sm mb-2 leading-snug">
                  (b) {QUESTION_B}
                </p>
                <textarea
                  className="w-full min-h-[140px] p-3 border border-[var(--border)] rounded-lg resize-y text-sm focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 outline-none transition"
                  placeholder="Type your answer..."
                  value={answerB}
                  onChange={(e) => setAnswerB(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-primary shrink-0 mt-2">
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
