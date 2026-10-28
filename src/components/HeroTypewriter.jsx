'use client';

import { useState, useEffect } from 'react';

const LINE_1 = "I'm a web developer";
const LINE_2 = "who builds modern websites and custom business software. I love turning ideas into simple digital solutions that help businesses grow and work smarter.";

export default function HeroTypewriter() {
  const [revealedCount, setRevealedCount] = useState(0);
  const totalLength = LINE_1.length + LINE_2.length;

  useEffect(() => {
    // Respect reduced motion accessibility
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setRevealedCount(totalLength);
      return;
    }

    // Short pause after opening so the page settles before typing starts
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setRevealedCount((prev) => {
          if (prev + 1 >= totalLength) {
            clearInterval(interval);
            return totalLength;
          }
          return prev + 1;
        });
      }, 19);

      return () => clearInterval(interval);
    }, 300);

    return () => clearTimeout(startTimeout);
  }, [totalLength]);

  const line1VisibleCount = Math.min(revealedCount, LINE_1.length);
  const line2VisibleCount = Math.max(0, revealedCount - LINE_1.length);

  return (
    <div
      id="about"
      className="hero-statement"
      aria-label={`${LINE_1} ${LINE_2}`}
    >
      {/* Accessible text for search engines and screen readers */}
      <span className="sr-only">{LINE_1} {LINE_2}</span>

      {/* Visual character-by-character display (zero layout shift, clean letter-by-letter reveal) */}
      <span className="first-line" aria-hidden="true">
        {LINE_1.split('').map((char, index) => (
          <span
            key={`l1-${index}`}
            className={index < line1VisibleCount ? 'char-visible' : 'char-hidden'}
          >
            {char}
          </span>
        ))}
      </span>

      <span aria-hidden="true">
        {LINE_2.split('').map((char, index) => (
          <span
            key={`l2-${index}`}
            className={index < line2VisibleCount ? 'char-visible' : 'char-hidden'}
          >
            {char}
          </span>
        ))}
      </span>
    </div>
  );
}
