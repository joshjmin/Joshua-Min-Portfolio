import { useEffect, useRef, useState } from "react";

// Hand-drawn artwork: the hero cube, project pictures and small icons.

// Hero shape: a slowly turning cube, one face for each side of Joshua's work.
const faces = [
  ["users", "Users"],
  ["roadmap", "Product"],
  ["chart", "Data"],
  ["code", "Code"],
  ["chip", "Hardware"],
  ["music", "Music"],
];

export function Cube() {
  const stage = useRef(null);
  const cube = useRef(null);
  const [hint, setHint] = useState(true);

  useEffect(() => {
    const el = stage.current;
    const box = cube.current;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let rx = -20, ry = -25;          // current angles (degrees)
    let vx = 0, vy = 0;              // momentum after a drag (degrees per second)
    let drag = null;                 // { x, y, t } of the last pointer position
    let last = performance.now(), t0 = last, raf;

    const draw = () => { box.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`; };

    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!drag) {
        ry += vy * dt;
        rx += vx * dt;
        const decay = Math.pow(0.04, dt); // momentum fades over about a second
        vx *= decay;
        vy *= decay;
        if (!still) {
          ry += 12 * dt;                                   // slow spin
          const tilt = -20 + 28 * Math.sin((now - t0) / 6000); // gentle nod, so top and bottom come round
          rx += (tilt - rx) * Math.min(1, dt * 0.6);
        }
      }
      draw();
      raf = requestAnimationFrame(tick);
    };

    const down = (e) => {
      drag = { x: e.clientX, y: e.clientY, t: performance.now() };
      vx = vy = 0;
      el.setPointerCapture(e.pointerId);
      el.classList.add("grabbing");
      setHint(false);
    };
    const move = (e) => {
      if (!drag) return;
      const now = performance.now();
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      const dt = Math.max((now - drag.t) / 1000, 0.001);
      ry += dx * 0.5;
      rx -= dy * 0.5;
      vy = (dx * 0.5) / dt;
      vx = (-dy * 0.5) / dt;
      drag = { x: e.clientX, y: e.clientY, t: now };
      draw();
    };
    const up = (e) => {
      if (!drag) return;
      if (performance.now() - drag.t > 80) vx = vy = 0; // held still before letting go: no fling
      vx = Math.max(-720, Math.min(720, vx));
      vy = Math.max(-720, Math.min(720, vy));
      drag = null;
      el.classList.remove("grabbing");
      if (el.hasPointerCapture?.(e.pointerId)) el.releasePointerCapture(e.pointerId);
    };
    const key = (e) => {
      const step = { ArrowLeft: [0, -20], ArrowRight: [0, 20], ArrowUp: [20, 0], ArrowDown: [-20, 0] }[e.key];
      if (!step) return;
      e.preventDefault();
      rx += step[0];
      ry += step[1];
      setHint(false);
      draw();
    };

    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    el.addEventListener("keydown", key);
    draw();
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
      el.removeEventListener("keydown", key);
    };
  }, []);

  return (
    <div
      ref={stage}
      className="cube-stage"
      role="img"
      tabIndex={0}
      aria-label="A cube whose faces read Users, Product, Data, Code, Hardware and Music. Drag it, or use the arrow keys, to turn it."
    >
      <div className="cube-glow" aria-hidden="true" />
      <div className="cube-float" aria-hidden="true">
        <div className="cube" ref={cube}>
          {faces.map(([icon, label], i) => (
            <div className={`face f${i}`} key={label}>
              <Icon name={icon} size={46} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="cube-shadow" aria-hidden="true" />
      <p className={`cube-hint${hint ? "" : " gone"}`} aria-hidden="true">Drag to Spin</p>
    </div>
  );
}

export function ProjectPic({ kind }) {
  if (kind === "book")
    return (
      <svg viewBox="0 0 320 180" className="pic" aria-hidden="true">
        <rect width="320" height="180" fill="#efe8dd" />
        <rect y="132" width="320" height="48" fill="#dccfbc" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={56 + i * 3} y={58 + i * 15} width="110" height="13" rx="2" fill={["#8b5a3c", "#a06a45", "#7a4a30", "#9a6644", "#6e4129"][i]} />
        ))}
        <rect x="52" y="54" width="8" height="82" rx="2" fill="#5b3420" />
        <rect x="186" y="40" width="80" height="96" rx="8" fill="#b9c0cc" />
        <rect x="196" y="52" width="60" height="30" rx="5" fill="#8d96a6" />
        <rect x="216" y="20" width="20" height="22" rx="3" fill="#9aa2b1" />
        <rect x="160" y="96" width="34" height="10" rx="5" fill="#6f7888" />
        <circle cx="226" cy="108" r="12" fill="#3340d6" />
        <circle cx="226" cy="108" r="5" fill="#c9d1ff" />
      </svg>
    );
  if (kind === "map")
    return (
      <svg viewBox="0 0 320 180" className="pic" aria-hidden="true">
        <rect width="320" height="180" fill="#e6efe9" />
        <path d="M0 120 C 60 100, 90 150, 160 130 S 260 90, 320 110 L 320 180 L 0 180 Z" fill="#bfdbe8" />
        <g stroke="#ffffff" strokeWidth="9" fill="none" strokeLinecap="round">
          <path d="M-10 40 L 330 70" /><path d="M90 -10 L 120 190" /><path d="M220 -10 L 200 190" /><path d="M-10 150 L 330 160" />
        </g>
        <g fill="#cfe3d4"><rect x="20" y="64" width="56" height="40" rx="6" /><rect x="138" y="82" width="46" height="30" rx="6" /><rect x="240" y="8" width="62" height="40" rx="6" /></g>
        <path d="M60 52 C 100 60, 110 100, 150 100 S 200 70, 245 64" fill="none" stroke="#3340d6" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 10" />
        <circle cx="60" cy="52" r="7" fill="#fff" stroke="#3340d6" strokeWidth="4" />
        <path d="M245 64 c -14 -18 -14 -36 0 -36 s 14 18 0 36 z" fill="#e5484d" transform="translate(0 -4)" />
        <circle cx="245" cy="42" r="5" fill="#fff" />
      </svg>
    );
  if (kind === "glove")
    return (
      <svg viewBox="0 0 320 180" className="pic" aria-hidden="true">
        <defs>
          <linearGradient id="gl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2b1d5c" /><stop offset="1" stopColor="#0f1235" /></linearGradient>
        </defs>
        <rect width="320" height="180" fill="url(#gl)" />
        {[["Volume", 0.72, "#7b8cff"], ["Reverb", 0.45, "#b46cff"], ["Pitch", 0.6, "#4fd1c5"], ["Tempo", 0.35, "#ffb547"]].map(([l, v, c], i) => (
          <g key={l} transform={`translate(${44 + i * 66} 30)`}>
            <rect width="34" height="110" rx="8" fill="#ffffff" opacity=".08" />
            <rect y={110 - 110 * v} width="34" height={110 * v} rx="8" fill={c} />
            <text x="17" y="132" textAnchor="middle" fontSize="11" fill="#c9cdf7" fontFamily="Inter, sans-serif">{l}</text>
          </g>
        ))}
      </svg>
    );
  return (
    <svg viewBox="0 0 320 180" className="pic" aria-hidden="true">
      <rect width="320" height="180" fill="#151a3d" />
      {Array.from({ length: 28 }, (_, i) => {
        const h = 18 + Math.abs(Math.sin(i * 0.55) * 70 + Math.sin(i * 1.7) * 22);
        return <rect key={i} x={22 + i * 10} y={140 - h} width="6" height={h} rx="3" fill={i % 7 === 3 ? "#b9c3ff" : "#5a6cff"} opacity={0.55 + (i % 5) * 0.09} />;
      })}
      <rect x="22" y="146" width="276" height="2" fill="#2c3466" />
    </svg>
  );
}

const paths = {
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M2.5 19c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5" /><circle cx="17" cy="9" r="2.4" /><path d="M16.5 13.6c2.6.2 4.4 1.9 5 5" /></>,
  chart: <><path d="M4 20V11" /><path d="M10 20V5" /><path d="M16 20v-7" /><path d="M2 20h20" /></>,
  code: <><path d="M8 7l-5 5 5 5" /><path d="M16 7l5 5-5 5" /><path d="M14 4l-4 16" /></>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  download: <><path d="M12 4v11" /><path d="M7 10l5 5 5-5" /><path d="M5 20h14" /></>,
  back: <path d="M19 12H5M11 6l-6 6 6 6" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M4 7l8 6 8-6" /></>,
  roadmap: <><circle cx="5" cy="6" r="2" /><circle cx="19" cy="18" r="2" /><path d="M7 6h7a3 3 0 0 1 0 6H10a3 3 0 0 0 0 6h7" /></>,
  chip: <><rect x="7" y="7" width="10" height="10" rx="1.5" /><rect x="10" y="10" width="4" height="4" /><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" /></>,
  music: <><path d="M9 18V6l11-2v12" /><circle cx="6.5" cy="18" r="2.5" /><circle cx="17.5" cy="16" r="2.5" /></>,
};
export function Icon({ name, size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export function GitHubIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
    </svg>
  );
}
export function LinkedInIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z" />
    </svg>
  );
}
