const PARA_1 =
  'I’m a MERN-Stack Developer who cares about the details — smooth UX, clean architecture, and performance that holds up in real usage.';

const PARA_2 =
  'I build responsive websites and interactive browser-based games, with strong focus on UI structure, reusable components, API integration, and maintainable code. I’m a fast learner and creative problem solver who enjoys turning ideas into polished digital products.';

const HIGHLIGHTS = [
  'Performance-first React UI with modern patterns',
  'Pixel-perfect, responsive layouts (mobile → desktop)',
  'REST APIs + clean state/data flow',
  'Game-like interactions & micro-animations that feel premium',
];

export function About() {
  return (
    <section id="about" className="section section--muted section--tight-top">
      <div className="container">
        <p className="section-label" data-aos="fade-up">
          Profile
        </p>
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="60">
          About me
        </h2>
        <div className="about-card" data-aos="fade-up" data-aos-delay="120">
          <p className="about-text">{PARA_1}</p>
          <p className="about-text">{PARA_2}</p>
          <div className="about-divider" aria-hidden />
          <ul className="about-highlights">
            {HIGHLIGHTS.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
