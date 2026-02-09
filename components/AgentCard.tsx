'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type AgentCardProps = {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  metrics: string[];
  techStack: string;
  repoUrl?: string;
  demoUrl?: string;
  accentColor: 'blue' | 'amber' | 'emerald';
};

const ACCENT_CLASSES = {
  blue: 'border-sky-500/40 text-sky-400 hover:border-sky-500/60',
  amber: 'border-amber-600/40 text-amber-500 hover:border-amber-600/60',
  emerald: 'border-emerald-600/40 text-emerald-500 hover:border-emerald-600/60',
};

export default function AgentCard({
  icon: Icon,
  tag,
  title,
  description,
  metrics,
  techStack,
  repoUrl,
  demoUrl,
  accentColor,
}: AgentCardProps) {
  const accent = ACCENT_CLASSES[accentColor];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group rounded-xl border border-border bg-surface p-6 flex flex-col h-full"
    >
      <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium mb-4 w-fit ${accent}`}>
        <Icon size={14} />
        {tag}
      </div>
      <h3 className="font-serif text-xl font-semibold text-primary-text mb-2">
        {title}
      </h3>
      <p className="text-secondary-text text-sm leading-relaxed mb-4 flex-1">
        {description}
      </p>
      <ul className="space-y-1.5 mb-4">
        {metrics.map((m) => (
          <li key={m} className="text-sm text-primary-text/90 flex items-start gap-2">
            <span className="text-impact font-medium shrink-0">•</span>
            {m}
          </li>
        ))}
      </ul>
      <p className="font-mono text-xs text-secondary-text mb-4">
        {techStack}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm font-medium transition-colors min-h-[44px] ${accent}`}
          >
            GitHub
            <ExternalLink size={14} />
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-sm text-secondary-text hover:text-primary-text hover:border-slate-600 transition-colors min-h-[44px]"
          >
            Live Demo
            <ArrowUpRight size={14} />
          </a>
        )}
        {!repoUrl && !demoUrl && (
          <span className="inline-flex items-center gap-1.5 text-sm text-secondary-text">
            View Agent
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        )}
      </div>
    </motion.article>
  );
}
