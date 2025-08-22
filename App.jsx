import React from "react";

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="section-title text-center max-w-3xl mx-auto mb-10">
    {eyebrow && <div className="badge uppercase tracking-widest">{eyebrow}</div>}
    <h2>{title}</h2>
    {subtitle && <p>{subtitle}</p>}
  </div>
);

const AircraftCard = ({ name, tail, tag, usage, img, specs, avionics, flights, cta }) => (
  <div className="card overflow-hidden">
    <div className="h-44 overflow-hidden">
      <img src={img} alt={name} className="h-full w-full object-cover"/>
    </div>
    <div className="card-section space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xl font-semibold">{name}</div>
          <div className="text-sm text-slate-500">{tail} • {tag}</div>
        </div>
        <span className="badge">{usage}</span>
      </div>
      <ul className="text-sm grid grid-cols-1 gap-2">
        {specs.cruise && <li>• Cruise {specs.cruise}</li>}
        {specs.range && <li>• Range {specs.range}</li>}
        {specs.fuel && <li>• Fuel burn {specs.fuel}</li>}
        {avionics && <li>• Avionics: {avionics}</li>}
      </ul>
      <details>
        <summary className="cursor-pointer text-sm font-medium">Performance & Basics</summary>
        <div className="mt-2 text-sm grid gap-1">
          {Object.entries(specs).map(([k,v]) => (
            <div key={k} className="flex justify-between">
              <span className="capitalize text-slate-500">{k.replace(/([A-Z])/g, " $1").toLowerCase()}</span>
              <span>{v}</span>
            </div>
          ))}
        </div>
      </details>
      <details>
        <summary className="cursor-pointer text-sm font-medium">Example Flights</summary>
        <ul className="mt-2 text-sm space-y-1">
          {flights.map((f,i) => <li key={i}>{f.from} → {f.to} • {f.time}</li>)}
        </ul>
      </details>
      <div className="pt-2">
        <a className="btn-outline w-full inline-flex" href="#contact">{cta}</a>
      </div>
    </div>
  </div>
);

