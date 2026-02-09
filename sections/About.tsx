'use client';

import { motion } from 'framer-motion';

// PLACEHOLDER: Replace the div below with <Image src="/your-headshot.jpg" width={192} height={192} alt="Zubia Mughal" /> when you have a photo

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="shrink-0"
        >
          <div className="w-48 h-48 rounded-xl border-2 border-border bg-surface overflow-hidden flex items-center justify-center">
            {/* PLACEHOLDER: Replace with <Image src="/your-headshot.jpg" ... /> when you have a photo */}
            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-secondary-text text-sm text-center px-2">
              Professional headshot
            </div>
          </div>
        </motion.div>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl sm:text-3xl font-semibold text-primary-text mb-4"
          >
            About
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-text leading-relaxed mb-6"
          >
            Senior Applied Data Scientist with 6+ years production ML research on 17 years
            enterprise architecture. Doctorate-trained in Decision Intelligence.
          </motion.p>
          <ul className="space-y-2 text-secondary-text text-sm mb-6">
            <li>
              <strong className="text-primary-text">Ed.D.</strong> Workforce Development
              Leadership (UW-Stout)
            </li>
            <li>
              <strong className="text-primary-text">6 years</strong> applied ML ·{' '}
              <strong className="text-primary-text">17 years</strong> enterprise systems
            </li>
            <li>
              <strong className="text-primary-text">Specialization:</strong> Survival
              Analysis, GraphRAG, MLOps Governance
            </li>
          </ul>
          <p className="text-sm text-secondary-text">
            Former roles: Lead Data Researcher (AI Services), Senior Learning Architect,
            and related leadership positions in data and learning design.
          </p>
        </div>
      </div>
    </section>
  );
}
