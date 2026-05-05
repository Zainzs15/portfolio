import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { FaGlobe, FaGamepad } from 'react-icons/fa';
import { gameProjects, websiteProjects } from '../data/projects';

function ProjectCard({
  title,
  description,
  url,
  tags,
  accent,
  imageUrl,
}: {
  title: string;
  description: string;
  url: string;
  tags: string[];
  accent: string;
  imageUrl: string;
}) {
  return (
    <div className="project-card-wrap" data-aos="fade-up">
      <article className="project-card">
        <div className="project-thumb" aria-hidden>
          <img className="project-thumb-img" src={imageUrl} alt="" loading="lazy" />
          <div className="project-thumb-accent" style={{ background: accent }} />
        </div>
        <div className="project-body">
          <h3 className="project-title">{title}</h3>
          <p className="project-desc">{description}</p>
          <div className="project-tags">
            {tags.map((t) => (
              <span key={t} className="project-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="project-footer">
          <a
            className="project-btn"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Preview
            <HiArrowTopRightOnSquare size={18} />
          </a>
        </div>
      </article>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section section--muted">
      <div className="container">
        <p className="section-label" data-aos="fade-up">
          Portfolio
        </p>
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="40">
          Selected work
        </h2>
        <p className="section-intro" data-aos="fade-up" data-aos-delay="80">
          Production-ready experiences — from clinical web presence to arcade-grade interactions.
        </p>

        <div className="projects-sub" id="projects-websites">
          <h3 className="projects-subtitle" data-aos="fade-right">
            <FaGlobe aria-hidden style={{ opacity: 0.85 }} /> Websites
          </h3>
          <div className="projects-grid">
            {websiteProjects.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                description={p.description}
                url={p.url}
                tags={p.tags}
                accent={p.accent}
                imageUrl={p.imageUrl}
              />
            ))}
          </div>
        </div>

        <div className="projects-sub" id="projects-games" style={{ marginTop: 'var(--space-5)' }}>
          <h3 className="projects-subtitle" data-aos="fade-right">
            <FaGamepad aria-hidden style={{ opacity: 0.85 }} /> Games
          </h3>
          <div className="projects-grid">
            {gameProjects.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                description={p.description}
                url={p.url}
                tags={p.tags}
                accent={p.accent}
                imageUrl={p.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