export default function App() {
  const AIRCRAFT = [
    {
      name: "Piper Cherokee 235",
      year: 1965,
      tail: "N9112W",
      tag: "High-Performance Trainer",
      usage: "Flight training & pleasure flying",
      avionics: "Steam gauges + JPI 700, GNS 480 WAAS GPS",
      specs: {
        type: "Single-engine, high-performance",
        engine: "Lycoming O-540 — 235 HP",
        prop: "Constant speed",
        cruise: "~135–140 KTAS",
        fuel: "~12–14 GPH (100LL)",
        range: "~700–900 NM (aux tanks)",
        useful: "~1,400 lb",
        takeoff50: "~1,400 ft",
        landing50: "~1,200 ft",
        ceiling: "~13,000 ft",
      },
      flights: [
        { from: "Boise", to: "Salt Lake", time: "1:45" },
        { from: "Boise", to: "McCall", time: "40 min" },
      ],
      img: "https://picsum.photos/seed/cherokee/1200/800",
      cta: "Request Access"
    },
    {
      name: "Mooney M20E (Turbo-Normalized)",
      year: 1966,
      tail: "N2716W",
      tag: "Complex — Glass Panel",
      usage: "Pleasure; potential future training",
      avionics: "2× Dynon HDX, PS8000, Avidyne 440 WAAS",
      specs: {
        type: "Single-engine, complex (retract + CS prop)",
        engine: "Lycoming IO-360 — 200 HP (turbo-normalized)",
        prop: "Constant speed; retractable gear",
        cruise: "~145–160 KTAS",
        fuel: "~8–11 GPH (100LL)",
        range: "~800–1,000 NM",
        useful: "~826 lb",
        takeoff50: "~1,200 ft",
        landing50: "~1,000 ft",
        ceiling: "~18,000 ft",
      },
      flights: [
        { from: "Boise", to: "Salt Lake", time: "1:45" },
        { from: "Boise", to: "McCall", time: "40 min" },
      ],
      img: "https://picsum.photos/seed/mooney/1200/800",
      cta: "Request Access"
    },
    {
      name: "Cessna P210N Silver Eagle",
      year: 1980,
      tail: "N177PE",
      tag: "Pressurized Turbine",
      usage: "Business & personal travel",
      avionics: "Garmin G500TXi, GI275, dual GTN 750Xi, STEC55X",
      specs: {
        type: "Single-engine, pressurized, turbine (RR 250-B17F/2 — 450 SHP)",
        cruise: "~195–215 KTAS",
        fuel: "~26–30 GPH (Jet-A)",
        range: "~1,000–1,200 NM",
        useful: "~1,600 lb",
        takeoff50: "~2,000 ft",
        landing50: "~1,500 ft",
        ceiling: "~23,000 ft (pressurized)",
      },
      flights: [
        { from: "Boise", to: "Salt Lake", time: "1:20" },
        { from: "Boise", to: "McCall", time: "30 min" },
        { from: "Boise", to: "Bozeman", time: "1:20" },
        { from: "Boise", to: "Los Angeles", time: "3:30" },
      ],
      img: "https://picsum.photos/seed/silvereagle/1200/800",
      cta: "Request Dry Lease Info"
    },
    {
      name: "Eclipse EA50 (Eclipse 500)",
      year: 2008,
      tail: "N429CC",
      tag: "VLJ — Twin-Engine Jet",
      usage: "Business & personal travel",
      avionics: "Avio IFMS",
      specs: {
        type: "Twin-engine VLJ (PW610F-A)",
        cruise: "~330–350 KTAS",
        fuel: "~60 GPH (Jet-A)",
        range: "~1,000–1,100 NM",
        useful: "~2,300 lb",
        takeoff50: "~2,300 ft",
        landing50: "~2,500 ft",
        ceiling: "FL410 (RVSM capable airspace)",
      },
      flights: [
        { from: "Boise", to: "Salt Lake", time: "50 min" },
        { from: "Boise", to: "McCall", time: "20 min" },
        { from: "Boise", to: "Bozeman", time: "55 min" },
        { from: "Boise", to: "Los Angeles", time: "2:30" },
      ],
      img: "https://picsum.photos/seed/eclipse/1200/800",
      cta: "Explore Share Options"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="container h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-blue-50 flex items-center justify-center">✈️</div>
            <div className="font-semibold">Premiere Aviation Group</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#aircraft" className="nav-link">Aircraft</a>
            <a href="#training" className="nav-link">Training</a>
            <a href="#leasing" className="nav-link">Dry Lease</a>
            <a href="#regulatory" className="nav-link">Part 91</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <a className="btn hidden md:inline-flex" href="#contact">Book a Discovery Flight</a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="badge uppercase tracking-widest">Boise, Idaho (KBOI)</div>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.1]">
              Learn, Fly, and Go Farther —
              <span className="block text-blue-700">Premiere Aviation Group</span>
            </h1>
            <p className="mt-4 text-slate-600 max-w-xl">
              Flight training, aircraft experiences, and curated access to more capable airplanes — from the Cherokee to the turbine Silver Eagle and Eclipse VLJ.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn" href="#training">Explore Training</a>
              <a className="btn-outline" href="#aircraft">Meet the Fleet</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="badge">Flight School</span>
              <span className="badge">Dry Lease Options</span>
              <span className="badge">Ownership Shares</span>
              <span className="badge">Potential Part 135 via partner</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/silvereagle/1200/800" alt="Premiere Aviation Group" className="h-full w-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      <section id="aircraft" className="py-16 md:py-24">
        <div className="container">
          <SectionTitle eyebrow="Fleet" title="Aircraft Experiences & Access" subtitle="Each aircraft serves a unique purpose — select the right tool for training, travel, or upgrading your skills." />
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {AIRCRAFT.map((a, idx) => (
              <AircraftCard key={idx} name={a.name} tail={a.tail} tag={a.tag} usage={a.usage} img={a.img} specs={a.specs} avionics={a.avionics} flights={a.flights} cta={a.cta} />
            ))}
          </div>
        </div>
      </section>

      <section id="training" className="py-16 md:py-24 bg-white/60">
        <div className="container">
          <SectionTitle eyebrow="Flight School" title="Training Programs & Ratings" subtitle="From your first solo to turbine & jet transition — train with purpose in the Boise airspace." />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card"><div className="card-section">
              <div className="text-lg font-semibold">Private Pilot (PPL)</div>
              <p className="text-sm text-slate-600 mt-2">Start to finish training in Boise airspace (KBOI).</p>
              <ul className="text-sm list-disc pl-5 mt-3 space-y-1">
                <li>Scenario-based lessons and stage checks</li>
                <li>Ground school + flight training with stage exams</li>
                <li>Flexible fleet access (Cherokee 235 primary)</li>
              </ul>
            </div></div>
            <div className="card"><div className="card-section">
              <div className="text-lg font-semibold">Instrument Rating (IFR)</div>
              <p className="text-sm text-slate-600 mt-2">Precision procedures, decision-making, and real-world IMC readiness.</p>
              <ul className="text-sm list-disc pl-5 mt-3 space-y-1">
                <li>Approaches (ILS, LPV, LNAV/VNAV), holds, departures</li>
                <li>Avionics proficiency (GNS 480, Avidyne 440)</li>
                <li>KBOI weather & terrain strategy</li>
              </ul>
            </div></div>
            <div className="card"><div className="card-section">
              <div className="text-lg font-semibold">Commercial ASEL</div>
              <p className="text-sm text-slate-600 mt-2">Polish, proficiency, and professionalism for paid flying.</p>
              <ul className="text-sm list-disc pl-5 mt-3 space-y-1">
                <li>Complex & high-performance checkout</li>
                <li>Energy management and precision maneuvers</li>
                <li>Oral & practical preparation</li>
              </ul>
            </div></div>
          </div>
        </div>
      </section>

      <section id="leasing" className="py-16 md:py-24">
        <div className="container">
          <SectionTitle eyebrow="Access" title="Dry Lease & Ownership Shares" subtitle="Step into greater capability while keeping operations clean under Part 91." />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card"><div className="card-section">
              <div className="text-lg font-semibold">Dry Lease (Part 91)</div>
              <p className="text-sm mt-2">
                Under a dry lease, the <strong>lessee holds operational control</strong> and is responsible for airworthiness, maintenance tracking, insurance, and pilot compliance. We provide a concise operational-control packet to make this simple.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                <li>Available on: Silver Eagle, Eclipse VLJ</li>
                <li>Scheduling via PAG Dispatch</li>
                <li>Insurance & pilot requirements verified prior to release</li>
              </ul>
              <a className="btn-outline mt-3 inline-flex" href="#contact">Request Dry Lease Info</a>
            </div></div>
            <div className="card"><div className="card-section">
              <div className="text-lg font-semibold">Ownership Shares</div>
              <p className="text-sm mt-2">Structured access with equity alignment and professional dispatch support.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                <li>Share blocks sized to your mission</li>
                <li>Transparent fixed & variable cost model</li>
                <li>Priority scheduling and concierge preflight</li>
              </ul>
              <a className="btn-outline mt-3 inline-flex" href="#contact">Explore Share Options</a>
            </div></div>
          </div>
        </div>
      </section>

      <section id="regulatory" className="py-16 md:py-24 bg-white/60">
        <div className="container">
          <SectionTitle eyebrow="Part 91" title="Key Regulatory & Structural Considerations" subtitle="Summarized from counsel discussions and industry guidance (informational only — not legal advice)." />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card"><div className="card-section text-sm text-slate-600">
              <div className="text-base font-semibold mb-2">Time Sharing</div>
              A narrow Part 91 option with limited benefits; generally not recommended for our mission profile.
            </div></div>
            <div className="card"><div className="card-section text-sm text-slate-600">
              <div className="text-base font-semibold mb-2">Joint Ownership</div>
              FAA requires named registered owners; LLC members alone don’t qualify. Adding/removing owners triggers bill-of-sale and tax events.
            </div></div>
            <div className="card"><div className="card-section text-sm text-slate-600">
              <div className="text-base font-semibold mb-2">Dry vs. Wet Lease (Part 91)</div>
              Under a dry lease the lessee has operational control (airworthiness, maintenance, insurance, pilot compliance). We support this with a clear, simplified operational-control packet.
            </div></div>
          </div>
          <div className="mt-6 text-xs text-slate-500">
            * High-altitude endorsement availability depends on aircraft, instructor, and oxygen system configuration.
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24">
        <div className="container">
          <SectionTitle eyebrow="Get Started" title="Book, Inquire, or Say Hello" subtitle="Tell us what you want to fly and how we can help." />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="card-section">
                <div className="text-lg font-semibold">Quick Contact</div>
                <form className="grid gap-3 text-sm mt-3" onSubmit={(e)=>e.preventDefault()}>
                  <div className="grid gap-1">
                    <label>Name</label>
                    <input className="rounded-xl border p-2" placeholder="Your name"/>
                  </div>
                  <div className="grid gap-1">
                    <label>Email</label>
                    <input type="email" className="rounded-xl border p-2" placeholder="you@example.com"/>
                  </div>
                  <div className="grid gap-1">
                    <label>Interest</label>
                    <select className="rounded-xl border p-2">
                      <option>Discovery flight</option>
                      <option>Training (PPL/IFR/Commercial)</option>
                      <option>Endorsements</option>
                      <option>Dry lease (Silver Eagle / Eclipse)</option>
                      <option>Ownership shares</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="grid gap-1">
                    <label>Message</label>
                    <textarea className="rounded-xl border p-2 min-h-[100px]" placeholder="Tell us about your mission…"/>
                  </div>
                  <button className="btn mt-2" type="submit">Send Inquiry</button>
                </form>
              </div>
            </div>
            <div className="space-y-4">
              <div className="card"><div className="card-section text-sm">
                <div className="font-medium">Direct</div>
                <div className="text-slate-600 mt-1">(208) •••-••••</div>
                <div className="font-medium mt-4">Email</div>
                <div className="text-slate-600 mt-1">fly@premiereaviationgroup.com</div>
                <div className="font-medium mt-4">Base</div>
                <div className="text-slate-600 mt-1">Boise Airport (KBOI), Boise, Idaho</div>
              </div></div>
              <div className="card"><div className="card-section text-xs text-slate-600 space-y-2">
                <p><strong>Part 135:</strong> Certain trips may be available through an independent, fully certificated Part 135 operator via lease arrangement. Premiere Aviation Group is not itself a Part 135 air carrier and does not offer common carriage.</p>
                <p><strong>Disclaimer:</strong> This website is for informational purposes only and does not constitute legal, tax, or operational advice. Policies, insurance, and availability subject to change.</p>
              </div></div>
              <div className="flex flex-wrap gap-3">
                <a className="btn" href="#training">Start Training</a>
                <a className="btn-outline" href="#aircraft">Request Aircraft Access</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white/60">
        <div className="container py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Premiere Aviation Group. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#regulatory" className="nav-link">Part 91 Info</a>
            <a href="#training" className="nav-link">Programs</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}