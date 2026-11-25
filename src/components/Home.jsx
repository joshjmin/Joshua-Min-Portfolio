import { useState } from "react";
import { profile, experience, projects } from "../content";
import { Cube, ProjectPic, Icon } from "./Art";
import { Nav, Footer } from "./Chrome";
import { tc } from "./Rich";
import { rich } from "./Rich";

const strengths = [
  ["users", "Talking to Users First"],
  ["chart", "Deciding with Data"],
  ["code", "Engineering Depth"],
];

const skills = [
  "User Interviews", "Product Requirements", "Roadmapping", "Jira", "Power BI",
  "Python", "C/C++", "TypeScript", "React", "SQL", "AWS", "Supabase", "Linux",
];

export function Home() {
  const [showMore, setShowMore] = useState(false);
  const main = projects.filter((p) => !p.more);
  const extra = projects.filter((p) => p.more);
  const card = (p) => (
    <a className="card pcard" href={`#${p.slug}`} key={p.slug}>
      <div className="pic-wrap">
        {p.img ? <img className="pic" src={p.img} alt="" loading="lazy" /> : <ProjectPic kind={p.pic} />}
        {p.logo && <span className="badge"><img src={p.logo} alt={`${p.name} logo`} /></span>}
      </div>
      <div className="pbody">
        <h3>{p.name}</h3>
        <span className="role">{tc(p.role)}</span>
        <p>{p.card}</p>
        <span className="more">Learn More <Icon name="arrow" size={14} /></span>
      </div>
    </a>
  );
  return (
    <>
      <div className="dark-top">
        <Nav active="home" />
        <header className="hero" id="home">
          <div className="wrap hero-grid">
            <div className="hero-text">
              <p className="hi">Hi, I'm</p>
              <h1>Joshua <span className="grad">Min</span></h1>
              <p className="tagline">Engineer · Product Builder · Problem Solver</p>
              <p className="lead">
                I'm a computer engineering student at the University of Toronto. I like figuring out what people
                actually need, then building it with them.
              </p>
              <div className="cta">
                <a className="btn btn-light" href="#projects">View My Projects <Icon name="arrow" size={16} /></a>
                <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener">Connect on LinkedIn</a>
              </div>
            </div>
            <Cube />
          </div>
        </header>
      </div>

      <main>
        <section className="panel" id="experience">
          <div className="wrap panel-grid">
            <div className="what">
              <p className="kicker">What I do</p>
              <h2>Turning Ideas into Things People Use</h2>
              <p className="muted">
                I work between users, technology and the business: I find the real need, make the trade-offs, and
                see it through to something that works.
              </p>
              <ul className="strengths">
                {strengths.map(([i, t]) => (
                  <li key={t}><span className="ic"><Icon name={i} size={22} /></span>{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="kicker">Experience</p>
              <div className="cards two">
                {experience.map((e) => (
                  <a className="card" href={`#${e.slug}`} key={e.slug}>
                    {e.icon ? <img className={`mark mark-img${e.iconWide ? " mark-wide" : ""}`} src={e.icon} alt={e.iconWide ? `${e.name} logo` : ""} /> : <span className="mark">{e.mark}</span>}
                    <h3>{e.name}</h3>
                    <span className="role">{tc(e.role)}</span>
                    <p>{rich(e.card)}</p>
                    <span className="more">Learn More <Icon name="arrow" size={14} /></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="band" id="projects">
          <div className="wrap panel-grid">
            <div className="what">
              <p className="kicker">Projects</p>
              <h2>Solving Real Problems</h2>
              <p className="muted">
                From a prototype for library conservators to a map app for tourists, I like hard problems
                approached with a product mindset.
              </p>
              <a className="btn btn-dark" href={profile.github} target="_blank" rel="noopener">More on GitHub <Icon name="arrow" size={16} /></a>
            </div>
            <div>
              <div className={`cards ${main.length === 2 ? "two" : "three"}`}>{main.map(card)}</div>
              {showMore && <div className="cards three more-cards" id="more-projects">{extra.map(card)}</div>}
              {extra.length > 0 && (
                <button className="btn btn-outline more-btn" type="button" aria-expanded={showMore} aria-controls="more-projects" onClick={() => setShowMore((v) => !v)}>
                  {showMore ? "Show Fewer Projects" : "See More Projects"}
                  <span className={`chev${showMore ? " up" : ""}`} aria-hidden="true"><Icon name="arrow" size={15} /></span>
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="wrap" id="about">
          <div className="about">
            <div className="photo">
              {/* Put your photo at public/photo.jpg and replace this span with <img src="photo.jpg" alt="Joshua Min" /> */}
              <span>JM</span>
            </div>
            <div className="about-text">
              <p className="kicker light">About me</p>
              <h2>A Builder Who Starts with the People</h2>
              <p>
                I'm in my third year of computer engineering at U of T, in the PEY co-op program. I'm most interested in
                product management, along with program management, solutions engineering and software development.
              </p>
              <p>
                Whether it's an internal tool, a client prototype or a 24-hour hackathon, I like turning a fuzzy
                problem into something that works.
              </p>
              <a className="btn btn-light sm" href={profile.resume} target="_blank" rel="noopener">My Resume <Icon name="arrow" size={14} /></a>
            </div>
            <div className="skills">
              <p className="kicker light">Skills</p>
              <ul>{skills.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
