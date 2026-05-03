import { useEffect, useState } from 'react';

export function useTypingLoop(phrases: string[], typingSpeed = 48, pauseMs = 2200) {
  const [display, setDisplay] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!phrases.length) return;
    const phrase = phrases[phraseIndex % phrases.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && display.length < phrase.length) {
      timeout = setTimeout(() => {
        setDisplay(phrase.slice(0, display.length + 1));
      }, typingSpeed);
    } else if (!deleting && display.length === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && display.length > 0) {
      timeout = setTimeout(() => {
        setDisplay((d) => d.slice(0, -1));
      }, typingSpeed / 2);
    } else if (deleting && display.length === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [display, deleting, phraseIndex, phrases, typingSpeed, pauseMs]);

  return display;
}
