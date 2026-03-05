"use client";

import { useState } from "react";
import Link from "next/link";
import { backgroundKnowledgeItems } from "@/data/backgroundKnowledge";

const LABELS = ["A", "B", "C", "D"];

export default function BackgroundKnowledgePage() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      try {
        const payload = {
          when: new Date().toISOString(),
          answers: answers,
          itemIds: backgroundKnowledgeItems.map((i) => i.id),
        };
        const stored = JSON.parse(
          localStorage.getItem("reads_background_knowledge") ?? "[]"
        );
        stored.push(payload);
        localStorage.setItem(
          "reads_background_knowledge",
          JSON.stringify(stored)
        );
      } catch {
        // ignore
      }
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen max-w-2xl mx-auto p-6">
        <div className="card text-center">
          <h1 className="text-xl font-semibold text-[var(--accent)]">
            Background Knowledge Check Submitted
          </h1>
          <p className="text-gray-600 mt-2">
            Responses saved. (localStorage: reads_background_knowledge)
          </p>
          <div className="flex flex-col gap-3 mt-6 items-center">
            <Link href="/reading-comprehension" className="btn-primary">
              Next: Reading Comprehension
            </Link>
            <Link href="/" className="btn-secondary">
              Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen max-w-2xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-xl font-semibold text-[var(--accent)]">
          READS — Background Knowledge Check
        </h1>
        <p className="text-gray-600 mt-2">
          Episode 4 is complete. Before the main reading activity, please
          complete the background knowledge check. Answer the items below.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        {backgroundKnowledgeItems.map((item, idx) => (
          <div key={item.id} className="card">
            <p className="font-medium text-gray-800 mb-3">
              {idx + 1}. {item.question}
            </p>
            <ul className="space-y-2">
              {item.options.map((opt, i) => (
                <li key={i}>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name={item.id}
                      checked={answers[item.id] === i}
                      onChange={() =>
                        setAnswers((prev) => ({ ...prev, [item.id]: i }))
                      }
                    />
                    <span>
                      {LABELS[i]}. {opt}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button type="submit" className="btn-primary w-full">
          Submit
        </button>
      </form>

      <Link
        href="/"
        className="block mt-4 text-center text-sm text-gray-500 hover:underline"
      >
        ← Home
      </Link>
    </main>
  );
}
