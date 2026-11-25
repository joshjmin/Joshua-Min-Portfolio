// Renders copy from content.js. {{text}} marks a figure that still needs confirming:
// highlighted in review builds, plain text in production.
const REVIEW = import.meta.env.VITE_REVIEW === "true";

export function rich(text) {
  return text.split(/(\{\{.*?\}\})/g).map((part, i) => {
    const m = part.match(/^\{\{(.*)\}\}$/);
    if (!m) return part;
    return REVIEW ? (
      <mark key={i} className="verify" title="Needs confirming before launch">{m[1]}</mark>
    ) : (
      m[1]
    );
  });
}

// Title Case for headings and job titles. Small words stay lowercase unless first or last;
// words that already have capitals inside them (MakeUofT, ECE297, iPhone) are left as written.
const SMALL = new Set(["a", "an", "the", "and", "or", "nor", "but", "of", "for", "to", "in", "on", "at", "by", "with", "as", "vs", "into"]);
export function tc(text) {
  const words = text.split(" ");
  return words
    .map((w, i) =>
      w
        .split("-")
        .map((part, j) => {
          const bare = part.replace(/^[^A-Za-z]+/, "");
          if (!bare) return part;
          const lower = bare.toLowerCase();
          const edge = (i === 0 && j === 0) || (i === words.length - 1 && j === w.split("-").length - 1);
          if (!edge && j === 0 && SMALL.has(lower.replace(/[^a-z]/g, ""))) return part;
          if (/[A-Z]/.test(bare.slice(1)) || /[0-9]/.test(bare)) return part;
          const k = part.length - bare.length;
          return part.slice(0, k) + bare[0].toUpperCase() + bare.slice(1);
        })
        .join("-")
    )
    .join(" ");
}
