'use client';

import { motion } from 'motion/react';

const LANGUAGES = [
  { name: 'Arabe', level: 'Langue maternelle' },
  { name: 'Français', level: 'C1 — courant' },
  { name: 'Anglais', level: 'B2 — professionnel' },
];

const AboutFavorites = () => {
  return (
    <section className="section-padding container">
      <div className="grid gap-10 md:grid-cols-2 md:gap-20">
        <h2 className="text-2xl">Langues</h2>

        <ul className="space-y-4">
          {LANGUAGES.map((language) => (
            <motion.li
              key={language.name}
              className="text-lg leading-none"
              whileHover={{ x: 8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <span>{language.name}</span>
              <span className="text-muted-foreground"> — {language.level}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutFavorites;
