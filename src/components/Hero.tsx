import { useTypingLoop } from '../hooks/useTypingLoop';

const PHRASES = [
  'I am a MERN-Stack Developer',
  'I am a Frontend Developer',
  'I am a Backend Developer',
  'I am a Database Expert',
];

const DESC =
  'Passionate MERN-Stack Developer specializing in high-performance React interfaces and intuitive user experiences. I build responsive websites and interactive browser-based games with clean architecture and modern UI/UX.';

export function Hero() {
  const typed = useTypingLoop(PHRASES);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div data-aos="fade-up">
            <p className="hero-kicker">Hello, I&apos;m</p>
            <h1 className="hero-name">
              <span className="gradient-text">Muhammad Zain Sohail</span>
            </h1>
            <p className="hero-title">MERN Stack Developer</p>
            <p className="hero-type">
              <span>{typed}</span>
              <span className="hero-type-caret" aria-hidden />
            </p>
            <p className="hero-desc">{DESC}</p>
            <div className="hero-cta">
              <button type="button" className="btn btn-primary" onClick={() => go('projects')}>
                View Projects
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => go('contact')}>
                Contact Me
              </button>
            </div>
          </div>

          <div className="hero-visual" data-aos="zoom-in" data-aos-delay="120">
            <div className="hero-orbit" aria-hidden />
            <div className="hero-blob" aria-hidden />
            <div className="hero-card">
              <div className="hero-card-code">
                <span className="kw">const</span> dev = {'{'}
                <br />
                &nbsp;&nbsp;<span className="fn">stack</span>:{' '}
                <span className="str">&apos;MERN&apos;</span>,
                <br />
                &nbsp;&nbsp;<span className="fn">focus</span>:{' '}
                <span className="str">&apos;UX + performance&apos;</span>,
                <br />
                &nbsp;&nbsp;<span className="fn">build</span>: () =&gt;{' '}
                <span className="str">&apos;ships&apos;</span>
                <br />
                {'}'};
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
