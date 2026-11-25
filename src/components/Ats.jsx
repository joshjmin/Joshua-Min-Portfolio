// Visuals for the Hitachi Rail write-up, drawn in HTML. Illustrations only:
// no real device names, addresses or settings.

const rows = [
  ["Login", "15:43:12"],
  ["Network reachability", "15:43:18"],
  ["Syslog forwarding", "15:43:25"],
  ["Software upgrade", "15:48:10"],
  ["Network speed", "15:50:25"],
];

export function AtsSummary() {
  return (
    <figure className="ats-term" aria-label="Illustration of an ATS run summary: five tests passed in about seven minutes">
      <div className="ats-bar" aria-hidden="true"><i /><i /><i /><span>ATS · run summary</span></div>
      <div className="ats-body" aria-hidden="true">
        <p className="ats-h">FINAL TEST SUMMARY</p>
        {rows.map(([n, t]) => (
          <p key={n} className="ats-row"><span>{n}</span><b>PASS</b><em>{t}</em></p>
        ))}
        <p className="ats-tot">Total 5 · Passed 5 · Failed 0</p>
        <p className="ats-tot">Duration 0:07:13</p>
      </div>
      <figcaption>Illustration of an ATS run summary</figcaption>
    </figure>
  );
}

export function AtsDiagram() {
  return (
    <figure className="ats-diag">
      <div className="ats-flow">
        <div className="ats-col">
          <div className="ats-box"><b>Desktop app</b><span>or command line</span></div>
          <div className="ats-box"><b>Test list</b><span>which tests, in what order</span></div>
          <div className="ats-box"><b>Settings file</b><span>devices and thresholds</span></div>
        </div>
        <div className="ats-arrow" aria-hidden="true" />
        <div className="ats-col">
          <div className="ats-box ats-core"><b>Test runner</b><span>loads each test, runs it, records pass or fail</span></div>
        </div>
        <div className="ats-arrow" aria-hidden="true" />
        <div className="ats-col">
          <div className="ats-box"><b>Network devices</b><span>tested over SSH and isolated test networks</span></div>
          <div className="ats-box"><b>Logs and summary</b><span>one log per test, one summary per run, shown in the app</span></div>
        </div>
      </div>
      <figcaption>How ATS fits together</figcaption>
    </figure>
  );
}
