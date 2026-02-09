'use client';

import { motion } from 'framer-motion';
import {
  Box,
  Sparkles,
  Grid3X3,
  Database,
  Gauge,
  ShieldOff,
  CheckCircle2,
  BookOpen,
  Sliders,
  Target,
  TrendingUp,
  Zap,
  Lock,
} from 'lucide-react';

const STANDARD_ITEMS: Array<{ icon: typeof Box; text: string }> = [
  { icon: Box, text: 'Import sklearn.ensemble black boxes' },
  { icon: Sparkles, text: 'Post-hoc SHAP explanations (approximations)' },
  { icon: Grid3X3, text: 'Grid search hyperparameters on thousands of features' },
  { icon: Database, text: 'Requires massive datasets (n>10,000)' },
  { icon: Gauge, text: 'Overconfident predictions (90% confidence, 60% accuracy)' },
  { icon: ShieldOff, text: 'Retrofitted compliance layers' },
];

const THEORY_ITEMS: Array<{ icon: typeof BookOpen; text: string }> = [
  {
    icon: BookOpen,
    text: 'Encode Baldwin & Ford, Christopher & Peck as computational constraints',
  },
  {
    icon: CheckCircle2,
    text: 'Ante hoc interpretability (coefficients map to theory)',
  },
  {
    icon: Sliders,
    text: 'Structural equation priors with theoretically valid bounds',
  },
  {
    icon: Target,
    text: 'Calibrated for small, critical datasets (n<1000)',
  },
  {
    icon: Gauge,
    text: 'Probability calibration (90% confidence, 88-92% accuracy)',
  },
  {
    icon: Lock,
    text: 'Governance built into hypothesis space',
  },
];

const METRICS = [
  {
    icon: Gauge,
    value: '64% calibration improvement',
    subtext: 'Predicted probabilities match real-world frequencies',
  },
  {
    icon: TrendingUp,
    value: '94% false positive reduction',
    subtext: 'Theory-based filtering eliminates alert noise',
  },
  {
    icon: Zap,
    value: '99% decision velocity',
    subtext: 'Days to minutes for critical assessments',
  },
  {
    icon: Lock,
    value: 'Zero retrofitting',
    subtext: 'Compliance built in, not bolted on',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function TheoryAdvantage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-surface/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          className="font-serif text-2xl sm:text-3xl font-semibold text-primary-text text-center mb-2"
        >
          The Theory-Constraint Advantage
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent text-center text-lg font-medium mb-2"
        >
          Explainable AI by Design, Not by Approximation
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-secondary-text text-center max-w-2xl mx-auto mb-12"
        >
          Building interpretability into the architecture before the algorithm sees data.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-14"
        >
          <motion.div
            variants={item}
            className="rounded-xl border border-border bg-surface/40 p-6 opacity-75"
          >
            <h3 className="font-serif text-lg font-semibold text-slate-400 mb-4">
              Standard ML
            </h3>
            <ul className="space-y-3">
              {STANDARD_ITEMS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-slate-400 text-sm">
                  <Icon size={18} className="shrink-0 mt-0.5 text-slate-500" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={item}
            className="rounded-xl border-2 border-accent/50 bg-surface p-6 shadow-lg shadow-accent/5"
          >
            <h3 className="font-serif text-lg font-semibold text-accent mb-4">
              Theory-Constrained
            </h3>
            <ul className="space-y-3">
              {THEORY_ITEMS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-primary-text text-sm">
                  <Icon size={18} className="shrink-0 mt-0.5 text-accent" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {METRICS.map(({ icon: Icon, value, subtext }) => (
            <motion.div
              key={value}
              variants={item}
              className="rounded-xl border border-border bg-surface p-4 flex flex-col items-start"
            >
              <Icon size={24} className="text-accent mb-2" />
              <span className="font-semibold text-primary-text text-sm">{value}</span>
              <span className="text-secondary-text text-xs mt-1">{subtext}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto text-primary-text/95 text-sm sm:text-base leading-relaxed border-l-4 border-accent pl-6 py-2"
        >
          The Difference: Standard AI asks &quot;What patterns exist in the data?&quot;
          Theory-Constrained AI asks &quot;What patterns should exist based on 40 years of
          organizational psychology?&quot; This inductive bias reduces variance on small
          datasets while guaranteeing interpretability.
        </motion.blockquote>
      </div>
    </section>
  );
}
