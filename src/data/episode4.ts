import type { EpisodeContent } from "@/lib/types";

export const episode4: EpisodeContent = {
  meta: {
    id: "4",
    title: "The Order of the Sea",
    scienceConcepts: "Food chain, harmful algal bloom (HAB), neurotoxin, species higher in food chain",
    disciplinaryFocus: "Source/evidence level, mechanism reasoning",
    knowledgeFocus: "coherence: linking concepts, evidence, and claims",
  },
  narrative: `Hyunwoo opened the sample box he had brought from the lab. Small vials were lined up. Each was labeled with a sea area name.

He adjusted the microscope and looked at the first sample. Countless tiny organisms drifted in the water. So small they were barely visible. But in the sea, these small organisms are the start of everything. Small organisms grow. Small fish eat them. Larger fish eat the small fish.

Hyunwoo drew a simple diagram in his notebook. Plankton → small fish → large fish. He paused and thought. 'Could this be.. **harmful algal bloom**?'

In the sea, many substances move in this way. Some are nutrients. Some are simple chemicals. And sometimes there are toxic substances produced by living things. Plankton are mostly harmless, but some species produce toxic chemicals. Some species were known from earlier research to produce **neurotoxins**. Such neurotoxins can affect nerve signaling.

Hyunwoo placed the next sample under the microscope. This area had had high catches lately. He thought for a moment. People in the village eat fish from the sea almost every day. And some fish grow by eating other fish. He wrote a short line in his notebook. Species higher in the food chain. And next to it another note. Repeated consumption.

He didn't close the notebook. In the sea everything is connected. A small change can, through many steps, appear in a completely different form.

Outside the window, boats were returning to the pier. And in the nets, as always, were large fish.`,
  anchoring: [
    {
      id: "ep4-q1",
      type: "situation",
      text: "What is Hyunwoo doing in this story and what key notes did he write?",
      keywords: ["sample, microscope observation", "plankton → small fish → large fish", "harmful algal bloom?", "species higher in food chain, repeated consumption"],
      misconceptionPatterns: ["only observing", "no notes or hypothesis"],
      rubric: { "0": "none/error", "1": "partial (observation only or part of notes)", "2": "sufficient (observation + HAB, food chain, repeated consumption notes)" },
    },
    {
      id: "ep4-q2",
      type: "claim_evidence",
      text: "Why did Hyunwoo write 'harmful algal bloom?' with a question mark? Explain using his observations (samples, food chain diagram) from the passage.",
      keywords: ["plankton, small organisms", "food chain", "possible toxin movement", "still checking (question mark)"],
      misconceptionPatterns: ["state HAB as fact", "no link to observations"],
      rubric: { "0": "none/error", "1": "partial (HAB only or observation only)", "2": "sufficient (observation, food chain linked to hypothesis)" },
    },
    {
      id: "ep4-q3",
      type: "claim_evidence",
      text: "How was 'neurotoxin' introduced in the story and how could it connect to the villagers' memory problems?",
      keywords: ["some plankton species produce it", "affects nerve signaling", "moves along food chain, concentrates", "species higher in chain, repeated consumption"],
      misconceptionPatterns: ["term only, no role", "no link to village story"],
      rubric: { "0": "none/error", "1": "partial (neurotoxin or effect only)", "2": "sufficient (neurotoxin + food chain + repeated consumption linked to village)" },
    },
    {
      id: "ep4-q4",
      type: "alternative_uncertainty",
      text: "In the context of this series (Episodes 1–4), what does 'A small change can, through many steps, appear in a completely different form' mean?",
      keywords: ["plankton, bloom → food chain → large fish → people", "missing the link if only one step", "connections, mechanism", "uncertainty (possibility)"],
      misconceptionPatterns: ["only that the sea changes", "ignore Episodes 1–4 flow"],
      rubric: { "0": "none/error", "1": "partial (small change → different form only)", "2": "sufficient (food chain, toxin, repeated consumption linked)" },
    },
    {
      id: "ep4-q5",
      type: "next_data_method",
      text: "What additional data or methods would be needed to test Hyunwoo's hypothesis (HAB, neurotoxin, species higher in chain, repeated consumption)?",
      keywords: ["toxin, algal species in area samples", "toxin concentration in fish tissue", "intake amount, duration", "comparison with village patients", "establishing cause"],
      misconceptionPatterns: ["already proven", "no specific method"],
      rubric: { "0": "none/error", "1": "partial (one only)", "2": "sufficient (two or more specific)" },
    },
    {
      id: "ep4-q6",
      type: "concept",
      text: "In one sentence, why did he write 'species higher in the food chain' and 'repeated consumption' together?",
      keywords: ["higher level, more toxin concentration", "repeated consumption, cumulative exposure", "villagers often eat large fish", "link to hypothesis"],
      misconceptionPatterns: ["just wrote them", "no link between higher, repeated and toxin, effect"],
      rubric: { "0": "none/error", "1": "partial (higher or repeated only)", "2": "sufficient (one sentence: higher + repeated consumption link to exposure/effect)" },
    },
  ],
  selfExplanation: [
    {
      id: "ep4-q1-se",
      goal: "situation",
      text: "What is Hyunwoo doing in this story and what key notes did he write?",
      keywords: ["sample, microscope", "plankton → small → large fish", "harmful algal bloom?", "species higher in chain, repeated consumption"],
      misconceptionPatterns: ["only observing", "no notes or hypothesis"],
      rubric: { "0": "none/error", "1": "partial (observation or part of notes)", "2": "sufficient (observation + HAB, food chain, repeated consumption)" },
    },
    {
      id: "ep4-se1",
      goal: "cause_effect",
      text: "**What did Hyunwoo observe** and **what notes or hypothesis did he write**? And how could that **connect to Episodes 1–3** (Jiyeon, Taesu, Sumin)? Explain cause and effect.",
      keywords: ["plankton, food chain", "HAB, neurotoxin", "species higher in chain, repeated consumption", "Jiyeon's observations → Taesu's pattern → Sumin's cause-seeking → Hyunwoo's mechanism"],
      misconceptionPatterns: ["only Episode 4", "no link to 1–3"],
      rubric: { "0": "none/error", "1": "partial (Hyunwoo observation, notes only)", "2": "sufficient (Hyunwoo + link to Episodes 1–3)" },
    },
    {
      id: "ep4-se2",
      goal: "evidence_reason",
      text: "Find **evidence** in the passage for Hyunwoo saying **'In the sea everything is connected'** and explain how it **connects**.",
      keywords: ["plankton → small fish → large fish", "substances, toxins moving", "species higher in chain, repeated consumption", "small change → many steps → different form"],
      misconceptionPatterns: ["general claim only", "no specific content from passage"],
      rubric: { "0": "none/error", "1": "partial (one piece)", "2": "sufficient (evidence from passage for connection)" },
    },
  ],
  miniLesson: `Harmful algal bloom (HAB) is when certain plankton increase rapidly. Some species produce neurotoxins, and these toxins can move up the food chain and build up in bodies. Eating species higher in the chain often can mean repeated exposure, and neurotoxins can affect the brain (e.g. hippocampus) or nerve signaling. Hyunwoo's notes (species higher in chain, repeated consumption) are a hypothesis that could connect Jiyeon's memory issues, Taesu's ledger pattern, and Sumin's hospital records into one mechanism. To confirm, we would need research tying area, fish, and patient data together.`,
  quiz: [
    {
      id: "ep4-quiz-1",
      question: "In what context did Hyunwoo write 'Could this be.. harmful algal bloom?'?",
      options: ["Good weather", "After drawing plankton and food chain (small → small fish → large fish), and that substances in the sea move that way and toxins can too", "High catches", "Fish taste good"],
      correctIndex: 1,
      feedback: "Right after drawing the food chain he thought that in the sea many substances move that way and sometimes there are toxic substances—hence harmful algal bloom.",
    },
    {
      id: "ep4-quiz-2",
      question: "How was neurotoxin introduced in the passage?",
      options: ["Fish produce it", "Some plankton species are known to produce it and it can affect nerve signaling", "Villagers produce it", "It's a nutrient"],
      correctIndex: 1,
      feedback: "Some plankton species were known from earlier research to produce neurotoxins, and such neurotoxins can affect nerve signaling.",
    },
    {
      id: "ep4-quiz-3",
      question: "Why did he write 'species higher in the food chain' and 'repeated consumption' together?",
      options: ["Taste", "Higher in chain can mean more concentrated toxin and repeated consumption can mean cumulative exposure—linked to villagers often eating large fish", "To count catch", "To check weather"],
      correctIndex: 1,
      feedback: "After saying villagers eat fish from the sea almost every day and some fish eat other fish, he wrote 'species higher in food chain' and 'repeated consumption'—linked to concentration and repeated exposure.",
    },
    {
      id: "ep4-quiz-4",
      question: "In this series, what does 'A small change can, through many steps, appear in a completely different form' mean?",
      options: ["Only the sea changes", "The possibility that a small change in plankton (bloom) can, through the food chain and repeated consumption, appear as something different like memory problems in people", "Weather changes", "Only fishermen change"],
      correctIndex: 1,
      feedback: "Everything in the sea is connected; a small change through many steps (food chain, repeated consumption) can appear in a different form (e.g. memory problems).",
    },
  ],
};
