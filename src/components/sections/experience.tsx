'use client';

import { motion } from 'motion/react';

const formations = [
  {
    school: 'Université de Montpellier',
    program: 'M2 Informatique — parcours IASD',
    subtitle: 'Intelligence Artificielle et Science des Données',
    period: '2025 – en cours',
    description:
      "Machine learning, NLP, représentation sémantique des données et raisonnement pour l'aide à la décision. Double diplôme avec l'IAE Montpellier.",
    link: 'https://informatique-fds.edu.umontpellier.fr/etudiants/master-informatique-parcours/parcours-iasd-intelligence-artificielle-et-science-des-donnees-ouverture-septembre-2021/',
  },
  {
    school: 'IAE Montpellier',
    program: 'M2 Management des Technologies et des Sciences',
    subtitle: null,
    period: '2025 – en cours',
    description:
      "Double diplôme à l'interface sciences/entreprise — pilotage de projets technologiques et transformation data.",
    link: 'https://iae.umontpellier.fr/formation/master-2-management-technologies-et-sciences/',
  },
  {
    school: 'Université de Montpellier',
    program: 'Licence Informatique',
    subtitle: null,
    period: '2022 – 2025',
    description:
      "Fondamentaux de l'algorithmique, des bases de données et du développement logiciel.",
    link: 'https://informatique-fds.edu.umontpellier.fr/etudiants/offre-de-formation-licence/',
  },
];

const Experience = () => {
  return (
    <section className="section-padding container space-y-10">
      <h2 className="text-2xl leading-none">Formation</h2>

      <ul className="space-y-10">
        {formations.map((formation) => (
          <motion.li
            key={formation.program}
            className="text-lg leading-none"
            initial="idle"
            whileHover="hover"
          >
            <motion.div
              variants={{
                idle: { x: 0 },
                hover: { x: 8 },
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <a
                href={formation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                {formation.program}
              </a>
            </motion.div>
            {formation.subtitle && (
              <motion.p
                className="text-muted-foreground mt-4"
                variants={{
                  idle: { x: 0, opacity: 0.7 },
                  hover: { x: 8, opacity: 1 },
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                  delay: 0.02,
                }}
              >
                {formation.subtitle}
              </motion.p>
            )}
            <motion.p
              className="text-muted-foreground mt-4"
              variants={{
                idle: { x: 0, opacity: 0.7 },
                hover: { x: 8, opacity: 1 },
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 25,
                delay: 0.04,
              }}
            >
              {formation.school} · {formation.period}
            </motion.p>
            <motion.p
              className="text-muted-foreground mt-4"
              variants={{
                idle: { x: 0, opacity: 0.7 },
                hover: { x: 8, opacity: 1 },
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 25,
                delay: 0.06,
              }}
            >
              {formation.description}
            </motion.p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
