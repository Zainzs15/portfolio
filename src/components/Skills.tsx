import type { IconType } from 'react-icons';
import {
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from 'react-icons/si';
import { TbApi, TbPalette } from 'react-icons/tb';

type Skill = {
  name: string;
  Icon: IconType;
  percent: number;
};

const SKILLS: Skill[] = [
  { name: 'JavaScript (ES6+)', Icon: SiJavascript, percent: 96 },
  { name: 'React.js', Icon: SiReact, percent: 94 },
  { name: 'HTML5 / CSS3', Icon: SiHtml5, percent: 95 },
  { name: 'UI/UX Design', Icon: TbPalette, percent: 88 },
  { name: 'Node.js', Icon: SiNodedotjs, percent: 90 },
  { name: 'MongoDB', Icon: SiMongodb, percent: 87 },
  { name: 'REST APIs', Icon: TbApi, percent: 92 },
  { name: 'Git & GitHub', Icon: SiGit, percent: 93 },
];

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label" data-aos="fade-up">
          Expertise
        </p>
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="40">
          Skills & tools
        </h2>
        <p className="section-intro" data-aos="fade-up" data-aos-delay="80">
          A focused toolkit for full-stack delivery — from polished interfaces to APIs and data
          layers.
        </p>
        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <div
              key={s.name}
              className="skill-card"
              data-aos="fade-up"
              data-aos-delay={String(80 + i * 40)}
            >
              <div className="skill-head">
                <div className="skill-icon" aria-hidden>
                  <s.Icon />
                </div>
                <h3 className="skill-name">{s.name}</h3>
              </div>
              <div className="skill-bar" role="presentation">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${s.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
