import type { EpisodeContent } from "@/lib/types";

export const episode1: EpisodeContent = {
  meta: {
    id: "1",
    title: "The Smell of the Sea",
    scienceConcepts: "Observation, pattern recognition, recording",
    disciplinaryFocus: "evidence–claim connection, systematic recording of observations",
    knowledgeFocus: "amount: observation and recording terms",
  },
  narrative: `Jiyeon had returned to her hometown for summer research.
The city was always too loud. Here, the sea was close and the air moved slowly. In the morning, fishing boats came back one by one, and the pier smelled of fish and the sea.

Walking along the pier, Jiyeon found her father. He was mending nets.
"When did you get here?"
"Last night."
He smiled and nodded. Then, a moment later, he asked again.
"So… when did you say you were coming?"
Jiyeon paused.
"I just said."
He smiled and waved his hand.
"Oh, right."
It didn't feel that strange.

But that same evening, something similar happened.
Her father opened the fridge and stood there for a moment.
"What's wrong?"
"What was I looking for?"
Jiyeon said nothing. People forget things sometimes.

But the next day, she saw a similar scene at the pier. Two fishermen were talking.
"Where did we put what we caught yesterday?"
"The shed."
"No, that was the day before."
There was a short silence. Then one of them laughed and said,
"I've been so forgetful lately."
Jiyeon stopped when she heard that. Forgetful. That word was often heard on the pier.

She went home and took out her notebook. It was for research. She had brought it to record marine life. But Jiyeon started writing something else.

Village observation log
Father: same question repeated
Fisherman A: can't remember where things are
Fisherman B: forgets what was said in conversation

Jiyeon paused her pen. Was it just coincidence? Or was the same thing happening to many people?`,
  anchoring: [
    {
      id: "ep1-q1",
      type: "situation",
      text: "What problem does Jiyeon face in this story?",
      keywords: ["repeated memory/lapses", "father and fishermen", "unclear if coincidence or pattern", "starts observation log"],
      misconceptionPatterns: ["only mention memory problems and miss 'repeated in many people'", "state conclusion without Jiyeon's question (coincidence vs pattern)"],
      rubric: { "0": "none/error", "1": "partial (one or two events only)", "2": "sufficient (repeated memory issues + Jiyeon's question and decision to record)" },
    },
    {
      id: "ep1-q2",
      type: "claim_evidence",
      text: "Give a 'fact (observation)' from the passage that could be a reason for Jiyeon thinking 'Was it just coincidence?'",
      keywords: ["father repeating same question", "fishermen forgetting location, conversation", "several people", "similar time"],
      misconceptionPatterns: ["only Jiyeon's feelings", "general claim without specific observed examples"],
      rubric: { "0": "none/error", "1": "partial (one fact only)", "2": "sufficient (two or more specific observations from passage)" },
    },
    {
      id: "ep1-q3",
      type: "claim_evidence",
      text: "Why might Jiyeon have started writing 'something else' in her research notebook? Explain using evidence from the passage.",
      keywords: ["want to check for pattern", "observation log", "coincidence vs something happening to many", "village observation instead of marine life"],
      misconceptionPatterns: ["no reason, just wrote", "guess without link to passage"],
      rubric: { "0": "none/error", "1": "partial (only that she records)", "2": "sufficient (reason linked to observations and question)" },
    },
    {
      id: "ep1-q4",
      type: "alternative_uncertainty",
      text: "After Jiyeon thought 'People forget things sometimes,' she saw similar things the same day and the next. How might her thinking have changed?",
      keywords: ["sometimes vs repeated", "one person vs many", "coincidence vs pattern", "maintaining uncertainty"],
      misconceptionPatterns: ["conclude it didn't change", "ignore passage flow (sometimes → repeated)"],
      rubric: { "0": "none/error", "1": "partial (only that it repeats)", "2": "sufficient (sometimes → many people, repeated; awareness of uncertainty)" },
    },
    {
      id: "ep1-q5",
      type: "next_data_method",
      text: "What additional data or methods would be needed to check whether 'the same thing is happening to many people'?",
      keywords: ["more observations/records", "how many people", "since when", "common factors (place, food, job)", "comparison group"],
      misconceptionPatterns: ["just draw a conclusion", "only 'investigate' without specific method"],
      rubric: { "0": "none/error", "1": "partial (one specific only)", "2": "sufficient (two or more specific data/methods)" },
    },
    {
      id: "ep1-q6",
      type: "concept",
      text: "In this story, how are 'observation' and 'interpretation (question)' distinguished? Summarize in one sentence.",
      keywords: ["observation = what was seen/heard in passage", "interpretation = coincidence or pattern", "what she wrote = facts", "ending question = not yet conclusion"],
      misconceptionPatterns: ["mix without distinguishing", "only describe character's feelings"],
      rubric: { "0": "none/error", "1": "partial (observation or interpretation only)", "2": "sufficient (one sentence distinguishing observation and interpretation)" },
    },
  ],
  selfExplanation: [
    {
      id: "ep1-q1-se",
      goal: "situation",
      text: "What problem does Jiyeon face in this story?",
      keywords: ["repeated memory/lapses", "father and fishermen", "unclear if coincidence or pattern", "starts observation log"],
      misconceptionPatterns: ["only mention memory problems and miss 'repeated in many people'", "state conclusion without Jiyeon's question (coincidence vs pattern)"],
      rubric: { "0": "none/error", "1": "partial (one or two events only)", "2": "sufficient (repeated memory issues + Jiyeon's question and decision to record)" },
    },
    {
      id: "ep1-se1",
      goal: "cause_effect",
      text: "In this story **what happened** and, as a result, **what did Jiyeon decide to do**? Explain in your own words, linking cause and effect.",
      keywords: ["father and fishermen repeated memory lapses", "Jiyeon's question (coincidence vs pattern)", "village observation log in notebook", "cause (repeated observations) → result (recording, question)"],
      misconceptionPatterns: ["only list events", "end without Jiyeon's action or decision"],
      rubric: { "0": "none/error", "1": "partial (only some, or weak cause-effect)", "2": "sufficient (what happened + Jiyeon's action/decision linked causally)" },
    },
    {
      id: "ep1-se2",
      goal: "evidence_reason",
      text: "Find **evidence** in the passage for Jiyeon thinking 'Was it just coincidence? Or was the same thing happening to many people?' and explain how it **connects to that question**.",
      keywords: ["father repeating question", "fishermen forgetful", "several people, similar time", "observed facts → question"],
      misconceptionPatterns: ["general claim without quoting passage", "only repeat Jiyeon's thought without evidence"],
      rubric: { "0": "none/error", "1": "partial (one piece of evidence)", "2": "sufficient (evidence from passage linked to question)" },
    },
  ],
  miniLesson: `In science we first separate "what was seen or heard" and record it. That is observation (facts). Then "why might that be?" is interpretation or inference. The same phenomenon seen once might be coincidence; when it repeats across many times or many people, we consider the possibility of a pattern. Like Jiyeon, when we record observations systematically, we can better judge later whether it's a pattern or coincidence.`,
  quiz: [
    {
      id: "ep1-quiz-1",
      question: "What did Jiyeon start writing in her notebook?",
      options: ["Marine life records", "Village observation log of people's memory and forgetfulness", "Weather records", "Catch records"],
      correctIndex: 1,
      feedback: "The passage says she had brought it for marine life but started writing village observation log (father, fishermen A and B's memory and forgetfulness).",
    },
    {
      id: "ep1-quiz-2",
      question: "What happened right after Jiyeon thought 'People forget things sometimes'?",
      options: ["Her father got better", "The next day at the pier she saw fishermen also showing similar forgetfulness", "Jiyeon quit her research", "A storm hit the sea"],
      correctIndex: 1,
      feedback: "After the evening fridge scene, the next day at the pier she saw two fishermen's conversation (forgetting, 'forgetful') and stopped walking.",
    },
    {
      id: "ep1-quiz-3",
      question: "What question does Jiyeon raise at the end of the story?",
      options: ["Did the catch decrease?", "Just coincidence, or is the same thing happening to many people?", "Is the sea polluted?", "Is the weather strange?"],
      correctIndex: 1,
      feedback: "At the end she wrote 'Was it just coincidence? Or was the same thing happening to many people?'",
    },
    {
      id: "ep1-quiz-4",
      question: "What is important when distinguishing observation (fact) from interpretation (question)?",
      options: ["Who said it", "Distinguishing 'what was seen or heard' in the passage from 'what was thought as a result'", "Word count", "Only the date matters"],
      correctIndex: 1,
      feedback: "Observation is what was seen or heard; interpretation is inference like 'why might that be?' Distinguishing them helps judge later whether it's pattern or coincidence.",
    },
  ],
};
