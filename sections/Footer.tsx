'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const GITHUB_USER = 'Zmugha1';
const LINKEDIN_USER = 'zubiamughal'; // PLACEHOLDER: Replace with actual LinkedIn username
const EMAIL = 'zubiamL4L@gmail.com';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-surface py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary-text hover:text-primary-text transition-colors min-h-[44px] min-w-[44px] justify-center"
            aria-label="GitHub"
          >
            <Github size={22} />
            <span className="text-sm">github.com/{GITHUB_USER}</span>
          </a>
          <a
            href={`https://linkedin.com/in/${LINKEDIN_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary-text hover:text-primary-text transition-colors min-h-[44px] min-w-[44px] justify-center"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
            <span className="text-sm">linkedin.com/in/{LINKEDIN_USER}</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 text-secondary-text hover:text-primary-text transition-colors min-h-[44px] min-w-[44px] justify-center"
            aria-label="Email"
          >
            <Mail size={22} />
            <span className="text-sm">{EMAIL}</span>
          </a>
        </div>
        <p className="text-xs text-secondary-text">
          Built with Design Science Research methodology
        </p>
      </div>
      <p className="text-center text-xs text-slate-500 mt-6">
        © {new Date().getFullYear()} Zubia Mughal, Ed.D. All rights reserved.
      </p>
    </footer>
  );
}
