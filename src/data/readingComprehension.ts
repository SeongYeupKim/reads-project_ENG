/**
 * Reading comprehension — 3 expository texts + 12 items
 */

export interface ComprehensionItem {
  id: string;
  textIndex: number;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
}

export interface ComprehensionText {
  index: number;
  title: string;
  body: string;
  items: ComprehensionItem[];
}

export const comprehensionTexts: ComprehensionText[] = [
  {
    index: 1,
    title: "Text 1",
    body: `Marine neurotoxins and human memory

Marine ecosystems host diverse microorganisms, some of which produce chemical compounds. Many of these are harmless, but some can affect the nervous system of animals or humans. Certain marine microalgae or microbes produce "neurotoxins," and because these substances can accumulate in seafood and affect human health, they have been an important focus of scientific research.

Marine neurotoxins are often associated with "harmful algal blooms." A harmful algal bloom refers to the rapid increase of certain microalgae in the marine environment. Some of these algae release toxins that disrupt the function of nerve cells. Such toxins can interfere with chemical signaling between nerve cells in the brain and may lead to symptoms in humans such as confusion, poor concentration, or short-term memory problems. A well-known example is "domoic acid," produced by certain marine algae. Research suggests that domoic acid can affect brain regions involved in memory formation. In severe cases, exposure to this toxin can cause amnesic shellfish poisoning, with symptoms including memory loss, headache, and loss of spatial orientation.

People are usually exposed to these toxins by eating contaminated seafood. Shellfish and fish can accumulate toxins in their bodies by consuming toxin-producing microorganisms. In addition, these toxins are not always fully removed by cooking or heating. For this reason, many coastal regions continuously monitor toxin levels in the marine environment and in seafood. Such monitoring programs help prevent large-scale poisoning events, but in communities where seafood is consumed frequently, low-level exposure may still occur. Researchers such as Anderson and colleagues continue to study how these toxins move through marine ecosystems and affect human health.`,
    items: [
      {
        id: "rc1-1",
        textIndex: 1,
        question: "What does a harmful algal bloom mean?",
        options: [
          "Marine life dying in large numbers",
          "Certain microalgae increasing rapidly in the marine environment",
          "Seawater temperature rising sharply",
          "Fish catches declining in coastal areas",
        ],
        correctIndex: 1,
      },
      {
        id: "rc1-2",
        textIndex: 1,
        question: "What substance is mentioned as a main cause of amnesic shellfish poisoning?",
        options: ["Mercury", "Domoic acid", "Plankton toxin", "Nitrate"],
        correctIndex: 1,
      },
      {
        id: "rc1-3",
        textIndex: 1,
        question:
          "According to the text, what is the main reason coastal areas continuously monitor toxin levels in seafood?",
        options: [
          "To regulate fish catches",
          "To study marine biodiversity",
          "To prevent risks that can affect human health",
          "To protect marine tourism",
        ],
        correctIndex: 2,
      },
      {
        id: "rc1-4",
        textIndex: 1,
        question: "Which inference best matches the text?",
        options: [
          "All marine microorganisms produce toxins harmful to humans.",
          "Marine toxins are always removed by cooking.",
          "Toxins produced by marine microorganisms can reach humans through seafood consumption.",
          "Marine toxins only affect people living in coastal areas.",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    index: 2,
    title: "Text 2",
    body: `Food chains and bioaccumulation

In marine ecosystems, energy and materials move through food chains. At the bottom of the food chain are tiny organisms such as phytoplankton, which use solar energy through photosynthesis. These small organisms are eaten by larger ones such as zooplankton or small fish, and the food chain continues upward as larger fish eat these. Nutrients move through these feeding relationships relatively efficiently.

Some chemicals, however, behave differently. Certain substances are not easily broken down or excreted once they enter an organism's body. In that case, the substance remains in the organism's tissues. If a predator repeatedly consumes prey that contain the substance, the amount of the substance can gradually increase. This is called bioaccumulation.

When the concentration of a substance is higher at higher levels of the food chain, we speak of "biomagnification." In marine environments, this process is observed not only with environmental pollutants but also with naturally produced toxins. For example, tiny marine organisms may contain only a very small amount of a toxin. Fish that eat many of these small organisms can accumulate more of the toxin. In larger predatory fish that eat those fish, toxin concentrations can be even higher. Humans often consume species at the top of the food chain, such as tuna, and may therefore be exposed to substances that have accumulated through this process. Scientists who study marine ecosystems closely examine feeding relationships and the movement of materials. Understanding these ecological processes helps predict risks to wildlife and humans, because analyzing feeding relationships and ecological connectivity allows us to understand where and how certain substances can accumulate.`,
    items: [
      {
        id: "rc2-5",
        textIndex: 2,
        question: "What does bioaccumulation mean?",
        options: [
          "Organisms producing toxins",
          "A substance building up in an organism's tissues",
          "The collapse of a food chain",
          "An increase in the number of organisms",
        ],
        correctIndex: 1,
      },
      {
        id: "rc2-6",
        textIndex: 2,
        question: "What organisms are at the bottom of the food chain?",
        options: [
          "Large predatory fish",
          "Phytoplankton",
          "Marine mammals",
          "Humans",
        ],
        correctIndex: 1,
      },
      {
        id: "rc2-7",
        textIndex: 2,
        question:
          "Why can toxin concentration be higher in predatory fish at the top of the food chain?",
        options: [
          "Large fish produce more toxin",
          "Predators accumulate toxin by repeatedly consuming many prey",
          "Large fish live longer",
          "Predatory fish cannot remove toxin",
        ],
        correctIndex: 1,
      },
      {
        id: "rc2-8",
        textIndex: 2,
        question:
          "According to the text, which situation best describes biomagnification?",
        options: [
          "Small plankton produce toxin",
          "Small organisms contain a little toxin, but predators that eat them accumulate a higher concentration",
          "Toxin in the water disappears over time",
          "Toxin is diluted in seawater",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    index: 3,
    title: "Text 3",
    body: `Investigating neurological symptoms in coastal communities

In various coastal regions around the world, similar neurological symptoms among residents have been reported. Such research often begins when health workers notice common symptoms among patients. Patients may report confusion, short-term memory problems, or difficulty concentrating. Public health researchers analyze not only medical records but also environmental data to understand these phenomena. For example, they examine patients' seafood consumption habits, fishing areas, and changes in the marine environment. Some studies have reported cases where such symptoms coincided with changes in the marine environment or harmful algal blooms. In this process, researchers review multiple types of evidence. Medical records show patients' symptoms and health status.

Fisheries data can show which species were caught in large quantities at certain times. Marine monitoring data provide information on water temperature changes, plankton increases, or changes in toxin concentrations. In some cases, it has been suggested that toxin-producing microorganisms increased in a certain area and that fish caught there may have accumulated these substances. If such fish are frequently consumed in the community, residents may be repeatedly exposed to low levels of toxin. Many coastal regions therefore run systems that monitor both the marine environment and seafood safety. These systems play an important role in detecting warning signs early and protecting community health. Researchers emphasize that understanding these issues requires analyzing information from multiple sources rather than a single type of data. Only when medical, ecological, and fisheries data are analyzed together can the causes of events be understood more accurately.`,
    items: [
      {
        id: "rc3-9",
        textIndex: 3,
        question:
          "Which of the following was NOT mentioned in the text as data used to investigate coastal health problems?",
        options: [
          "Medical records",
          "Fisheries data",
          "Marine environment data",
          "Genetic analysis data",
        ],
        correctIndex: 3,
      },
      {
        id: "rc3-10",
        textIndex: 3,
        question: "What neurological symptom was reported by patients in the text?",
        options: ["Vision loss", "Short-term memory problems", "Muscle cramps", "Hearing loss"],
        correctIndex: 1,
      },
      {
        id: "rc3-11",
        textIndex: 3,
        question:
          "Why do researchers analyze medical, fisheries, and marine environment data together?",
        options: [
          "Combining different data allows a more accurate understanding of causes",
          "Research is impossible with medical data alone",
          "Fisheries data are most important",
          "Environmental data always explain human health problems",
        ],
        correctIndex: 0,
      },
      {
        id: "rc3-12",
        textIndex: 3,
        question:
          "Based on the text, what is the most reasonable way for researchers to investigate the cause of neurological symptoms in coastal communities?",
        options: [
          "Investigate only patient symptoms",
          "Analyze seafood consumption patterns and marine environment changes together",
          "Analyze only changes in fish catches",
          "Investigate only patient age",
        ],
        correctIndex: 1,
      },
    ],
  },
];
