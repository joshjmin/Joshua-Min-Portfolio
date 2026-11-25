import { useEffect, useState } from "react";
import { cases } from "./content";
import { Home } from "./components/Home";
import { CasePage } from "./components/CasePage";

const readHash = () => decodeURIComponent(location.hash.slice(1));

export default function App() {
  const [hash, setHash] = useState(readHash);

  useEffect(() => {
    const on = () => setHash(readHash());
    addEventListener("hashchange", on);
    return () => removeEventListener("hashchange", on);
  }, []);

  const current = cases.find((c) => c.slug === hash);

  // Write-ups open at the top; section links on the home page scroll to their section.
  useEffect(() => {
    if (current) {
      scrollTo({ top: 0, behavior: "instant" });
      document.title = `${current.name} | Joshua Min`;
    } else {
      document.title = "Joshua Min";
      const el = hash && document.getElementById(hash);
      if (el) requestAnimationFrame(() => el.scrollIntoView());
      else scrollTo({ top: 0, behavior: "instant" });
    }
  }, [hash, current]);

  return current ? <CasePage c={current} /> : <Home />;
}
