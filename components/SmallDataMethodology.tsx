'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Signal, Quote } from 'lucide-react';

export default function SmallDataMethodology() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          className="text-sm font-medium tracking-wide text-accent uppercase mb-2"
        >
          Robustness
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-2xl sm:text-3xl font-semibold text-primary-text mb-2"
        >
          The Small Data Problem
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-secondary-text text-lg mb-12"
        >
          Limited samples and high missingness are where standard ML fails and
          theory-constrained approaches excel.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0 }}
          className="font-serif text-xl sm:text-2xl text-accent italic mb-6"
        >
          How do you handle limited data with high missingness?
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-primary-text leading-relaxed mb-4"
        >
          Standard ML breaks down here. The typical response is to impute mean
          values or generate synthetic data with SMOTE. In high-stakes
          decisions, that is fabricating evidence.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-primary-text leading-relaxed mb-10"
        >
          I use theory-constrained inductive bias. I treat established domain
          theory as virtual data that constrains the hypothesis space before
          training begins.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 0.6, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            className="rounded-xl border border-border bg-background/60 p-6"
          >
            <div className="flex items-start gap-2 mb-3">
              <Quote size={20} className="text-slate-500 shrink-0 mt-0.5" />
              <span className="font-serif text-sm font-semibold text-slate-400">
                Standard data science says:
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              &quot;We have 600 samples with 30% missingness. Let us use MICE
              imputation or drop rows.&quot; That introduces noise or reduces
              power further.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            className="rounded-xl border-l-4 border-accent border border-border bg-surface p-6"
          >
            <div className="flex items-start gap-2 mb-3">
              <Quote size={20} className="text-accent shrink-0 mt-0.5" />
              <span className="font-serif text-sm font-semibold text-accent">
                My approach says:
              </span>
            </div>
            <p className="text-primary-text text-sm leading-relaxed">
              &quot;We have 600 samples plus 40 years of Supply Chain
              Resilience Theory. Christopher and Peck established that
              redundancy and visibility determine supplier survival. I encode
              those theoretical relationships as constraint matrices on the
              coefficients. The model cannot learn patterns that violate
              established theory, even if incomplete data suggests them.&quot;
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-border bg-surface/80 p-6 mb-10"
        >
          <h3 className="font-serif text-lg font-semibold text-primary-text mb-3 flex items-center gap-2">
            <AlertCircle size={22} className="text-accent" />
            Informative Censoring vs Missing at Random
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <p className="text-secondary-text text-sm leading-relaxed flex-1">
              For missingness itself, I use survival analysis frameworks where
              missing data is often informative censoring, not random loss. In
              defense logistics, if a supplier stops reporting quality metrics,
              that is not missing at random. That is a signal. Cox Proportional
              Hazards handles this natively through partial likelihood
              functions.
            </p>
            <div className="flex items-center gap-2 shrink-0 rounded-lg border border-accent/30 bg-accent/5 px-4 py-3">
              <span className="text-xs text-slate-400 font-medium">
                Missing Data
              </span>
              <Signal size={16} className="text-accent" />
              <span className="text-xs text-accent font-medium">Signal</span>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary-text leading-relaxed mb-10"
        >
          The result is lower variance than Random Forests on small incomplete
          datasets because theory provides structural regularization that no
          hyperparameter tuning can match. We do not fill gaps with guesses. We
          bridge gaps with validated principles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ type: 'spring', stiffness: 200, damping: 24 }}
          className="rounded-xl border-2 border-accent/50 bg-surface p-6 shadow-lg shadow-accent/5"
        >
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="font-serif text-3xl font-bold text-accent">
              94% vs 68%
            </span>
            <span className="text-primary-text font-medium">
              Accuracy achievement
            </span>
          </div>
          <p className="text-secondary-text text-sm mt-2">
            Theory-constrained Cox models on 600 incomplete records vs XGBoost
            with imputation requiring 10,000 samples
          </p>
        </motion.div>
      </div>
    </section>
  );
}
