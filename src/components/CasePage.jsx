import { useEffect, useRef } from "react";
import { cases } from "../content";
import { rich, tc } from "./Rich";
import { Nav, Footer } from "./Chrome";
import { Icon, GitHubIcon } from "./Art";
import { AtsSummary, AtsDiagram } from "./Ats";

const reduceMotion = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

function Cover({ c }) {
  const v = c.cover;
  const ref = useRef(null);
  if (v.kind === "ats") return <AtsSummary />;
  useEffect(() => {
    // React doesn't reliably set the muted attribute, and browsers only autoplay muted video.
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    if (!reduceMotion) el.play().catch(() => {});
  }, []);
  if (v.video)
    return (
      <video
        ref={ref}
        className={`cover cover-photo cover-video${v.portrait ? " portrait" : ""}`}
        src={v.video}
        poster={v.poster}
        aria-label={v.alt}
        muted
        loop
        playsInline
        controls
        autoPlay={!reduceMotion}
        preload="metadata"
      />
    );
  return <img className={`cover${v.photo ? " cover-photo" : ""}`} src={v.src} alt={v.alt} />;
}

function Figs({ imgs, natural }) {
  return (
    <div className={`figs n${imgs.length}${natural ? " natural" : ""}`}>
      {imgs.map((f) => (
        <figure key={f.src}>
          <img src={f.src} alt={f.alt} loading="lazy" className={f.contain ? "contain" : undefined} />
          {f.caption && <figcaption>{f.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

function Table({ t }) {
  return (
    <div className="tbl-wrap">
      <table className={`tbl cols${t.head.length}`}>
        <thead><tr>{t.head.map((h) => <th key={h}>{tc(h)}</th>)}</tr></thead>
        <tbody>
          {t.rows.map((r) => (
            <tr key={r[0]}>{r.map((cell, k) => <td key={k} data-l={tc(t.head[k])}>{rich(cell)}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CasePage({ c }) {
  const i = cases.indexOf(c);
  const next = cases[(i + 1) % cases.length];
  const List = (s) => {
    const Tag = s.ordered ? "ol" : "ul";
    return (
      <Tag>
        {s.list.map((li) => {
          const m = s.lead && li.match(/^(.+?\.)\s(.*)$/);
          return <li key={li}>{m ? <><strong>{m[1]}</strong> {rich(m[2])}</> : rich(li)}</li>;
        })}
      </Tag>
    );
  };
  return (
    <>
      <div className="dark-top">
        <Nav />
        <header className="case-hero">
          <div className={`wrap narrow${c.cover ? " has-cover" : ""}${c.cover?.video ? " has-video" : ""}`}>
            <div>
              <a className="back" href="#"><Icon name="back" size={15} /> Back to Home</a>
              {c.logo && (c.logoWide || c.logoBare ? <img className={c.logoWide ? "logo-wide" : "logo-bare"} src={c.logo} alt={`${c.name} logo`} /> : <span className="logo-tile"><img src={c.logo} alt={`${c.name} logo`} /></span>)}
              <p className="kicker light">{tc(c.role)}</p>
              <h1>{c.name}</h1>
              <p className="lead">{c.summary}</p>
              <p className="when">{c.when}</p>
              {c.code && (
                <a className="btn btn-ghost sm code-link" href={c.code} target="_blank" rel="noopener">
                  <GitHubIcon size={16} /> View the Code on GitHub
                </a>
              )}
              {c.demo && (
                <a className="btn btn-light sm code-link demo-link" href={c.demo} target="_blank" rel="noopener">
                  Watch the Demo Video
                </a>
              )}
            </div>
            {c.cover && <Cover c={c} />}
          </div>
        </header>
      </div>
      <main className="wrap narrow post">
        {c.glance && (
          <dl className="glance">
            {c.glance.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{rich(v)}</dd></div>)}
          </dl>
        )}
        {c.sections.map((s) => (
          <section key={s.title}>
            <h2>{tc(s.title)}</h2>
            {s.body?.map((p, k) => <p key={k}>{rich(p)}</p>)}
            {s.list && List(s)}
            {s.tables?.map((t) => <Table key={t.head.join()} t={t} />)}
            {s.bodyAfter?.map((p, k) => <p key={k}>{rich(p)}</p>)}
            {s.diagram === "ats" && <AtsDiagram />}
            {s.imgs && <Figs imgs={s.imgs} natural={s.natural} />}
            {s.gallery && (
              <div className="gallery">
                {s.gallery.map((g) => <img key={g.src} src={g.src} alt={g.alt} loading="lazy" />)}
              </div>
            )}
            {s.note && <p className="note">{s.note}</p>}
          </section>
        ))}
        <section>
          <h2>Tools</h2>
          <ul className="chips">{c.tech.split(/, (?![^(]*\))/).map((t) => <li key={t}>{t}</li>)}</ul>
        </section>
        <a className="next card" href={`#${next.slug}`}>
          <span className="role">Next</span>
          <h3>{next.name}</h3>
          <span className="more">Read It <Icon name="arrow" size={14} /></span>
        </a>
      </main>
      <Footer />
    </>
  );
}
