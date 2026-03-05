import type { EpisodeContent } from "@/lib/types";

export const episode3: EpisodeContent = {
  meta: {
    id: "3",
    title: "The Ledger",
    scienceConcepts: "Trophic level, hippocampus, domoic acid, food chain",
    disciplinaryFocus: "Uncertainty/alternative explanations, cause-seeking",
    knowledgeFocus: "specificity: using concrete examples and data",
  },
  narrative: `Cate was flipping through hospital records. At first she thought it was simple coincidence. People forget sometimes—names, appointments, where they put things.

But when the records started to add up, the picture changed. Cate gathered patient records from the last two months and looked. People with similar symptoms. Recent memory fading. Forgetting what they just said. Trouble concentrating. Ages varied. Some patients were in their twenties, some over sixty.

Cate paused on a page. It was the lifestyle section—where patients' usual diet and work were recorded. She read that part again. Most were connected to the sea. Fishermen. Seafood shop owners. Restaurant staff. She thought for a moment. In this village everyone eats fish. So that alone didn't explain it.

She looked at the records more closely. Type of fish. One patient had written that they ate small anchovies; another that they often ate large fish. Cate turned the pages and began making a list. Tuna, sea bass, flounder, mackerel. She paused. These fish had something in common. They weren't small fish—they were species that eat other fish. They were clearly related in **trophic level**.

She looked out the window. She had heard that some substances, once inside the body, don't disappear easily. She remembered learning that **domoic acid**, for example, could affect the **hippocampus**—a part of the human brain involved in memory formation. And in some cases such toxins could move along the food chain.

Cate looked back at the records. It was still too little to call an explanation. But it was a bit too regular to call coincidence.`,
  anchoring: [
    {
      id: "ep3-q1",
      type: "situation",
      text: "What situation does Cate face in this story?",
      keywords: ["similar symptoms (memory fading etc.) in several patients", "ages vary", "common link to sea-related jobs", "common link in fish type, trophic level"],
      misconceptionPatterns: ["only many patients", "state cause as fact"],
      rubric: { "0": "none/error", "1": "partial (symptoms only or jobs only)", "2": "sufficient (symptoms + records + fish, trophic level)" },
    },
    {
      id: "ep3-q2",
      type: "claim_evidence",
      text: "Why did Cate say 'In this village everyone eats fish. So that alone didn't explain it'?",
      keywords: ["controlling variables", "fish alone doesn't distinguish", "need fish type, trophic position", "comparable data"],
      misconceptionPatterns: ["fish is the cause", "only that it doesn't explain"],
      rubric: { "0": "none/error", "1": "partial (only that fish alone isn't enough)", "2": "sufficient (why not enough—need to distinguish, compare)" },
    },
    {
      id: "ep3-q3",
      type: "claim_evidence",
      text: "What common feature did Cate find for the fish on her list (tuna, sea bass, flounder, mackerel)? Why does it matter? Explain in one sentence.",
      keywords: ["trophic level", "species that eat other fish", "higher in food chain", "where toxin can accumulate"],
      misconceptionPatterns: ["only fish names", "no link between common feature and cause inference"],
      rubric: { "0": "none/error", "1": "partial (trophic level only)", "2": "sufficient (trophic level + why it matters in one sentence)" },
    },
    {
      id: "ep3-q4",
      type: "alternative_uncertainty",
      text: "Cate said 'It was still too little to call an explanation. But it was a bit too regular to call coincidence.' What does this imply?",
      keywords: ["not yet a conclusion", "hypothesis/possibility stage", "acknowledging uncertainty", "need for more evidence"],
      misconceptionPatterns: ["state cause as certain", "conclude it's coincidence"],
      rubric: { "0": "none/error", "1": "partial (only too little/too regular)", "2": "sufficient (uncertainty + need for further investigation)" },
    },
    {
      id: "ep3-q5",
      type: "next_data_method",
      text: "What additional data or methods would be needed to turn Cate's observations (fish type, trophic level, domoic acid, hippocampus) into an 'explanation'?",
      keywords: ["hippocampus, brain imaging", "toxin in blood/tissue", "intake amount, duration", "comparison group (other region, diet)", "establishing cause"],
      misconceptionPatterns: ["explanation already done", "no specific method"],
      rubric: { "0": "none/error", "1": "partial (one only)", "2": "sufficient (two or more specific)" },
    },
    {
      id: "ep3-q6",
      type: "concept",
      text: "In your own words, in one sentence, what does 'move along the food chain' mean in this story?",
      keywords: ["plankton → small fish → large fish", "toxin concentration", "higher trophic level", "when humans eat large fish"],
      misconceptionPatterns: ["only that it moves", "no link between movement and memory, brain"],
      rubric: { "0": "none/error", "1": "partial (movement, food chain only)", "2": "sufficient (one sentence: toxin/effect can be passed along food chain)" },
    },
  ],
  selfExplanation: [
    {
      id: "ep3-q1-se",
      goal: "situation",
      text: "What situation does Cate face in this story?",
      keywords: ["similar symptoms in several patients", "ages vary", "sea-related jobs", "fish type, trophic level commonality"],
      misconceptionPatterns: ["only many patients", "state cause as fact"],
      rubric: { "0": "none/error", "1": "partial (symptoms or jobs only)", "2": "sufficient (symptoms + records + fish, trophic level)" },
    },
    {
      id: "ep3-se1",
      goal: "cause_effect",
      text: "**What did Cate observe** and **what hypothesis or possibility did she form**? Explain in your own words, linking cause and effect.",
      keywords: ["symptoms, jobs, fish type commonality", "trophic level, domoic acid, hippocampus", "too little for explanation, too regular for coincidence", "observation → hypothesis stage"],
      misconceptionPatterns: ["only list", "no Cate's conclusion (still insufficient)"],
      rubric: { "0": "none/error", "1": "partial (observation only or hypothesis only)", "2": "sufficient (observation → hypothesis, uncertainty linked)" },
    },
    {
      id: "ep3-se2",
      goal: "evidence_reason",
      text: "Explain why Cate connected **domoic acid**, **hippocampus**, and **trophic level**, using the passage and your understanding. Link **evidence and reasoning**.",
      keywords: ["memory formation, hippocampus", "toxin moves along food chain", "large fish = higher in chain = possible concentration", "still too little to call explanation"],
      misconceptionPatterns: ["only list terms", "general claim without link to story"],
      rubric: { "0": "none/error", "1": "partial (one concept linked)", "2": "sufficient (domoic acid, hippocampus, trophic level linked in story context)" },
    },
  ],
  miniLesson: `Fish at higher trophic levels eat smaller fish and grow. Some toxins (e.g. domoic acid) can start in plankton and move up the food chain, building up in bodies. So the same toxin can expose people who often eat large fish more. The hippocampus is important for memory; toxins that affect it can lead to memory problems when exposure is repeated. To say "this village's case is like that" would require more evidence—blood/tissue tests, comparison groups.`,
  quiz: [
    {
      id: "ep3-quiz-1",
      question: "What did the fish on Cate's list (tuna, sea bass, flounder, mackerel) have in common?",
      options: ["They are small fish", "They are higher trophic level—species that eat other fish", "They are freshwater", "Eaten only raw"],
      correctIndex: 1,
      feedback: "The passage says these fish are not small fish but species that eat other fish and are related by trophic level.",
    },
    {
      id: "ep3-quiz-2",
      question: "Why were domoic acid and the hippocampus linked in the story?",
      options: ["They taste good", "Toxins like domoic acid can affect the hippocampus, which is involved in memory formation", "Hippocampus is a fish name", "Age doesn't matter"],
      correctIndex: 1,
      feedback: "Cate remembered learning that toxins like domoic acid can affect the human brain's hippocampus, which is involved in memory formation.",
    },
    {
      id: "ep3-quiz-3",
      question: "Why did Cate say 'fish alone didn't explain it'?",
      options: ["They don't eat fish", "In this village everyone eats fish, so to see what's different she needed more information like fish type and trophic position", "No records", "Too few patients"],
      correctIndex: 1,
      feedback: "In this village everyone eats fish. So 'eating fish' alone can't explain the difference; variables like fish type and trophic level are needed.",
    },
    {
      id: "ep3-quiz-4",
      question: "What is Cate's conclusion at the end of the story?",
      options: ["She confirmed the cause", "Too little to call an explanation, but a bit too regular to call coincidence (hypothesis, need more evidence)", "All coincidence", "Fish should be banned"],
      correctIndex: 1,
      feedback: "She said it was still too little to call an explanation but a bit too regular to call coincidence—so not a final conclusion but hypothesis/possibility.",
    },
  ],
};
