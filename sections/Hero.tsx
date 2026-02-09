'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, FileText } from 'lucide-react';

const METRICS = [
  { value: 4.6, suffix: 'M+', label: 'Productivity Impact', unit: '$' },
  { value: 94, suffix: '%', label: 'Calibration Improvement' },
  { value: 92, suffix: 'K', label: 'Labor Hours Saved' },
];

function ConstraintVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      // Unrestricted hypothesis space (faded, many lines)
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.12)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 24; i++) {
        const x = (i / 24) * w + (t * 0.02) % 20;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + 40, h);
        ctx.stroke();
      }

      // Constrained space (clear, fewer lines - theory-constrained)
      ctx.strokeStyle = 'rgba(180, 83, 9, 0.5)';
      ctx.lineWidth = 2;
      const cx = w * 0.5 + Math.sin(t * 0.001) * 8;
      ctx.beginPath();
      ctx.moveTo(cx - 60, 0);
      ctx.lineTo(cx, h * 0.5);
      ctx.lineTo(cx + 60, h);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx - 30, h * 0.3);
      ctx.lineTo(cx + 30, h * 0.7);
      ctx.stroke();
    };

    let id: number;
    const loop = (t: number) => {
      draw(t);
      id = requestAnimationFrame(loop);
    };
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[280px] sm:min-h-[320px] rounded-lg overflow-hidden border border-border bg-surface/50">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ width: '100%', height: '100%' }}
        aria-hidden
      />
    </div>
  );
}

function MetricCard({
  value,
  suffix,
  label,
  unit = '',
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  unit?: string;
  delay: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setSeen(true);
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!seen) return;
    const duration = 1500;
    const start = Date.now();
    const tick = () => {
      const t = Math.min((Date.now() - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 2);
      setDisplay(value * ease);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [seen, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay, duration: 0.4 }}
      className="rounded-lg border border-border bg-surface/80 px-4 py-3 backdrop-blur-sm"
    >
      <div className="font-mono text-lg font-semibold text-accent">
        {unit}
        {value >= 1 ? display.toFixed(1) : display.toFixed(0)}
        {suffix}
      </div>
      <div className="text-xs text-secondary-text mt-0.5">{label}</div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 px-4 pt-24 pb-16 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="flex-1 lg:max-w-[60%]">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm font-medium tracking-wide text-accent uppercase mb-4"
        >
          Design Science Research × Production ML
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-text leading-tight mb-6"
        >
          Theory-Constrained Machine Learning for High-Stakes Decisions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-secondary-text text-base sm:text-lg max-w-xl mb-8"
        >
          I operationalize organizational psychology and supply chain theory as
          computational constraints—building governed AI systems that outperform
          black-box models on small, critical datasets.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex flex-wrap gap-3"
        >
          <a
            href="#agents"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-primary-text hover:bg-accent-hover transition-colors min-h-[44px]"
          >
            Explore Decision Agents
            <ArrowRight size={18} />
          </a>
          <a
            href="https://github.com/Zmugha1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium text-primary-text hover:border-accent hover:text-accent transition-colors min-h-[44px]"
          >
            View GitHub
            <ExternalLink size={18} />
          </a>
          <a
            href="#publications"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-secondary-text hover:text-primary-text hover:border-slate-600 transition-colors min-h-[44px]"
          >
            Read Publication
            <FileText size={18} />
          </a>
        </motion.div>
      </div>

      <div className="flex-1 lg:max-w-[40%] w-full space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="relative"
        >
          <ConstraintVisualization />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {METRICS.map((m, i) => (
            <MetricCard
              key={m.label}
              value={m.value}
              suffix={m.suffix}
              label={m.label}
              unit={m.unit}
              delay={0.35 + i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
