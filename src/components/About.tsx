const COPY =
  'Passionate MERN-Stack Developer specializing in high-performance React interfaces and intuitive user experiences. Experienced in building responsive websites and interactive browser-based games. Strong in UI architecture, API integration, and clean code practices. A fast learner and creative problem solver focused on building impactful digital products.';

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
          {COPY}
        </div>
      </div>
    </section>
  );
}
