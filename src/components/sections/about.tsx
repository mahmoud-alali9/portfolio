'use client';

import { Car, Compass, MapPin } from 'lucide-react';

// Placeholder tiles: a generic lucide icon centered on a muted colored
// background, standing in for real photos until some are provided.
const tiles = [
  { label: 'Basé à Montpellier', Icon: MapPin, color: '#64748b', rotation: 4.6 },
  { label: 'Permis de conduire', Icon: Car, color: '#8a6a4f', rotation: -4 },
  { label: 'Mobile sur toute la France', Icon: Compass, color: '#4f7a6b', rotation: 3.6 },
];

const About = () => {
  return (
    <section className="section-padding bigger-container space-y-11 md:space-y-21">
      <div className="space-y-10 md:container">
        <h2 className="text-2xl leading-none">About</h2>
        <div className="text-muted-foreground space-y-8 text-lg md:space-y-11">
          <p>
            Je travaille sur des pipelines RAG, des agents LLM et des
            Knowledge Graphs — de la modélisation des données jusqu&apos;à
            l&apos;évaluation avec des métriques concrètes (RAGAS,
            faithfulness, context recall).
          </p>
          <p>
            Mon socle technique : Python, LlamaIndex, LangChain, FAISS,
            SPARQL et Apache Jena Fuseki côté IA et web sémantique ;
            scikit-learn, pandas et PyTorch côté ML/NLP.
          </p>
          <p>
            En dehors de l&apos;IA, je m&apos;intéresse au pilotage de projets
            technologiques (double diplôme en management), et je suis
            disponible pour une alternance ou un stage de fin d&apos;études.
          </p>
        </div>
      </div>

      <ul className="flex flex-wrap justify-center gap-8 lg:justify-between">
        {tiles.map((item) => (
          <li
            key={item.label}
            className="group flex size-[250px] items-center justify-center overflow-hidden rounded-3xl"
            style={{
              backgroundColor: `${item.color}1a`,
              transform: `rotate(${item.rotation}deg)`,
            }}
          >
            <div className="flex flex-col items-center gap-4 transition-transform duration-300 group-hover:scale-105">
              <item.Icon className="size-16" style={{ color: item.color }} />
              <span className="text-muted-foreground px-6 text-center text-sm leading-none text-balance">
                {item.label}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
