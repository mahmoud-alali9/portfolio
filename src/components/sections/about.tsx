'use client';

import { motion } from 'motion/react';
import { Car, Compass, MapPin } from 'lucide-react';

// Placeholder tiles: a generic lucide icon centered on a muted colored
// background, standing in for real photos until some are provided.
const tiles = [
  {
    tile: { label: 'Basé à Montpellier', Icon: MapPin, color: '#64748b', rotation: 4.6 },
    emoji: {
      text: '📍',
      classname: 'top-0 -translate-y-1/2 -right-4',
      hoverX: -226,
    },
  },
  {
    tile: { label: 'Permis de conduire', Icon: Car, color: '#8a6a4f', rotation: -4 },
    emoji: {
      text: '🚗',
      classname: 'bottom-0 translate-y-1/2 -right-4',
      hoverX: -206,
    },
  },
  {
    tile: { label: 'Mobile sur toute la France', Icon: Compass, color: '#4f7a6b', rotation: 3.6 },
    emoji: {
      text: '🧭',
      classname: 'top-0 -translate-y-1/2 left-8',
      hoverX: 126,
    },
  },
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
          <motion.li
            key={item.tile.label}
            className="relative"
            initial="idle"
            whileHover="hover"
          >
            <motion.div
              className="relative flex size-[250px] items-center justify-center overflow-hidden rounded-3xl"
              style={{ backgroundColor: `${item.tile.color}1a` }}
              variants={{
                idle: { rotate: item.tile.rotation },
                hover: { rotate: -item.tile.rotation },
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <item.tile.Icon className="size-16" style={{ color: item.tile.color }} />
              <span className="text-muted-foreground absolute bottom-6 px-6 text-center text-sm leading-none text-balance">
                {item.tile.label}
              </span>
            </motion.div>
            <motion.div
              className={`bg-background absolute flex size-14 items-center justify-center rounded-full border shadow-xs ${item.emoji.classname}`}
              variants={{
                idle: { x: 0 },
                hover: { x: item.emoji.hoverX },
              }}
              transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            >
              <span className="text-3xl">{item.emoji.text}</span>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default About;
