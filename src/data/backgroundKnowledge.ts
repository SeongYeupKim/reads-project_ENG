/**
 * Background knowledge check (after Episode 4)
 */

export interface BackgroundKnowledgeItem {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
}

export const backgroundKnowledgeItems: BackgroundKnowledgeItem[] = [
  {
    id: "bk1",
    question: "In marine ecosystems, what does plankton refer to?",
    options: [
      "Fish that live in the sea",
      "Very small organisms that drift in the water",
      "Organisms that live only on the seafloor",
      "Large predatory fish",
    ],
    correctIndex: 1,
  },
  {
    id: "bk2",
    question: "Which of the following best describes a food chain?",
    options: [
      "The process by which ocean temperature changes",
      "A structure in which organisms are linked by who eats whom",
      "The path along which fish migrate",
      "The distribution of organisms by ocean depth",
    ],
    correctIndex: 1,
  },
  {
    id: "bk3",
    question: "In a food chain, predatory species typically have which characteristic?",
    options: [
      "They mainly eat plants",
      "They have large body size",
      "They are always at the bottom of the food chain",
      "They eat other fish or animals",
    ],
    correctIndex: 3,
  },
  {
    id: "bk4",
    question: "What do we call the rapid increase of some microalgae in marine environments?",
    options: ["Algal growth", "Algal erosion", "Coral formation", "Algal bloom"],
    correctIndex: 3,
  },
  {
    id: "bk5",
    question: "Neurotoxins are substances that can affect what?",
    options: ["Bone growth", "Muscle size", "Thinking and memory", "Skin color"],
    correctIndex: 2,
  },
  {
    id: "bk6",
    question: "Which brain region is most closely associated with human memory formation?",
    options: ["Cerebellum", "Hippocampus", "Medulla", "Cerebrum"],
    correctIndex: 1,
  },
  {
    id: "bk7",
    question: 'Which of the following best describes "bioaccumulation"?',
    options: [
      "A process in which a trait becomes stronger",
      "Organisms growing larger as they develop",
      "A substance gradually building up in an organism's body",
      "Organisms evolving into new species",
    ],
    correctIndex: 2,
  },
  {
    id: "bk8",
    question:
      "What do we call the phenomenon where a substance's concentration increases at higher levels of the food chain?",
    options: ["Photosynthesis", "Biomagnification", "Oxygen exchange", "Evaporation"],
    correctIndex: 1,
  },
  {
    id: "bk9",
    question:
      "When a substance moves through the marine food chain, why might its concentration increase?",
    options: [
      "Marine predators consume many prey that contain it",
      "Ocean temperature rises",
      "Fish become stronger",
      "Oxygen in the water increases",
    ],
    correctIndex: 0,
  },
  {
    id: "bk10",
    question: "What is the most common route of exposure to marine toxins?",
    options: [
      "Drinking seawater",
      "Eating contaminated seafood",
      "Putting hands in seawater",
      "Standing on the shore",
    ],
    correctIndex: 1,
  },
];
