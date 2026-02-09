'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Gauge, Users } from 'lucide-react';

const PILLARS = [
  {
    icon: Lightbulb,
    title: 'Ante Hoc Interpretability',
    body: 'Theory as architectural constraint, not post-hoc explanation. Following Rudin (2019): interpretability by design for high-stakes procurement and personnel decisions.',
  },
  {
    icon: Gauge,
    title: 'Calibration Governance',
    body: 'Probability accuracy matching real-world frequencies. Survival curves and risk scores that decision-makers can trust—calibrated to actual outcomes, not overconfident point estimates.',
  },
  {
    icon: Users,
    title: 'Human-in-the-Loop',
    body: 'Collaborative Partnership Theory preventing automation bias. Officers can override with domain intelligence; overrides logged with reasoning for audit and model refinement.',
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-2xl sm:text-3xl font-semibold text-primary-text mb-6"
        >
          Research Philosophy
        </motion.h2>
        <motion.blockquote
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-primary-text/95 border-l-4 border-accent pl-6 py-2 mb-12 italic"
        >
          Organizations face a paradox: deep learning succeeds on images and text, but business
          decisions rely on small tabular data where complex models consistently underperform.
        </motion.blockquote>
        <p className="text-secondary-text mb-10">
          On small, high-dimensional tabular data, theory-constrained inductive bias
          (Grinsztajn et al., 2022) and ante hoc interpretability (Rudin, 2019) deliver
          accuracy with governance—without black-box overconfidence.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-background p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <pillar.icon className="text-accent" size={22} />
                <h3 className="font-serif font-semibold text-primary-text">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-sm text-secondary-text leading-relaxed">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
