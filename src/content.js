// All site copy lives here. Facts come from Joshua's resume and experience notes.
// Text wrapped in double braces is a figure that still needs confirming:
// it is highlighted in review builds (npm run build:review) and renders as plain text in production.

export const profile = {
  name: "Joshua Min",
  email: "joshua.min@mail.utoronto.ca",
  linkedin: "https://www.linkedin.com/in/joshuajmin",
  github: "https://github.com/joshjmin",
  resume: "Joshua_Min_Resume.pdf",
};

export const allCases = [
  {
    slug: "hitachi-rail",
    name: "Hitachi Rail",
    role: "Network design intern",
    when: "May – Aug 2026, Toronto",
    summary:
      "I pitched, built and handed off the Automated Test System (ATS), an internal tool that tests rail network devices in one click. My old team still uses it.",
    logo: "projects/hitachi/logo.png",
    logoWide: true,
    cover: { kind: "ats" },
    sections: [
      {
        title: "The context",
        body: [
          "I was on the data communications team, configuring and testing MCGs, the network devices that carry data between parts of a rail system. To check one, engineers typed Linux commands by hand, step by step: log in, check the network, upgrade the software, test the connection speed, read the logs.",
        ],
      },
      {
        title: "Pitching it",
        body: [
          "I talked with my supervisor and the team to find out what they actually needed, then pitched the project myself. Nobody assigned it to me. I checked in with my supervisor at every milestone to reconfirm priorities.",
        ],
      },
      {
        title: "What I built",
        body: [
          "ATS is a Python framework that runs a list of device tests automatically. Engineers can run it from a simple desktop app or the command line.",
        ],
        lead: true,
        list: [
          "One click to test. The app runs every test, or just the ones you pick, shows live output as it goes, and can stop a run at any time.",
          "A test library. 10+ Python scripts check that a device accepts logins, reaches the network, forwards its system logs, upgrades its software correctly and hits network speed targets.",
          "Results you can read at a glance. Every run writes a detailed log for each test and a pass/fail summary, shown in the app when the run finishes.",
          "Safe isolated test networks. ATS sets up and tears down separate virtual networks on the test machine, so traffic tests don't interfere with anything else.",
        ],
        diagram: "ats",
      },
      {
        title: "Designing it for the next engineer",
        body: [
          "I built ATS so that an engineer who had never seen it could pick it up, run it and extend it after I left.",
        ],
        lead: true,
        list: [
          "One settings file. Every device address, threshold and setting lives in one place, with nothing hard-coded in the tests.",
          "Docs inside each test. Every test file opens with what it checks, the settings it needs and notes for new users, so the docs stay in sync with the code.",
          "Adding a test is small. A new test is one short Python class that returns pass or fail, and the runner picks it up from a plain list.",
          "Choices for how strict a run is. A run can stop at the first failure or keep going, and failures in tests marked critical are flagged separately in the summary.",
        ],
      },
      {
        title: "The trade-off",
        body: [
          "I was short on time and had concerns about how far the tool needed to scale, so I chose simplicity and ease of use over raw speed. Tests run one at a time, in the order listed, and any engineer can use the app without touching the command line.",
        ],
      },
      {
        title: "Results",
        body: [
          "ATS automates 20+ manual test tasks per cycle. It cut diagnostic cycle time by 90% and network setup time by 85%, and 10+ engineers still use it since I handed it off.",
        ],
      },
    ],
    tech: "Python, Linux (Ubuntu), SSH, network namespaces, iperf3, rsyslog, TCP/IP, tcpdump, GitHub Copilot",
  },

  {
    slug: "kinnor",
    name: "Kinnor",
    role: "Founder & product lead",
    when: "Sep 2026 – present",
    summary:
      "I interviewed my church's worship leaders and musicians, found that coordination was the real problem, and launched Kinnor: a bilingual app that puts each service's setlist, charts and rehearsal RSVPs in one place.",
    logo: "projects/kinnor/icon.svg",
    cover: { video: "projects/kinnor/demo.mp4", poster: "projects/kinnor/hero.jpg", alt: "Demo of Kinnor: Home, RSVPs, a service's setlist, Event Mode, the song library and the Korean interface" },
    glance: [
      ["Role", "Founder & product lead: research, scope, priorities, design direction, testing, rollout and feedback"],
      ["Team", "Just me, directing an AI coding assistant, with worship leaders and members as users and testers"],
      ["Platform", "An installable web app for iPhone and Android, in English and Korean"],
      ["Results", "100+ members across churches and Korean Christian clubs, weekly setlists, about 95% RSVP before rehearsal, 15+ iterations, $0 a month to run"],
    ],
    sections: [
      {
        title: "The problem",
        lead: true,
        body: ["My church's praise band ran everything through a group chat and printed paper, and that broke down in four ways:"],
        list: [
          "Materials got buried. Chord charts, PDFs, YouTube links and times were scattered across messages, so before every service someone scrolled back or asked again.",
          "People missed rehearsals. There were no reminders and no clear record of who was coming, so the leader chased answers one by one.",
          "Listening to the set took effort. The leader built a YouTube playlist for each setlist and re-shared it whenever songs changed.",
          "Paper was wasted every week. Sheets were printed fresh for every service and rehearsal, then thrown away when the set or key changed.",
        ],
        bodyAfter: ["The band didn't need another place to talk. It needed one dependable place for each service, and a nudge before practice."],
      },
      {
        title: "Research",
        body: ["Before building anything, I talked with our worship leaders and musicians about how a typical week runs, from choosing songs to walking on stage. What I heard:"],
        list: [
          "Leaders kept re-sending the same charts and links, and couldn't see at a glance who was coming to rehearsal.",
          "Musicians wanted the chart for their own part and key, on their phone, without digging through the chat.",
          "Everyone liked being able to listen to the whole set in one go, so any replacement had to keep that.",
          "Older Korean-speaking members found English-only apps hard to use.",
        ],
        bodyAfter: ["The core job was coordinating around a service, not communication. Chat was already solved, so I designed around the gaps instead of competing with a habit people liked."],
      },
      {
        title: "Defining the first version",
        body: ["I scoped the first version to the two jobs from research: one place for each service, and nobody forgets practice. Everything else had to earn its way in."],
        tables: [
          { head: ["In the first version", "Why"], rows: [
            ["Services with any number of rehearsals", "Matches how the band actually prepares"],
            ["Yes / Maybe / No for each rehearsal", "Replaces chasing answers in the chat"],
            ["Setlist builder with keys and notes", "The leader's weekly job, on one screen"],
            ["Chart library per song, part and key", "Musicians get their own chart without searching"],
            ["Play all for the whole setlist", "Keeps the one thing the old playlist did well"],
            ["Reminders the day before", "Directly targets missed rehearsals"],
          ] },
          { head: ["Left out", "Why"], rows: [
            ["Chat", "Already solved; rebuilding it would compete with a habit people liked"],
            ["Rotation scheduling", "Groups are 3–6 people who play most weeks, so it solves a problem they don't have"],
            ["App store release", "About $425 a year plus review delays, while an installable web app reaches iPhone and Android today"],
          ] },
        ],
        bodyAfter: ["Two trust rules shaped the details. Anyone can add a song, because a wrong song is harmless. Uploaded charts wait for a leader's approval, because a wrong chart on stage is not."],
      },
      {
        title: "Designing for real people",
        lead: true,
        body: ["Members range from university students to older church members, so the bar was \u201cfeels like an app you already know.\u201d"],
        list: [
          "Familiar, not flashy. My first version looked generic, so I rebuilt it in an iPhone-native style: the phone's own font, grouped lists and large titles, with one navy colour and a small coloured dot for each group.",
          "One job per screen. Testing against a competing worship app showed mine felt cluttered, so I reorganized it into five tabs: Home, Calendar, Songs, Board and Group. Home answers \u201cwhat's next, and what do I need to do?\u201d",
          "Built for the stage. Event Mode shows full-screen charts with large page-turn targets and pedal support, plus markings, a metronome, live cues from the leader, and two pages side by side on a sideways iPad. It works offline, because church Wi-Fi is unreliable, so the band reads charts on phones and iPads instead of printing them.",
          "Bilingual by person, not by group. Groups mix English and Korean speakers, so each person picks their language for every screen, notification, email and calendar entry. The wording matches what Korean worship teams actually say, like \ucf58\ud2f0 for setlist and \uc545\ubcf4 for chart.",
        ],
        gallery: [
          { src: "projects/kinnor/feature-home.jpg", alt: "What's next, at a glance: the Home screen with the next service, rehearsal RSVPs and to-dos" },
          { src: "projects/kinnor/feature-rsvp.jpg", alt: "Availability without the group chat: Yes, Maybe or No for every rehearsal" },
          { src: "projects/kinnor/feature-event-mode.jpg", alt: "Event Mode for the stage: a full-screen chart with a live cue from the leader" },
          { src: "projects/kinnor/feature-two-pages.jpg", alt: "Two pages, side by side: a chart open like a book on a sideways iPad" },
          { src: "projects/kinnor/feature-shared-songs.jpg", alt: "One song library, many groups: a song shared with two groups" },
          { src: "projects/kinnor/feature-korean.jpg", alt: "Built for bilingual churches: the Home screen in Korean" },
        ],
        note: "Screenshots use demo data: made-up people, original song titles and chord charts.",
      },
      {
        title: "Launch and adoption",
        body: ["I rolled Kinnor out to my band with an invite link and home-screen install steps, then let it spread on its own."],
        list: [
          "100+ members now use it, across churches and Korean Christian clubs, all through word of mouth.",
          "Setlists are published every week, so the app is part of the routine, not a one-off.",
          "About 95% of members answer Yes, Maybe or No before rehearsal. The usual exception is one person answering on the day.",
          "It costs $0 a month to run, on free tiers.",
        ],
        bodyAfter: ["The RSVP rate is the number I watch most, because it shows the behaviour actually changed. Leaders now plan from answers instead of asking around."],
      },
      {
        title: "Iterating on feedback",
        body: ["After launch, members' requests drove the roadmap. I added a Send Feedback button that emails me directly, then decided case by case what to build."],
        tables: [
          { head: ["What I heard", "What I decided", "Result"], rows: [
            ["Some members struggle with English", "Translate everything, per person, including notifications and emails", "Korean speakers use the app in their own language"],
            ["Galaxy users couldn't find how to install it", "A one-tap Install button on Android, plus steps for each browser", "Android setup no longer needs my help"],
            ["Members asked to filter songs by key", "A key filter that also counts charts in other keys", "Faster set planning"],
            ["The leader wanted one song library for every group, without duplicating files", "Shared songs: add once, appear in many groups, files stored once, plus a batch import for new groups", "No repeated uploads, and storage stays flat"],
            ["People still needed a copy to share outside the app", "Save a song or a whole setlist as one PDF", "The whole set goes out as one file"],
          ] },
        ],
        bodyAfter: [
          "Shared songs is my favourite example of saying \u201cyes, but differently.\u201d A \u201ccopy to every group\u201d button would have been quick to build, but it would have multiplied storage and let versions drift apart, so I designed one shared song instead.",
          "In total I've shipped 15+ iterations so far, each traced to a member request, an interview or a test session.",
        ],
      },
      {
        title: "How it works",
        lead: true,
        body: ["The app on each phone talks straight to a managed Postgres database, and a small hosting layer serves the app and two helper functions."],
        imgs: [{ src: "projects/kinnor/architecture.jpg", alt: "System diagram: the phone app, Vercel hosting and Supabase for data, sign-in, chart files, live cues and reminders", caption: "How Kinnor's pieces fit together" }],
        list: [
          "Security in the database. Row-level security means each person can only read and change their own groups' data, even if the app had a bug.",
          "Notifications without a server to babysit. A scheduled database job queues reminders, and a serverless function sends web push in each person's language.",
          "Offline on stage. Charts for upcoming services are saved on the phone, so Event Mode keeps working with no signal.",
          "Shared songs, stored once. A link table lets one song belong to many groups, and each chart file is stored once.",
          "Cost-aware choices. Free tiers keep it at $0 a month, and I watch storage, the first limit we'd hit, in Supabase's usage dashboard.",
        ],
        bodyAfter: ["I directed the build with an AI coding assistant. I owned the requirements, data model decisions, testing on real phones, and every release decision."],
      },
      {
        title: "What I learned",
        lead: true,
        ordered: true,
        list: [
          "Fix the gap, not the habit. Leaving chat where it was made adoption easy: Kinnor asked people to change one thing, not everything.",
          "Keep what the old way did well. Play all exists because the playlist was the one part of the old workflow people liked.",
          "Accessibility is adoption. The Korean option is what made the app usable for some members at all.",
          "The obvious request isn't always the right feature. \u201cCopy to every group\u201d became shared songs, which solved the real need with fewer side effects.",
          "Measure behaviour, not sign-ups. The RSVP rate tells me more than the member count.",
        ],
      },
      {
        title: "What's next",
        list: [
          "Short follow-up interviews to measure the before and after, like how often leaders still ask \u201cwho's coming?\u201d in the chat",
          "Tracking RSVP rate and active members monthly from the database",
          "Exploring text chord sheets with one-tap transpose, the most common idea in feedback so far",
        ],
      },
    ],
    tech: "React, TypeScript, Vite PWA, Supabase (Postgres with row-level security, auth, storage, realtime), Vercel, web push, offline caching",
  },

  {
    slug: "spatia",
    name: "Spatia",
    role: "Project manager & developer",
    when: "Jan – Apr 2026, ECE297",
    summary:
      "A map and navigation app for tourists that brings walking, transit and driving directions, live city information and an AI assistant into one fast app. Our team of three built it in C++; I owned the roadmap and built core features.",
    logo: "projects/spatia/logo.png",
    code: "https://github.com/joshjmin/Spatia",
    cover: { src: "projects/spatia/subway.jpg", alt: "Spatia showing New York's subway lines in distinct colours", photo: true },
    sections: [
      {
        title: "Running the project",
        body: [
          "I owned the roadmap. I ran our meetings and schedule, tracked deliverables, kept in touch with our teaching assistants and managed our documentation. I set up our Jira workflow and a project wiki with 30+ technical specs and decisions. We shipped all five milestones on time, and I opened both of our project presentations.",
        ],
      },
      {
        title: "Picking a user and defining success",
        body: [
          "We decided to build for tourists: people in an unfamiliar city who need to get around on foot, by transit or by car. This was our own call; we didn't interview tourists. It gave every feature decision a filter.",
          "We also defined what \u201cgood\u201d meant before building. Responsive meant every action should feel instant, with a target of 100 milliseconds. Usable meant three things: people can do what they came to do, do it quickly, and enjoy doing it.",
        ],
      },
      {
        title: "What we built",
        list: [
          "A map with six zoom levels that show more detail as you zoom in, roads ranked by colour and thickness, and labels that follow each road without overlapping",
          "Live weather and a scale bar that adjusts as you zoom",
          "Colour-coded points of interest and speed limit markers, checked in user testing against a 10-second benchmark",
          "A custom interface with a night mode",
          "Subway lines in distinct colours, with their stations",
          "A chatbot that answers questions like \u201cwhich of those has a patio?\u201d using live map data, and remembers the conversation",
        ],
        imgs: [
          { src: "projects/spatia/map-toronto.jpg", alt: "Spatia's map of Toronto with major roads highlighted", caption: "The main map, showing Toronto" },
          { src: "projects/spatia/poi.jpg", alt: "Close-up of the map with colour-coded points of interest", caption: "Colour-coded points of interest" },
          { src: "projects/spatia/night-mode.jpg", alt: "Spatia's map in night mode", caption: "Night mode" },
          { src: "projects/spatia/chatbot.jpg", alt: "Spatia's chatbot listing restaurants near King and Bay and answering a follow-up question", caption: "The chatbot answering a follow-up question" },
        ],
      },
      {
        title: "Making routing fast",
        body: [
          "I built a C++ mapping engine over large-scale OpenStreetMap data, with custom hash-map indexing so lookups take constant time on average, and implemented Dijkstra's and A* shortest-path routing.",
          "As a team we kept optimizing. A* searches from several starting points in one pass, searches reset instantly between queries, and road segments are pre-computed so directions appear without a wait. For the course's delivery-routing challenge, our solver builds a travel-time table on eight threads, then runs eight parallel searches that keep improving the plan.",
          "The result: we ranked 6th out of 62 teams, used 93% of the time budget with zero timeouts, and our cost per delivery dropped by up to 42% as the number of deliveries grew.",
        ],
        imgs: [
          { src: "projects/spatia/directions.jpg", alt: "Turn-by-turn walking and driving directions drawn on the map", caption: "Walking and driving directions" },
          { src: "projects/spatia/solver-chart.jpg", alt: "Chart of cost per delivery falling as deliveries increase, for Toronto, New York and London", caption: "Cost per delivery falls as deliveries grow (Toronto, New York, London)" },
        ],
      },
      {
        title: "What we pitched next",
        body: [
          "Our final presentation pitched three features to make Spatia better for tourists: routes that mix walking, biking, transit and driving; an itinerary builder that plans a day around your interests while keeping travel distance short; and AI translation of place names and text on the map.",
        ],
        imgs: [
          { src: "projects/spatia/itinerary-map.jpg", alt: "An itinerary route drawn across lower Manhattan at night", caption: "An itinerary through New York" },
          { src: "projects/spatia/itinerary-form.jpg", alt: "The itinerary builder form with interests, transit preference and weather options", caption: "The itinerary builder", contain: true },
        ],
      },
    ],
    tech: "C++, EZGL/GTK (U of T's graphics library), OpenStreetMap, JavaScript, LLM API, Jira",
  },

  {
    slug: "book-device",
    name: "Suction Wedge for Book Conservation",
    role: "Team lead, client project for E.J. Pratt Library",
    when: "Jan – Apr 2025",
    summary:
      "A suction wedge that helps library conservators dry old books quickly after removing stains. A first-year engineering design project for a real client at U of T.",
    cover: { src: "projects/book/wedge-render-alpha.png", alt: "3D model of our plexiglass suction wedge" },
    sections: [
      {
        title: "The problem",
        body: [
          "Book conservators use solvents like water or alcohol to lift stains from old books. Letting the solvent air-dry takes a long time, so the conservator at E.J. Pratt Library needed a way to pull the solvent and leftover residue out of the paper quickly, without harming the book.",
          "Our starting point was the suction wedge conservators already use: a slanted surface that holds a book open and draws air through the page.",
        ],
      },
      {
        title: "What I did",
        body: [
          "I led a team of six, assigning tasks and tracking milestones in Jira. I ran about five meetings with the conservator and turned what we heard into our product requirements document, design specs, constraints and stakeholder analysis. At the final presentation, I presented why our design best met the client's needs.",
        ],
      },
      {
        title: "Turning conversations into requirements",
        body: ["The meetings gave us clear targets to design against. The wedge had to:"],
        list: [
          "Pull at least 50.8 kPa of suction through its top face",
          "Let a book open anywhere from 0° to 180°",
          "Stay in place under 30 N of sideways force",
          "Run quieter than 65 dB and give off at least 55 lux of light",
          "Cost under $150 and fit in the conservation room's cabinet",
          "Use no materials that break down or give off gases near archival paper, and limit UV light",
        ],
      },
      {
        title: "Choosing a design",
        body: [
          "We compared three concepts against those constraints: a pin-lock wedge, a ratchet wedge and a plexiglass wedge. The plexiglass wedge won. It adds anti-slip pads so it doesn't slide, LED lights so the conservator can see the page clearly, and a simple shape with no seams, so it's easy to clean.",
          "The trade-off was a bit more noise and less durability, in exchange for better visibility, stability and maintenance. We judged that trade worth it.",
        ],
        imgs: [
          { src: "projects/book/drawing.jpg", alt: "Orthographic drawing of the plexiglass wedge", caption: "Orthographic drawing of the plexiglass wedge" },
          { src: "projects/book/alt-pin-lock.jpg", alt: "3D model of the pin-lock wedge concept", caption: "Alternative: pin-lock wedge" },
          { src: "projects/book/alt-ratchet.png", alt: "3D model of the ratchet wedge concept", caption: "Alternative: ratchet wedge" },
        ],
      },
      {
        title: "Building and testing a prototype",
        body: [
          "We built a suction prototype connected to a shop vacuum and a pressure gauge, then timed how long treated paper took to dry with suction compared with air drying.",
        ],
        imgs: [
          { src: "projects/book/prototype-setup.jpg", alt: "Suction prototype connected to a shop vacuum with a pressure gauge", caption: "The test setup: prototype, vacuum and pressure gauge" },
          { src: "projects/book/gauge.jpg", alt: "Treated lined paper on the prototype's suction face, with the gauge attached", caption: "Measuring suction with treated paper on the face" },
        ],
        list: [
          "Water: dry in 2 minutes with suction, compared with 12 min 32 s air drying",
          "70/30 isopropyl alcohol: dry in 1 min 15 s, compared with 5 min 57 s air drying",
        ],
      },
      {
        title: "What still needed work",
        body: [
          "The prototype reached 22.0 kPa of suction, well short of our 50.8 kPa target. We were upfront about that with the client and recommended next steps: calibrate the pressure, make the prototype airtight and reprint its face, re-check our measures of success, and then build the full-size design.",
        ],
      },
    ],
    tech: "Product requirements, stakeholder analysis, CAD and technical drawings, prototyping, pressure testing, Jira",
  },

];

