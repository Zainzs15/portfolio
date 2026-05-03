import { useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi2';
import { useTheme } from '../context/ThemeContext';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrollShadow } from '../hooks/useScrollShadow';

const NAV_IDS = ['home', 'about', 'skills', 'projects', 'contact'] as const;

const LABELS: Record<(typeof NAV_IDS)[number], string> = {
  home: 'Home',
  about: 'About',
  skills: 'Skills',
  projects: 'Projects',
  contact: 'Contact',
};

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const scrolled = useScrollShadow(16);
  const active = useActiveSection([...NAV_IDS]);
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className={`nav nav-glass ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav-inner">
        <a
          href="#home"
          className="nav-logo gradient-text"
          onClick={(e) => {
            e.preventDefault();
            go('home');
          }}
        >
          Zain Sohail
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${active === id ? 'nav-link--active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                go(id);
              }}
            >
              {LABELS[id]}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            role="switch"
            aria-checked={theme === 'light'}
            className="nav-theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <HiMoon className="nav-theme-toggle-icon nav-theme-toggle-icon--moon" aria-hidden />
            <HiSun className="nav-theme-toggle-icon nav-theme-toggle-icon--sun" aria-hidden />
            <span
              className={`nav-theme-toggle-thumb ${theme === 'light' ? 'nav-theme-toggle-thumb--right' : ''}`}
              aria-hidden
            >
              {theme === 'dark' ? <HiMoon size={14} /> : <HiSun size={14} />}
            </span>
          </button>
          <button
            type="button"
            className={`nav-burger ${open ? 'nav-burger--open' : ''}`}
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open ? (
        <div className="nav-mobile" role="dialog" aria-label="Mobile navigation">
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${active === id ? 'nav-link--active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                go(id);
              }}
            >
              {LABELS[id]}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
