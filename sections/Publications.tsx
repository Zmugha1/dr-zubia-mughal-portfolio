'use client';

import { motion } from 'framer-motion';
import { FileText, ExternalLink, Download } from 'lucide-react';

const FEATURED = {
  title: 'Theory-Constrained Inductive Bias for High-Stakes Tabular Classification',
  venue: 'University of Wisconsin-Stout (Ed.D. Dissertation)',
  abstract:
    'Operationalizing Training Transfer Theory, Dreyfus Skills Taxonomy, and Collaborative Partnership Theory as computational constraints in survival analysis and classification—delivering calibrated, interpretable models on small personnel and supply chain datasets.',
  scholarUrl: 'https://scholar.google.com',
  pdfUrl: '#', // PLACEHOLDER: Replace with actual PDF link
};

const ADDITIONAL: Array<{
  title: string;
  author?: string;
  venue?: string;
  citedBy?: number;
  year?: number;
  link?: string;
}> = [
  {
    title:
      'Optimizing workplace training transfer: A case study on designing the 70:20:10 training strategy through SME and L&D collaboration',
    author: 'Z Mughal',
    venue: 'University of Wisconsin--Stout',
    citedBy: 5,
    year: 2023,
  },
  {
    title: 'Forecasting with Purpose: From Risk Scores to Revenue Reality – Part 4 of 4',
    author: 'DZ Mughal',
    year: 2026,
  },
  {
    title: 'Grouping by Behavior for Clustering That Tells a Story – Part 3 of 4',
    author: 'DZ Mughal',
    year: 2026,
  },
  {
    title: 'Discovering the Heart of the System – Part 2 of 4',
    author: 'DZ Mughal',
    year: 2026,
  },
  {
    title: 'Making Financial Forecasting More Trustworthy – Part 1 of 4',
    author: 'DZ Mughal',
    year: 2026,
    link: 'https://www.impactmybiz.com/blog/trustworthy-financial-forecasting/',
  },
  {
    title: 'I Thought I Was Solving for Churn - I Was Actually Solving for AI Reliability',
    author: 'DZ Mughal',
    year: 2026,
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-2xl sm:text-3xl font-semibold text-primary-text mb-8"
        >
          Publications
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border-2 border-accent/30 bg-surface p-6 mb-8"
        >
          <div className="flex items-start gap-3 mb-3">
            <FileText className="text-accent shrink-0 mt-0.5" size={24} />
            <div>
              <h3 className="font-serif text-lg font-semibold text-primary-text">
                {FEATURED.title}
              </h3>
              <p className="text-sm text-secondary-text mt-1">{FEATURED.venue}</p>
            </div>
          </div>
          <p className="text-secondary-text text-sm leading-relaxed mb-4">
            {FEATURED.abstract}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={FEATURED.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-primary-text hover:border-accent hover:text-accent transition-colors min-h-[44px]"
            >
              Google Scholar
              <ExternalLink size={16} />
            </a>
            <a
              href={FEATURED.pdfUrl}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-primary-text hover:bg-accent-hover transition-colors min-h-[44px]"
            >
              Download PDF
              <Download size={16} />
            </a>
          </div>
        </motion.div>

        <p className="text-sm text-secondary-text mb-4">Additional papers & reports</p>
        <ul className="space-y-3">
          {ADDITIONAL.map((item) => {
            const meta = [item.author, item.venue, item.year].filter(Boolean).join(' · ');
            const className =
              'block rounded-lg border border-border bg-surface/50 px-4 py-3 hover:border-accent/40 transition-colors';
            return (
              <li key={item.title}>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    <span className="font-medium text-primary-text">{item.title}</span>
                    <div className="text-sm text-secondary-text mt-1 flex flex-wrap items-center gap-x-2 gap-y-0">
                      {meta && <span>{meta}</span>}
                      {item.citedBy != null && (
                        <span className="text-accent">Cited by {item.citedBy}</span>
                      )}
                      <span className="inline-flex items-center gap-1 text-accent">
                        Read <ExternalLink size={12} />
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className={className}>
                    <span className="font-medium text-primary-text">{item.title}</span>
                    <div className="text-sm text-secondary-text mt-1 flex flex-wrap items-center gap-x-2 gap-y-0">
                      {meta && <span>{meta}</span>}
                      {item.citedBy != null && (
                        <span className="text-accent">Cited by {item.citedBy}</span>
                      )}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