// Extra write-ups for the experience and project cards.
allCases.push(
  {
    slug: "ieee",
    name: "IEEE U of T Student Branch",
    logo: "projects/ieee/logo.png",
    logoWide: true,
    role: "Logistics associate",
    when: "May 2026 – present",
    summary: "I run the logistics behind IEEE U of T's biggest events, from Technical Interview Night to the MakeUofT hackathon.",
    sections: [
      {
        title: "What I do",
        body: [
          "I ran logistics for Technical Interview Night on September 21, 2026, at U of T's Bahen Centre. 100+ students practised with mock interviews run by about 50 industry interviewers and recruiters, got resume feedback, showed off their projects in a new project showcase and networked with companies such as Qualcomm, AMD, Hitachi and Microchip. I handled the rooms, catering and scheduling, all on a tight timeline.",
          "Now I'm planning MakeUofT, IEEE U of T's well-known 24-hour hardware hackathon. I'm working on the schedule, catering, prizes and their budgets, the themes, and generally everything the event needs to run. Last year's MakeUofT had 258 hackers, and we're planning for 250+ this year.",
        ],
      },
    ],
    tech: "Event planning, budgeting, scheduling",
  },
  {
    slug: "gdg",
    name: "Google Developer Groups, U of T",
    logo: "projects/gdg/logo.png",
    logoBare: true,
    role: "Academic director",
    when: "May 2025 – Apr 2026",
    summary: "I ran agentic AI and LLM bootcamps, treated attendees like users, and improved the program from their feedback.",
    sections: [
      {
        title: "What I did",
        list: [
          "Surveyed every registrant through the registration form, including their experience level, and shaped the curriculum around them",
          "Designed curricula on agentic AI, using Google Vertex AI, and web services",
          "Led a team of five, working with other directors, speakers, sponsors and universities",
          "Planned and taught three hands-on workshops for developers of mixed skill levels",
          "Built starter codebases and automated environment setup, so nobody lost the session to configuration",
        ],
      },
      {
        title: "Iterating from feedback",
        body: [
          "After each session I changed what wasn't working: slower pacing, setup done ahead of time, starter code, content matched to each level, and more icebreakers and food.",
        ],
      },
      {
        title: "Results",
        body: [
          "The bootcamps drew 100+ registrants, and about 70% of them showed up. After the changes, project completion rose from 60% to 85%.",
        ],
      },
    ],
    tech: "Google Vertex AI, Firebase, Git, LLM tools",
  },
  {
    slug: "hexahertz",
    name: "HexaHertz",
    role: "Real-time song analyzer, team of two",
    when: "Winter 2026, ECE243",
    code: "https://github.com/joshjmin/HexaHeartz",
    cover: { video: "projects/hexahertz/demo.mp4", poster: "projects/hexahertz/poster.jpg", portrait: true, alt: "HexaHertz running on the DE1-SoC: BPM and energy on the board's displays, then the spectrum, bar graph, waveform and mood screen on the VGA monitor" },
    summary:
      "A real-time song analyzer on an FPGA board. Plug in music, and it shows the beat, energy and frequency bands live on a VGA monitor, the board's displays and its LEDs. Aidan Tran and I built it for ECE243.",
    sections: [
      {
        title: "What it is",
        body: [
          "Music goes into the board's audio input. The system breaks every 1,024 samples into frequencies with a Fast Fourier Transform (FFT), splits them into bass, mid and treble, measures the overall energy and detects the beat to estimate BPM. Everything runs on the board's Nios V processor in plain C, with no floating-point hardware and no operating system.",
          "The results show up three ways at once: BPM and energy on the six 7-segment displays, an energy bar on the ten LEDs, and one of four visual modes on a VGA monitor, with a white flash on every beat.",
        ],
      },
      {
        title: "How it fits together",
        imgs: [{ src: "projects/hexahertz/diagram.jpg", alt: "Block diagram: audio line-in, interval timer and PS/2 keyboard feed the audio input, signal analysis, mood mapping, BPM detector, user input handler, VGA renderer and 7-segment driver, which drive the VGA display, LEDs and 7-segment displays", caption: "The system block diagram I drew for our project plan" }],
      },
      {
        title: "My part",
        body: ["Aidan led the project and built the signal processing and VGA graphics. I built the parts people see and touch:"],
        lead: true,
        list: [
          "Keyboard controls. A PS/2 state machine that decodes key presses and releases, including the arrow keys' extended codes, and maps each key to an action.",
          "The board's displays. The 7-segment driver that shows BPM and energy as three-digit numbers, and the LED energy bar.",
          "Smoother visuals. The smoothing and decay functions that make bars rise instantly on a beat and fall off gradually, instead of flickering.",
          "The plan and the documentation. The project plan, the block diagram above, and documenting the code throughout.",
        ],
      },
      {
        title: "Controlling it",
        tables: [
          { head: ["Key", "What it does"], rows: [
            ["1", "Spectrum: 32 frequency bars with peak-hold dots"],
            ["2", "Bar graph: three big bass, mid and treble bars that shift from green to red"],
            ["3", "Waveform: the raw audio drawn like an oscilloscope"],
            ["4", "Mood screen: a colour gradient and drifting particles, labelled INTENSE, GROOVY or CHILL"],
            ["Up / Down", "Make beat detection less or more sensitive"],
            ["Space", "Pause or resume"],
            ["R", "Reset the BPM estimate, for when the song changes"],
          ] },
        ],
      },
      {
        title: "Testing without music",
        body: ["The board's switches turn on built-in test signals: a single 440 Hz tone, two tones at once, a 120 BPM kick pattern and a sweep from bass to treble. Each one has an expected result, like the BPM settling near 120 for the kick pattern, so each part could be checked on its own."],
      },
    ],
    tech: "C, Nios V, DE1-SoC FPGA board, Q15 fixed-point FFT, VGA, PS/2 keyboard, WM8731 audio codec",
  },

);

