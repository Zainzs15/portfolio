import { useEffect, useState } from 'react';

const MIN_MS = 2200;
const MAX_MS = 2800;

type Props = {
  onDone: () => void;
};

export function LoadingScreen({ onDone }: Props) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const duration =
      MIN_MS + Math.random() * (MAX_MS - MIN_MS);
    const t = window.setTimeout(() => setExit(true), duration);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!exit) return;
    const t = window.setTimeout(onDone, 650);
    return () => window.clearTimeout(t);
  }, [exit, onDone]);

  return (
    <div
      className={`loader-root ${exit ? 'loader-root--hide' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="loader-brackets" aria-hidden>
        &lt;/&gt;
      </div>
      <div className="loader-orb-wrap" aria-hidden>
        <div className="loader-orb-ring" />
        <div className="loader-orb" />
      </div>
      <p className="loader-caption">Initializing studio</p>
      <div className="loader-dots" aria-hidden>
        <span className="loader-dot" />
        <span className="loader-dot" />
        <span className="loader-dot" />
      </div>
      <span className="loader-brand">MZ · MERN</span>
    </div>
  );
}
