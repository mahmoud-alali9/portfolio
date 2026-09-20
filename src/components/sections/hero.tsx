'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import {
  AVAILABILITY_BADGES,
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
} from '@/lib/constants';

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

const socialLinks = [
  { name: 'GitHub', href: GITHUB_URL, icon: Github },
  { name: 'LinkedIn', href: LINKEDIN_URL, icon: Linkedin },
  { name: 'Email', href: `mailto:${CONTACT_EMAIL}`, icon: Mail },
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const metaY = useTransform(scrollYProgress, [0, 1], [0, -15]);
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
      {/* Name + role */}
      <motion.div
        className="flex flex-col gap-5"
        variants={itemVariants}
        style={{ y: textY }}
      >
        <h1 className="text-4xl leading-tight font-semibold tracking-tight md:text-6xl lg:text-7xl">
          <span aria-hidden="true">👋</span> Mahmoud AL ALI
        </h1>
        <p className="text-muted-foreground text-lg leading-snug md:text-xl">
          Étudiant M2 IA &amp; Data Science — AI Engineer
        </p>
      </motion.div>

      {/* Bio */}
      <motion.div
        className="text-muted-foreground max-w-2xl space-y-4 text-base leading-relaxed md:text-lg"
        variants={itemVariants}
        style={{ y: textY }}
      >
        <p>Salut, je suis Mahmoud.</p>
        <p>
          Étudiant en double M2 Intelligence Artificielle &amp; Management à
          Montpellier. Je construis des systèmes RAG, des agents LLM et des
          Knowledge Graphs — du prototype jusqu&apos;à l&apos;évaluation avec
          des métriques concrètes.
        </p>
        <p>
          Disponible en alternance 12 mois (maintenant) ou stage fin
          d&apos;études 6 mois (janvier, février ou mars 2027).
        </p>
      </motion.div>

      {/* Availability badges */}
      <motion.ul
        className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-6"
        variants={itemVariants}
        style={{ y: metaY }}
      >
        {AVAILABILITY_BADGES.map((badge) => (
          <li key={badge} className="flex items-center gap-2 text-sm">
            <span
              className="size-2 shrink-0 rounded-full bg-green-500"
              aria-hidden="true"
            />
            <span className="text-muted-foreground">{badge}</span>
          </li>
        ))}
      </motion.ul>

      {/* Social links */}
      <motion.div
        className="flex items-center gap-6"
        variants={itemVariants}
        style={{ y: metaY }}
      >
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={
                link.href.startsWith('mailto:')
                  ? undefined
                  : 'noopener noreferrer'
              }
              aria-label={link.name}
              className="link-underline text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm"
            >
              <Icon className="size-4" aria-hidden="true" />
              {link.name}
            </a>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Hero;
