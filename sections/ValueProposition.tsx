'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X } from 'lucide-react';

const STANDARD = [
  'Import sklearn.ensemble',
  'Post-hoc SHAP explanations',
  'Grid search hyperparameters',
  'Assumes iid data, large n',
];

const THEORY_CONSTRAINED = [
  'Encode Baldwin & Ford as feature constraints',
  'Ante hoc interpretability',
  'Structural equation priors',
  'Handles n=600, censored data',
];

export default function ValueProposition() {
  const [showTheory, setShowTheory] = useState(true);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-2xl sm:text-3xl font-semibold text-primary-text text-center mb-4"
        >
          Theory vs. Standard ML
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-secondary-text text-center max-w-2xl mx-auto mb-10"
        >
          Accuracy maintained, variance reduced, governance built-in.
        </motion.p>

        <div className="flex justify-center mb-8">
          <div
            role="switch"
            aria-checked={showTheory}
            className="inline-flex rounded-lg border border-border bg-surface p-1"
          >
            <button
              type="button"
              onClick={() => setShowTheory(false)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors min-h-[44px] ${
                !showTheory
                  ? 'bg-accent text-primary-text'
                  : 'text-secondary-text hover:text-primary-text'
              }`}
            >
              Standard Approach
            </button>
            <button
              type="button"
              onClick={() => setShowTheory(true)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors min-h-[44px] ${
                showTheory
                  ? 'bg-accent text-primary-text'
                  : 'text-secondary-text hover:text-primary-text'
              }`}
            >
              Theory-Constrained
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            animate={{
              opacity: showTheory ? 0.5 : 1,
              filter: showTheory ? 'grayscale(0.4)' : 'grayscale(0)',
            }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border border-border bg-surface/60 p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <X className="text-secondary-text" size={20} />
              <h3 className="font-serif text-lg font-semibold text-secondary-text">
                Standard Approach
              </h3>
            </div>
            <ul className="space-y-3 font-mono text-sm text-secondary-text">
              {STANDARD.map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <span className="text-slate-500">→</span>
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            animate={{
              opacity: showTheory ? 1 : 0.6,
              filter: showTheory ? 'grayscale(0)' : 'grayscale(0.3)',
            }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border-2 border-accent/50 bg-surface p-6 shadow-lg shadow-accent/5"
          >
            <div className="flex items-center gap-2 mb-4">
              <Check className="text-accent" size={20} />
              <h3 className="font-serif text-lg font-semibold text-primary-text">
                Theory-Constrained Approach
              </h3>
            </div>
            <ul className="space-y-3 font-mono text-sm text-primary-text">
              {THEORY_CONSTRAINED.map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <span className="text-accent">→</span>
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <p className="inline-flex items-center gap-2 text-sm text-impact font-medium">
            <ArrowRight className="rotate-180" size={18} />
            Accuracy maintained · Variance reduced · Governance built-in
          </p>
        </motion.div>
      </div>
    </section>
  );
}