allCases.push(
  {
    slug: "wall-breaker",
    name: "Wall Breaker",
    role: "Hardware developer, team of two",
    when: "Fall 2025, ECE241",
    summary:
      "A Breakout-style arcade game built entirely in hardware: Verilog on an FPGA board, drawn on a VGA monitor and played with a PS/2 keyboard. No processor, no software.",
    code: "https://github.com/joshjmin/Wall-Breaker",
    cover: { video: "projects/wallbreaker/demo.mp4", poster: "projects/wallbreaker/poster.jpg", portrait: true, alt: "Wall Breaker being played on a VGA monitor with a keyboard, with the FPGA board beside it" },
    sections: [
      {
        title: "What it is",
        body: [
          "Move the paddle with A and D, launch the ball with W, and break all 24 bricks to win. Miss the ball and it's game over. The score counts up on the board's 7-segment display, and custom start and game over screens load from on-chip memory.",
          "Everything runs as digital logic on the FPGA: 7 state machines working in parallel, about 1,000 lines of Verilog.",
        ],
        natural: true,
        imgs: [
          { src: "projects/wallbreaker/start-screen.jpg", alt: "Wall Breaker's pixel-art start screen", caption: "Start screen" },
          { src: "projects/wallbreaker/game-over.jpg", alt: "Wall Breaker's game over screen", caption: "Game over screen" },
        ],
      },
      {
        title: "How it works",
        lead: true,
        list: [
          "A game state controller is the brain. It moves the game between start screen, playing, game over and resetting, and tells every other part what to do.",
          "Physics runs on a 60 Hz game tick. A divider turns the board's 50 MHz clock into 60 updates a second, which drive the paddle and ball.",
          "Collision checks happen all at once. All 24 bricks are checked against the ball in parallel on every clock cycle, and where the ball hits the paddle (left, centre or right) sets its new direction.",
          "One screen, many writers. The paddle, ball, bricks and full-screen images all draw to the same display, so a priority system decides who gets to write each pixel.",
        ],
        imgs: [
          { src: "projects/wallbreaker/overview.jpg", alt: "Block diagram of Wall Breaker: keyboard, game state controller, ball, paddle, brick display, score tracker and VGA adapter", caption: "How the modules connect" },
        ],
      },
      {
        title: "My part",
        natural: true,
        body: ["We split the game between the two of us. I built the game tick, the ball and paddle logic, their display modules, and the game over screen. My teammate built the keyboard input, brick display, score tracker and start screen."],
        imgs: [
          { src: "projects/wallbreaker/ball-fsm.jpg", alt: "State machine for the ball: reset, idle, move, bounce and lose", caption: "The ball's state machine" },
          { src: "projects/wallbreaker/paddle-fsm.jpg", alt: "State machine for the paddle: idle, move left and move right", caption: "The paddle's state machine" },
        ],
      },
      {
        title: "Bugs we hunted down",
        body: ["Hardware bugs show up as glitches on screen, so each one meant tracing a picture back to a signal."],
        tables: [
          { head: ["What we saw", "Root cause", "Fix"], rows: [
            ["The ball and paddle glitched and left trails behind them", "The paddle took drawing priority almost every time", "A display multiplexer that decides priority, plus busy signals between modules"],
            ["The top-left brick was half painted black", "The brick's pixel counter kept counting even when it wasn't allowed to draw", "Only advance the counter when the ball and paddle aren't drawing"],
            ["The ball passed straight through the paddle when coming from the right", "Collision only checked the ball's left edge", "Check the right edge too"],
          ] },
        ],
      },
      {
        title: "What's next",
        body: ["Extra lives, more levels with more bricks and animation, and a win screen."],
      },
    ],
    tech: "Verilog, Altera DE1 FPGA, Quartus, ModelSim, VGA, PS/2 keyboard",
  },
  {
    slug: "aeromix",
    name: "AeroMix",
    role: "Hackathon project, MakeUofT",
    when: "2026, MakeUofT",
    summary:
      "A low-cost DJ glove that lets you control music in Ableton Live with hand gestures instead of knobs and sliders.",
    code: "https://github.com/joshjmin/AeroMix",
    cover: { video: "projects/aeromix/demo.mp4", poster: "projects/aeromix/poster.jpg", alt: "Demo of the AeroMix glove: calibration, then curling fingers to change volume, reverb and pitch, and moving the hand to change tempo" },
    sections: [
      {
        title: "Why we built it",
        body: ["DJ equipment is expensive, and DJ software mostly means clicking buttons and dragging sliders. We wanted something more physical and expressive, where you shape the music with your hands."],
      },
      {
        title: "What it does",
        body: ["The glove has three flex sensors on the thumb, index and middle fingers, and an ultrasonic distance sensor on the palm. Each one controls part of the track:"],
        tables: [
          { head: ["Gesture", "Controls"], rows: [
            ["Curl your thumb", "Track volume"],
            ["Curl your index finger", "Reverb"],
            ["Curl your middle finger", "Pitch"],
            ["Move your hand closer or further away", "Tempo"],
          ] },
        ],
      },
      {
        title: "How it works",
        lead: true,
        list: [
          "The glove. An Arduino Uno R4 WiFi reads the sensors. Each flex sensor sits in a voltage divider for stable readings, and a 3D-printed case holds the electronics.",
          "The desktop app. A Python app shows each sensor live and cleans up the noisy readings with a median filter, smoothing and a limit on how fast values can change.",
          "Talking to Ableton. The app turns each reading into MIDI control messages, which Ableton Live maps to its effects.",
          "Guided setup. Spoken prompts from ElevenLabs walk you through calibrating each finger.",
        ],
        imgs: [{ src: "projects/aeromix/glove.jpg", alt: "The AeroMix glove: three flex sensors taped along the fingers, wired to an Arduino on a breadboard in a 3D-printed case", caption: "The glove: flex sensors on three fingers, wired to an Arduino in a 3D-printed case" }],
      },
      {
        title: "What's next",
        body: ["Bluetooth so the glove doesn't need a USB cable, an accelerometer to catch quick hand swings, and more gestures mapped to more effects."],
      },
    ],
    tech: "Arduino Uno R4 WiFi, flex sensors, ultrasonic sensor, Python, PySide6, mido (MIDI), ElevenLabs, Ableton Live, 3D printing",
  },
);

