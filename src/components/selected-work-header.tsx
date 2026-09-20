'use client';

import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export const SelectedWorkHeader = () => {
  return (
    <motion.div
      className="md:container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 className="text-2xl leading-none" variants={itemVariants}>
        Projets
      </motion.h2>
    </motion.div>
  );
};
