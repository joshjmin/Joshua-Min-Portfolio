import { profile } from "../content";
import { Icon, GitHubIcon, LinkedInIcon } from "./Art";

const links = [
  ["home", "Home"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["about", "About"],
  ["contact", "Contact"],
];

export function Nav({ active }) {
  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap nav-row">
        <a href="#" className="logo" aria-label="Joshua Min, home"><span className="jm">JM</span></a>
        <ul>
          {links.map(([id, label]) => (
            <li key={id}><a href={id === "home" ? "#" : `#${id}`} className={active === id ? "on" : ""}>{label}</a></li>
          ))}
        </ul>
        <a className="btn btn-ghost sm" href={profile.resume} target="_blank" rel="noopener">Resume <Icon name="download" size={15} /></a>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap foot-row">
        <div className="foot-brand">
          <span className="jm dark">JM</span>
          <div>
            <p className="foot-title">Let's Build What's Next</p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>
        <ul className="foot-links">
          {links.map(([id, label]) => (
            <li key={id}><a href={id === "home" ? "#" : `#${id}`}>{label}</a></li>
          ))}
        </ul>
        <div className="socials">
          <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedInIcon /></a>
          <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub"><GitHubIcon /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" size={20} /></a>
        </div>
      </div>
      <p className="wrap copy">© 2026 Joshua Min · Toronto</p>
    </footer>
  );
}