export const cases = allCases.filter((c) => !c.hidden);
const bySlug = (slug) => cases.find((c) => c.slug === slug);

// Cards on the home page. "card" is the short line shown on each card.
export const experience = [
  { slug: "kinnor", mark: "K", icon: "projects/kinnor/icon.svg", card: "Founded a bilingual app for worship teams. It grew to 100+ members by word of mouth, and about 95% RSVP before rehearsal." },
  { slug: "hitachi-rail", mark: "HR", icon: "projects/hitachi/logo.png", iconWide: true, card: "Pitched and built an automated test system that cut diagnostic time by 90%. 10+ engineers still use it." },
  { slug: "ieee", mark: "IE", icon: "projects/ieee/logo.png", iconWide: true, card: "Ran logistics for Technical Interview Night: 100+ students and about 50 industry interviewers. Now planning MakeUofT." },
  { slug: "gdg", mark: "GD", icon: "projects/gdg/logo.png", card: "Ran AI bootcamps and raised project completion from 60% to 85% based on attendee feedback." },
].map((e) => ({ ...bySlug(e.slug), ...e }));

export const projects = [
  { slug: "book-device", img: "projects/book/card.jpg", card: "A suction wedge for a library client. Our prototype dried treated pages in 2 minutes instead of 12½." },
  { slug: "spatia", img: "projects/spatia/card.jpg", card: "A C++ map app for tourists. I owned the roadmap, we shipped all 5 milestones on time and ranked 6th of 62 teams." },
  { slug: "hexahertz", img: "projects/hexahertz/card.jpg", more: true, card: "A real-time song analyzer on an FPGA: live BPM, energy and four VGA visual modes. I built the keyboard controls and the board's displays." },
  { slug: "wall-breaker", img: "projects/wallbreaker/card.jpg", more: true, card: "A Breakout game built entirely in Verilog on an FPGA, with a VGA display and keyboard controls." },
  { slug: "aeromix", img: "projects/aeromix/card.jpg", more: true, card: "A DJ glove built at MakeUofT that controls Ableton Live with hand gestures." },
].map((p) => ({ ...bySlug(p.slug), ...p }));


