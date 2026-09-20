'use client';

import { motion } from 'motion/react';

interface FormationEntry {
  school: string;
  program: string;
  detail?: string;
  period: string;
}

const formation: FormationEntry[] = [
  {
    school: 'Université de Montpellier',
    program: 'M2 Informatique — parcours IASD',
    detail: 'Intelligence Artificielle et Science des Données',
    period: '2025 – en cours',
  },
  {
    school: 'IAE Montpellier',
    program: 'M2 Management des Technologies et des Sciences',
    period: '2025 – en cours',
  },
  {
    school: 'Université de Montpellier',
    program: 'Licence Informatique',
    period: '2022 – 2025',
  },
];

const languages = [
  { name: 'Arabe', level: 'Langue maternelle' },
  { name: 'Français', level: 'C1 — courant' },
  { name: 'Anglais', level: 'B2 — professionnel' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  },
};

const Experience = () => {
  return (
    <section id="formation" className="section-padding container space-y-10">
      <h2 className="text-2xl leading-none">Formation</h2>

      <ul className="border-border divide-border divide-y border-t">
        {formation.map((entry, index) => (
          <motion.li
            key={`${entry.school}-${entry.program}`}
            className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            variants={itemVariants}
          >
            <div className="space-y-1.5">
              <p className="text-lg leading-tight font-semibold">
                {entry.school}
              </p>
              <p className="text-muted-foreground leading-snug">
                {entry.program}
              </p>
              {entry.detail && (
                <p className="text-muted-foreground/70 text-sm leading-snug">
                  {entry.detail}
                </p>
              )}
            </div>
            <p className="text-muted-foreground shrink-0 text-sm sm:text-right">
              {entry.period}
            </p>
          </motion.li>
        ))}
      </ul>

      <div className="space-y-4 pt-4">
        <p className="text-lg leading-none">Langues</p>
        <ul className="text-muted-foreground space-y-2">
          {languages.map((lang) => (
            <li key={lang.name} className="flex items-baseline gap-2">
              <span className="text-foreground">{lang.name}</span>
              <span aria-hidden="true">—</span>
              <span>{lang.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
