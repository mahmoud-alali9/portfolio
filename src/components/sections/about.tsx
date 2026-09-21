'use client';

import { Car, Compass, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const tiles = [
  {
    tile: {
      label: 'Basé à Montpellier',
      image: '/images/about/montpellier.jpg',
      rotation: 4.6,
    },
    icon: {
      Icon: MapPin,
      classname: 'top-0 -translate-y-1/2 -right-4',
      hoverX: -226,
    },
  },
  {
    tile: {
      label: 'Permis de conduire',
      image: '/images/about/permis-de-conduire.jpg',
      rotation: -4,
    },
    icon: {
      Icon: Car,
      classname: 'bottom-0 translate-y-1/2 -right-4',
      hoverX: -206,
    },
  },
  {
    tile: {
      label: 'Mobile sur toute la France',
      image: '/images/about/mobile-france.jpg',
      rotation: 3.6,
    },
    icon: {
      Icon: Compass,
      classname: 'top-0 -translate-y-1/2 left-8',
      hoverX: 126,
    },
  },
];

const About = () => {
  return (
    <section className="section-padding bigger-container space-y-11 md:space-y-21">
      <div className="space-y-10 md:container">
        <h2 className="text-2xl leading-none">À propos</h2>
        <div className="text-muted-foreground space-y-8 text-lg md:space-y-11">
          <p>
            Mes projets ci-dessus donnent une bonne idée du terrain que je
            couvre : graphes de connaissances, agents multi-LLM,
            classification NLP. Le fil conducteur, c&apos;est de ne jamais
            livrer un système sans savoir précisément ce qu&apos;il vaut —
            d&apos;où les évaluations RAGAS, faithfulness et context recall à
            chaque fois.
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
              className="relative size-[250px] overflow-hidden rounded-3xl"
              variants={{
                idle: { rotate: item.tile.rotation },
                hover: { rotate: -item.tile.rotation },
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img
                src={item.tile.image}
                alt={item.tile.label}
                className="size-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pt-10 pb-4 text-center">
                <span className="text-sm leading-none text-balance text-white">
                  {item.tile.label}
                </span>
              </div>
            </motion.div>
            <motion.div
              className={`bg-background absolute flex size-14 items-center justify-center rounded-full border shadow-xs ${item.icon.classname}`}
              variants={{
                idle: { x: 0 },
                hover: { x: item.icon.hoverX },
              }}
              transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            >
              <item.icon.Icon className="text-foreground size-6" />
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default About;
