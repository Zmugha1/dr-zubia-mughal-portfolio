'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Network, Brain, ChevronDown } from 'lucide-react';
import AgentCard from '@/components/AgentCard';

const FEATURED_AGENTS = [
  {
    icon: Users,
    tag: 'Workforce Development',
    title: 'Theory-Constrained Workforce Risk Agent',
    description:
      'Human-in-the-loop decision intelligence for training transfer optimization (70:20:10). Predicts transfer success and incident risk, clusters personas, proposes 70:20:10 plans—every proposal waits for human approval. Interpretable models, Decision Queue, and audit trail.',
    metrics: [
      '64% improvement in probability calibration (0.18 → 0.065 ECE)',
      '3 days → 4 minutes assessment time',
      '$260K annual labor cost avoidance',
      '94% user trust scores vs. 61% black-box baseline',
    ],
    techStack: 'Streamlit, scikit-learn, Pydantic, Plotly',
    repoUrl: 'https://github.com/Zmugha1/dr-data-training-agent',
    demoUrl: 'https://dr-data-training-agent-zmugha1.streamlit.app',
    accentColor: 'blue' as const,
  },
  {
    icon: Network,
    tag: 'Defense Logistics',
    title: 'Multi-Tier Supply Chain Survival Agent',
    description:
      'CrewAI multi-agent architecture operationalizing Supply Chain Resilience Theory (Christopher & Peck) and Bullwhip Effect dynamics (Forrester/Lee) to predict supplier disruptions. Handles right-censored data and cascading Tier-2 failures.',
    metrics: [
      '$4.2M prevented stockouts (12-week early warning)',
      '94% reduction in false alerts (600 → 36 daily)',
      '90-day survival predictions within ±4% actual rates',
      '72 hours → 8 minutes inventory positioning decisions',
    ],
    techStack: 'lifelines, NetworkX, CrewAI, Plotly',
    repoUrl: 'https://github.com/Zmugha1/supply-chanin-risk-agent',
    demoUrl: undefined,
    accentColor: 'amber' as const,
  },
  {
    icon: Brain,
    tag: 'Decision Intelligence',
    title: 'Agentic Adaptive RAG for Defense Research',
    description:
      'LangGraph-based system with query routing between classified document stores and OSINT. Features self-correction, theory-based confidence calibration, and human-in-the-loop governance for high-stakes intelligence briefings.',
    metrics: [
      '96% accuracy on multi-source queries (vs. 68% baseline)',
      '4 hours → 12 minutes intelligence prep time',
      '40% reduction in LLM API costs via intelligent routing',
      'Zero hallucinations in high-confidence answers',
    ],
    techStack: 'LangGraph, ChromaDB, Azure AI Foundry, Ragas',
    repoUrl: 'https://github.com/Zmugha1',
    demoUrl: undefined,
    accentColor: 'emerald' as const,
  },
];

// Streamlit main files: dark-data-annotator app.py | data-to-dollars-demo app/main.py | dr-data-training-agent ui/streamlit_app.py | governance-agent-telco-churn app/streamlit_app.py | sandi-bot- app.py
const ADDITIONAL_AGENTS = [
  {
    title: 'Dr. Data – Decision Intelligence',
    description: 'Transform scattered data into confident decisions. Data strategy, ML lifecycle design, predictive decision intelligence.',
    url: 'https://github.com/Zmugha1/drdatadecisionintelligence',
    liveUrl: 'https://drdatadecisionintelligence.com',
    streamlitUrl: undefined,
  },
  {
    title: 'Dark Data Annotator',
    description: 'Internal ML pipeline: Raw documents → Cleanse → Anonymize → Chunk → Flatten → Embed → ML-ready. Optimized vector search.',
    url: 'https://github.com/Zmugha1/dark-data-annotator',
    streamlitUrl: 'https://dark-data-annotator-zmugha1.streamlit.app',
  },
  {
    title: 'Data to $$$ Revenue Leak Detector',
    description: 'ML-powered revenue impact and risk detection on sample Amazon-style data. Revenue Leak Detector demo.',
    url: 'https://github.com/Zmugha1/data-to-dollars-demo',
    streamlitUrl: 'https://data-to-dollars-demo-zmugha1.streamlit.app',
  },
  {
    title: 'Sandi Bot – Coaching Command Center',
    description: 'Sales coaching assistant: PUSH, NURTURE, or PAUSE per prospect with word-for-word scripts and persona-based tactics.',
    url: 'https://github.com/Zmugha1/sandi-bot-',
    streamlitUrl: 'https://sandi-bot-zmugha1.streamlit.app',
  },
  {
    title: 'Governance Agent – Telco Churn',
    description: 'Governance-first Streamlit app for telco churn modeling and decision intelligence.',
    url: 'https://github.com/Zmugha1/governance-agent-telco-churn',
    streamlitUrl: 'https://governance-agent-telco-churn-zmugha1.streamlit.app',
  },
  {
    title: 'Fraud Detection Crew',
    description: 'Risk modeling with multi-agent orchestration.',
    url: 'https://github.com/Zmugha1',
    streamlitUrl: undefined,
  },
  {
    title: 'Financial Analyst Supervisor',
    description: 'Multi-agent orchestration for financial analysis.',
    url: 'https://github.com/Zmugha1',
    streamlitUrl: undefined,
  },
  {
    title: 'GraphRAG Knowledge Systems',
    description: 'Knowledge graph–augmented retrieval and reasoning.',
    url: 'https://github.com/Zmugha1',
    streamlitUrl: undefined,
  },
];

export default function AgentsShowcase() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="agents" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-2xl sm:text-3xl font-semibold text-primary-text mb-2"
        >
          Decision Agents
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-secondary-text max-w-2xl mb-12"
        >
          Theory-constrained systems for high-stakes decisions—governed, calibrated, and interpretable.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {FEATURED_AGENTS.map((agent) => (
            <AgentCard key={agent.title} {...agent} />
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-2 text-secondary-text hover:text-primary-text font-medium transition-colors w-full justify-center py-3 min-h-[44px]"
          >
            Additional Agents
            <ChevronDown
              size={20}
              className={`transition-transform ${showMore ? 'rotate-180' : ''}`}
            />
          </button>
          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="pt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ADDITIONAL_AGENTS.map((item) => (
                    <li key={item.title}>
                      <div className="rounded-lg border border-border bg-surface/60 p-4 hover:border-accent/50 hover:bg-surface transition-colors">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block"
                        >
                          <span className="font-medium text-primary-text group-hover:text-accent transition-colors block mb-1">
                            {item.title}
                          </span>
                          <span className="text-sm text-secondary-text line-clamp-2 block">
                            {item.description}
                          </span>
                        </a>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {item.liveUrl && (
                            <a
                              href={item.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-accent hover:underline"
                            >
                              Live site →
                            </a>
                          )}
                          {item.streamlitUrl && (
                            <a
                              href={item.streamlitUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-accent hover:underline"
                            >
                              Streamlit Demo →
                            </a>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
