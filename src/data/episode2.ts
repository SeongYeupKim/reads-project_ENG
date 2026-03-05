import type { EpisodeContent } from "@/lib/types";

export const episode2: EpisodeContent = {
  meta: {
    id: "2",
    title: "The Restaurant Menu",
    scienceConcepts: "Pattern recognition, data (ledger) and comparison",
    disciplinaryFocus: "method/variable sense, interpreting tables and records",
    knowledgeFocus: "accuracy: recording and describing patterns accurately",
  },
  narrative: `Jade's restaurant was the oldest in the village. It cooked fish brought straight from the pier. At lunchtime, most of the fishermen gathered there.

One day Jade noticed something odd while looking at the menu. There was mackerel left. That was strange. Mackerel was always the first to sell out.

He looked around the kitchen. "Not many customers today," his wife said. "No, about the same." Jade pulled out the ledger from the counter. He checked last month's figures. Sales were almost the same. But the mix of orders was different. Mackerel was left over.

And one more thing. Some customers had ordered twice. The same dish. At first Jade thought it was staff error. But one day a fisherman said, "I ordered mackerel, right?" "You had it earlier." "Did I?" The fisherman laughed. "I'm a bit out of it today." Jade heard that and looked at the ledger again. The same customer. The same dish. The same day. Two orders recorded.

Jade thought for a moment. It's not strange for people to forget sometimes. But what if many people, around the same time, in a similar way, are losing track of things?

He looked out the window. The boats were coming into the pier again today. And most of the customers ate the same kind of food.`,
  anchoring: [
    {
      id: "ep2-q1",
      type: "situation",
      text: "What 'odd thing' did Jade notice in this story?",
      keywords: ["mackerel left over", "different order mix than usual", "same dish ordered twice", "similar customer count but pattern changed"],
      misconceptionPatterns: ["only fewer customers", "mention only mackerel, miss double orders and pattern"],
      rubric: { "0": "none/error", "1": "partial (one only)", "2": "sufficient (mackerel left + double orders etc.)" },
    },
    {
      id: "ep2-q2",
      type: "claim_evidence",
      text: "Jade said 'customers are about the same.' What fact (data) in the passage supports this claim?",
      keywords: ["sales almost same", "ledger, last month's figures", "customer count not the issue, order mix is"],
      misconceptionPatterns: ["claim only, no evidence", "only quote wife"],
      rubric: { "0": "none/error", "1": "partial (ledger or sales only)", "2": "sufficient (ledger, sales, etc. as data supporting claim)" },
    },
    {
      id: "ep2-q3",
      type: "claim_evidence",
      text: "Why did Jade change his mind from 'staff error'? Explain using evidence from the passage.",
      keywords: ["fisherman 'I ordered mackerel?' / 'You had it earlier'", "same customer, same dish, same day, two orders in ledger", "staff error vs customer memory"],
      misconceptionPatterns: ["no reason for change", "guess without dialogue or ledger"],
      rubric: { "0": "none/error", "1": "partial (one only)", "2": "sufficient (fisherman dialogue + ledger record as reason)" },
    },
    {
      id: "ep2-q4",
      type: "alternative_uncertainty",
      text: "'It's not strange for people to forget sometimes. But what if many people, around the same time, in a similar way, are losing track?' What does this suggest?",
      keywords: ["sometimes vs same time, many people", "coincidence vs possible pattern", "need for further investigation", "maintaining uncertainty"],
      misconceptionPatterns: ["conclude cause (e.g. it's not that)", "only the question, no implication"],
      rubric: { "0": "none/error", "1": "partial (only that they lose track)", "2": "sufficient (distinguish coincidence and pattern, need for further inquiry)" },
    },
    {
      id: "ep2-q5",
      type: "next_data_method",
      text: "What additional data or methods would help check whether 'many people, same time, similar way'?",
      keywords: ["time period comparison", "how many people", "other restaurants, other areas", "common factors (food, job)", "controlling variables"],
      misconceptionPatterns: ["conclude without more data", "no specific method"],
      rubric: { "0": "none/error", "1": "partial (one only)", "2": "sufficient (two or more specific)" },
    },
    {
      id: "ep2-q6",
      type: "concept",
      text: "What role does the 'ledger (record)' play in this story? Summarize in one sentence.",
      keywords: ["compare sales, order mix", "check hypothesis (staff error)", "confirm same-day double order", "see pattern via data"],
      misconceptionPatterns: ["ledger is just for accounting", "only that it exists"],
      rubric: { "0": "none/error", "1": "partial (only that it records)", "2": "sufficient (one sentence on role: comparison, checking, pattern)" },
    },
  ],
  selfExplanation: [
    {
      id: "ep2-q1-se",
      goal: "situation",
      text: "What 'odd thing' did Jade notice in this story?",
      keywords: ["mackerel left over", "different order mix", "same dish ordered twice", "similar customer count but pattern changed"],
      misconceptionPatterns: ["only fewer customers", "only mackerel, miss double orders and pattern"],
      rubric: { "0": "none/error", "1": "partial (one only)", "2": "sufficient (mackerel left + double orders etc.)" },
    },
    {
      id: "ep2-se1",
      goal: "cause_effect",
      text: "**What did Jade discover** in this story and **what did he come to think**? Explain in your own words, linking cause and effect.",
      keywords: ["mackerel left, double orders", "confirmed with ledger", "staff error → possible customer memory", "question about many people, same time"],
      misconceptionPatterns: ["only list events", "no Jade's reasoning or question"],
      rubric: { "0": "none/error", "1": "partial (discovery only or thought only)", "2": "sufficient (discovery → check → thought linked)" },
    },
    {
      id: "ep2-se2",
      goal: "evidence_reason",
      text: "Find **evidence** in the passage for Jade thinking 'What if many people, around the same time, in a similar way, are losing track?' and explain how it **connects**.",
      keywords: ["mackerel left", "same customer same dish same day two orders", "fisherman 'out of it'", "ledger record"],
      misconceptionPatterns: ["no quote from passage", "conclusion without evidence"],
      rubric: { "0": "none/error", "1": "partial (one piece)", "2": "sufficient (evidence from passage linked to question)" },
    },
  ],
  miniLesson: `Data (ledgers, records) are used to compare "what changed." Jade compared not customer count but order mix and patterns and noticed something odd. One phenomenon (mackerel left) alone could be coincidence, but when the ledger shows the same customer ordering the same dish twice on the same day, it can point to a pattern different from "sometimes forgetful." Reading records in a structured way is data interpretation.`,
  quiz: [
    {
      id: "ep2-quiz-1",
      question: "What did Jade first think was the reason mackerel was left?",
      options: ["Fewer customers", "Staff error", "Fishermen not eating mackerel", "Weather"],
      correctIndex: 1,
      feedback: "The passage says he at first thought the same dish ordered twice was staff error.",
    },
    {
      id: "ep2-quiz-2",
      question: "What was Jade's evidence for 'customers are about the same'?",
      options: ["His wife said so", "Sales were almost the same and he checked the ledger", "Fishermen looked fewer", "Same menu"],
      correctIndex: 1,
      feedback: "He pulled out the ledger, checked last month, sales were almost the same, and he said customer count was similar but order mix was different.",
    },
    {
      id: "ep2-quiz-3",
      question: "What made Jade change his mind?",
      options: ["His wife said so", "After the fisherman's 'I ordered mackerel?' / 'You had it earlier,' he saw the ledger with same customer, same dish, same day, two orders", "He changed the menu", "More customers came"],
      correctIndex: 1,
      feedback: "After hearing the fisherman he looked at the ledger again and found the same customer had ordered the same dish twice on the same day.",
    },
    {
      id: "ep2-quiz-4",
      question: "What in this story could be called a 'pattern'?",
      options: ["Only mackerel left", "What looks like many people losing track in a similar way around the same time", "Sales same every month", "Only fishermen come"],
      correctIndex: 1,
      feedback: "Jade raised the question: it's not strange to forget sometimes, but what if many people around the same time in a similar way are losing track (pattern).",
    },
  ],
};