export const leadership = [
  {
    name: "IEEE U of T Student Branch",
    role: "Logistics associate",
    when: "May 2026 – present",
    short: "Ran logistics for Technical Interview Night, with 100+ students and about 50 industry interviewers. Now planning MakeUofT for 250+ hackers.",
    body: "I ran rooms, catering and scheduling for Technical Interview Night, with 100+ students and about 50 industry interviewers on a tight timeline. Now I'm planning MakeUofT, IEEE U of T's 24-hour hardware hackathon, for 250+ hackers: the schedule, catering, prizes and budgets, and themes.",
  },
  {
    name: "Google Developer Groups, U of T",
    role: "Academic director",
    when: "May 2025 – Apr 2026",
    short: "Ran bootcamps on agentic AI and LLM tools for 100+ registrants. Changes I made from attendee feedback raised project completion from 60% to 85%.",
    body: "I ran bootcamps on agentic AI and large language model tools, and treated the attendees like users. I surveyed every registrant on their experience level and shaped the curriculum around them, led a team of five working with speakers, sponsors and universities, and taught three hands-on workshops myself. After feedback I changed the pacing, added starter code and setup scripts, and matched content to each level. Project completion rose from 60% to 85%, with 100+ registrants and 70+ attendees.",
  },
];

export const builds = [
  {
    name: "Nito Schedule",
    body: "An exam-scheduling app built around students' scheduling needs, and a top 10 finalist at Hack the Student Life with AWS.",
    tech: "Python, Amazon Bedrock, S3",
  },
];


export const education = {
  school: "University of Toronto",
  degree: "BASc in Computer Engineering, minors in AI and Business",
  when: "Sep 2024 – May 2029",
  coursework: "Deep learning, operating systems, data structures and algorithms, databases, object-oriented programming in C++",
};

export const skills = [
  ["Product & data", "User interviews, product requirements, roadmapping, Jira, Power BI, Excel"],
  ["Languages", "Python, C/C++, TypeScript, JavaScript, SQL, Bash, Verilog, Assembly, MATLAB"],
  ["Frameworks", "React, Node.js, PyTorch, NumPy, Pandas, Tailwind CSS"],
  ["Cloud & tools", "AWS (Bedrock, S3), Supabase, PostgreSQL, Firebase, Vercel, Docker, Git, Linux, TCP/IP, Valgrind, iPerf"],
];
