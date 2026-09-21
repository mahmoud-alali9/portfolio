'use client';

import { Check } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import { CONTACT_EMAIL } from '@/lib/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  },
};

const STATUS_ITEMS = [
  'Alternance 12 mois — disponible maintenant',
  'Stage 6 mois — janv / fév / mars 2027',
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const emailY = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      className="hero-padding container space-y-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ opacity }}
    >
      {/* Text content */}
      <motion.div
        className="flex flex-col gap-5"
        variants={itemVariants}
        style={{ y: textY }}
      >
        <h1 className="text-3xl md:text-4xl">Salut, je suis Mahmoud</h1>
        <div className="text-muted-foreground max-w-2xl space-y-4 text-lg leading-normal">
          <p>
            Étudiant en double M2 Intelligence Artificielle &amp; Management à
            Montpellier. Je passe le plus clair de mon temps à faire tourner
            des pipelines RAG et des agents LLM sur des cas concrets, puis à
            mesurer si ça marche vraiment plutôt que de le supposer.
          </p>
          <p>
            Disponible en alternance 12 mois (maintenant) ou stage fin
            d&apos;études 6 mois (janvier, février ou mars 2027).
          </p>
        </div>

        <ul className="flex flex-wrap gap-3 pt-2">
          {STATUS_ITEMS.map((status) => (
            <li
              key={status}
              className="bg-muted text-foreground flex items-center gap-2 rounded-full px-4 py-2 text-sm leading-none"
            >
              <Check className="size-4" aria-hidden="true" />
              {status}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Email link */}
      <motion.div variants={itemVariants} style={{ y: emailY }}>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="link-underline text-lg leading-none"
        >
          {CONTACT_EMAIL}
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
