import React from "react";

const profile = {
  name: "Darek Swidron",
  title: "Automotive, EV Battery, ADAS & Advanced Materials Commercial Expert",
  email: "advanced.materials.advisory@gmail.com",
  linkedIn: "https://www.linkedin.com/in/darek-swidron/",
  calendly: "https://calendly.com/advanced-materials-advisory/30min",
};

const services = [
  {
    title: "Automotive & EV Materials Strategy",
    text: "Advisory support for OEMs, Tier-1s, battery pack producers, ADAS and electronics teams, EV charging infrastructure players, power electronics companies, BESS companies and advanced material suppliers that need a clear view of bonding, sealing, insulation, thermal management and lightweighting options.",
  },
  {
    title: "Application & Technology Fit Mapping",
    text: "Map adhesive, tape, spacer, potting and composite solutions to BIW, EV battery packs, ADAS sensors, vehicle electronics, EV charging stations, power electronics, Battery Energy Storage Systems and composite material applications.",
  },
  {
    title: "Supplier, Customer & Partner Targeting",
    text: "Support OEMs and Tier-1s with supplier landscape understanding, and support material companies with target customer selection, account logic and EMEA market-entry planning.",
  },
  {
    title: "Technical-Commercial Positioning",
    text: "Translate material properties into business value: safety, manufacturability, weight reduction, process efficiency, serviceability, durability, thermal performance, electrical insulation, sensor protection and sustainability.",
  },
];

const materials = [
  "MMA adhesives",
  "Epoxy / epoxide systems",
  "UV-curing adhesives",
  "Silicone adhesives and sealants",
  "Acrylic adhesives",
  "Thermally conductive adhesives and gap fillers",
  "Electrically insulating adhesives",
  "Potting and encapsulation systems",
  "Structural adhesives",
  "Bonding and functional tapes",
  "Sealants and spacers",
  "Composite materials and lightweight structures",
  "Sensor bonding, sealing and protection materials",
  "Thermal and electrical management materials for electronics",
];

const applications = [
  {
    title: "Automotive Body-in-White",
    subtitle: "BIW bonding, sealing and lightweighting",
    text: "Structural adhesives, sealants, tapes, spacers and composite-related solutions for body structure, crash performance, stiffness, corrosion protection and production efficiency.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Electric Vehicles",
    subtitle: "E-mobility platforms and powertrain systems",
    text: "Bonding, sealing, insulation and thermal management solutions for EV platforms, modules, electronics, powertrain components and lightweight assemblies.",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Battery Packs & Modules",
    subtitle: "Cell, module and pack-level applications",
    text: "MMA, epoxy, silicone, acrylic, thermally conductive, electrically insulating and potting systems for battery safety, fixation, heat transfer, insulation and serviceability.",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "ADAS & Vehicle Electronics",
    subtitle: "Sensors, cameras, radar, LiDAR and control units",
    text: "Adhesives, tapes, thermal interface materials, sealing, potting and encapsulation solutions for sensor protection, vibration resistance, weather sealing, thermal management and reliable electronics integration.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "EV Charging Stations",
    subtitle: "Public, private and fleet charging infrastructure",
    text: "Potting, sealing, gasketing, tapes, thermal interface and insulation solutions for charger housings, connectors, cable management, outdoor durability and long-term system reliability.",
    image: "https://images.unsplash.com/photo-1763543007050-4dac73ffc67f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Power Electronics",
    subtitle: "Converters, inverters, control units and high-voltage electronics",
    text: "Thermal interface materials, electrically insulating adhesives, potting, encapsulation, sealing and tapes for heat management, protection, vibration resistance and reliable electronics integration.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Battery Energy Storage Systems",
    subtitle: "BESS for stationary energy storage",
    text: "Bonding, sealing, insulation, potting, thermal management and fire-safety-related material solutions for energy storage modules, racks and containers.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Composite Materials",
    subtitle: "Lightweight structures and functional assemblies",
    text: "Composite bonding, surface preparation, structural adhesives, films, tapes, spacers and hybrid material approaches for weight reduction and performance.",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1200&q=80",
  },
];

const proof = [
  "25+ years in adhesives, tapes, advanced materials, automotive and industrial B2B sales",
  "Commercial leadership across OEM, Tier-1, e-mobility, battery, BIW, ADAS, electronics and advanced bonding applications",
  "Strong understanding of MMA, epoxy, UV, silicone, acrylic, thermal, insulation, potting, tape, spacer and composite solutions",
  "Experience connecting material technologies with engineering, purchasing, product management and executive decision makers",
  "International sales and business development experience across EMEA and global industrial markets",
];

const process = [
  {
    step: "01",
    title: "Business question",
    text: "We define the exact question: supplier selection, product fit, market entry, customer targeting, competitive positioning or material strategy.",
  },
  {
    step: "02",
    title: "Application map",
    text: "I map relevant material technologies to BIW, EV, battery pack, ADAS, vehicle electronics, EV charging, power electronics, BESS and composite applications.",
  },
  {
    step: "03",
    title: "Market logic",
    text: "We identify relevant OEMs, Tier-1s, suppliers, converters, distributors, decision makers and likely entry points.",
  },
  {
    step: "04",
    title: "Action plan",
    text: "You receive clear recommendations, messaging, account priorities and practical next steps for commercial execution.",
  },
];

const targetClients = [
  "Automotive OEMs",
  "Tier-1 suppliers",
  "Engineering, validation, production and quality teams",
  "Battery pack and module producers",
  "ADAS, sensor and vehicle electronics companies",
  "EV charging infrastructure companies",
  "Power electronics companies",
  "Battery Energy Storage System (BESS) companies",
  "Adhesive, sealant and polymer manufacturers",
  "Tape, spacer and converter companies",
  "Composite material and lightweight structure suppliers",
  "Thermal management and insulation material suppliers",
  "Dispensing, automation and process equipment companies",
  "Distributors and market-entry partners",
  "Consultants, investors and expert networks needing market insight",
];

function ButtonLink({ href, children, variant = "dark" }) {
  const styles =
    variant === "dark"
      ? "bg-slate-950 text-white hover:bg-slate-800"
      : "bg-white text-slate-950 ring-1 ring-slate-200 hover:bg-slate-50";

  return (
    <a
      href={href}
      className={`inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition sm:w-auto ${styles}`}
    >
      {children}<span className="ml-2">→</span>
    </a>
  );
}

function SectionLabel({ children }) {
  return <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-sky-700 sm:text-sm">{children}</p>;
}

function Card({ title, text }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-xl text-sky-700 sm:h-12 sm:w-12 sm:text-2xl">✓</div>
      <h3 className="text-base font-black sm:text-lg">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-700">{text}</p>
    </div>
  );
}

function ApplicationCard({ item }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 bg-slate-200 sm:h-60 lg:h-56 xl:h-64">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-200 sm:text-xs">{item.subtitle}</p>
          <h3 className="mt-1 text-xl font-black sm:text-2xl">{item.title}</h3>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-sm leading-7 text-slate-700">{item.text}</p>
      </div>
    </div>
  );
}

function Chip({ children }) {
  return <span className="rounded-xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-800 sm:text-sm">{children}</span>;
}

export default function EVBatteryExpertWebsite() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-5 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-sm">EV</div>
            <div className="min-w-0">
              <p className="truncate text-sm font-extrabold leading-none">Darek Swidron</p>
              <p className="truncate text-xs text-slate-500">Automotive, EV & ADAS Materials Expert</p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
            <a href="#services" className="hover:text-slate-950">Services</a>
            <a href="#applications" className="hover:text-slate-950">Applications</a>
            <a href="#materials" className="hover:text-slate-950">Materials</a>
            <a href="#process" className="hover:text-slate-950">Process</a>
            <a href="#contact" className="hover:text-slate-950">Contact</a>
          </nav>
          <div className="flex flex-none flex-col gap-2">
  <a href={`mailto:${profile.email}`} className="rounded-2xl bg-sky-700 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-800">Contact</a>
  <a href={profile.calendly} className="rounded-2xl bg-white px-4 py-2 text-center text-sm font-semibold text-slate-950 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">Book call</a>
  <a href={profile.linkedIn} className="rounded-2xl bg-white px-4 py-2 text-center text-sm font-semibold text-slate-950 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">LinkedIn</a>
</div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-slate-100" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-5 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24 xl:gap-14">
            <div>
              <div className="mb-5 inline-flex max-w-full items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold text-sky-900 sm:text-sm">
                <span className="truncate">Automotive • BIW • EV Batteries • ADAS • EV Charging • Power Electronics • BESS • Composites</span>
              </div>
              <h1 className="max-w-4xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl">
                Helping OEMs, Tier-1s, engineers, validation, production and quality teams and material suppliers make better decisions in advanced bonding, sealing, insulation and lightweighting.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                I support automotive OEMs, Tier-1 suppliers, battery pack companies, ADAS and vehicle electronics teams, EV charging infrastructure players, power electronics companies, Battery Energy Storage System companies and advanced material suppliers with practical technical-commercial insight across adhesives, tapes, spacers, potting and composite material applications.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={profile.calendly}>Book an intro call</ButtonLink>
                <ButtonLink href={`mailto:${profile.email}?subject=Automotive%20EV%20ADAS%20Materials%20Discussion`} variant="light">Email me</ButtonLink>
              </div>
              <div className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                  <p className="text-2xl font-black text-slate-950">25+ yrs</p>
                  <p>Adhesives, tapes, advanced materials & industrial sales</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                  <p className="text-2xl font-black text-slate-950">OEM/Tier-1</p>
                  <p>Automotive, BIW, EV, ADAS and battery value chain focus</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                  <p className="text-2xl font-black text-slate-950">EMEA</p>
                  <p>Market entry, supplier / customer targeting & positioning</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl sm:rounded-[2rem]">
              <div className="relative min-h-[420px] bg-slate-900 sm:h-[500px] lg:h-[560px]">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80" alt="Advanced automotive and industrial engineering" className="h-full w-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-6 sm:left-6 sm:right-6">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-200 sm:text-sm">Advanced Materials for Mobility & Energy</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-left text-lg font-black leading-tight sm:text-xl md:text-2xl">
                    <li>Bonding & Functional Adhesives</li>
                    <li>Bonding & Functional Tapes</li>
                    <li>Sealants and Spacers</li>
                    <li>Potting Materials</li>
                    <li>Composites</li>
                  </ul>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Core focus</p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                  <Chip>Automotive BIW</Chip>
                  <Chip>EV battery packs</Chip>
                  <Chip>ADAS & electronics</Chip>
                  <Chip>EV charging stations</Chip>
                  <Chip>Power electronics</Chip>
                  <Chip>BESS</Chip>
                  <Chip>Composite materials</Chip>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>Services</SectionLabel>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">Practical support for both buyers and sellers of advanced material solutions.</h2>
            <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
              For OEMs and Tier-1s, the value is understanding technologies, supplier landscapes, application fit and sourcing logic. For material suppliers, converters and distributors, the value is sharper market entry, customer targeting and technical-commercial positioning.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {services.map((service) => <Card key={service.title} title={service.title} text={service.text} />)}
          </div>
        </section>

        <section id="applications" className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
            <div className="max-w-3xl">
              <SectionLabel>Application pictures</SectionLabel>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">Where advanced materials create value.</h2>
              <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
                These applications show the core areas where adhesives, tapes, spacers, potting materials, insulation solutions and composites can influence performance, safety, production efficiency and system cost.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
              {applications.map((item) => <ApplicationCard key={item.title} item={item} />)}
            </div>
          </div>
        </section>

        <section id="materials" className="bg-slate-100 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <SectionLabel>Material expertise</SectionLabel>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">Adhesives, tapes, spacers and composites — translated into application value.</h2>
                <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
                  The focus is not only on chemistry. The real value comes from understanding where each material family creates value in production, performance, safety, durability, sensor reliability, process efficiency and total system cost.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {materials.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                    <p className="text-sm font-semibold text-slate-800 sm:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-14 text-white sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <SectionLabel>Experience</SectionLabel>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">Technical enough for engineers. Commercial enough for management.</h2>
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                I work at the intersection of materials, applications, value proposition, account strategy and customer decision processes. This is where technically strong suppliers, OEM teams and Tier-1 teams often need a clear external view.
              </p>
              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <p className="text-xl font-black sm:text-2xl">BESS = Battery Energy Storage Systems</p>
                <p className="mt-4 leading-7 text-slate-300">
                  Correct abbreviation: BESS. It refers to stationary battery systems used for grid support, renewable energy storage, commercial energy storage and industrial backup or balancing applications.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              {proof.map((item) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                  <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-sky-300 text-xs font-black text-slate-950">✓</span>
                  <p className="text-sm leading-7 text-slate-200 sm:text-base">{item}</p>
                </div>
              ))}
              <div className="mt-4 rounded-3xl border border-sky-400/30 bg-sky-400/10 p-6">
                <h3 className="text-lg font-black sm:text-xl">Confidentiality-first approach</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">
                  My work is based on general industry experience, public information, market logic and application know-how. I do not provide confidential employer, customer, pricing, pipeline or proprietary information.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionLabel>Who I help</SectionLabel>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">Best fit clients</h2>
              <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
                This service is designed for industrial companies that need sharper material strategy, market entry, supplier insight, customer targeting or technical-commercial positioning in automotive, EV, ADAS, BESS and composite-related markets.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {targetClients.map((client) => (
                <div key={client} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                  <p className="text-sm font-semibold text-slate-800 sm:text-base">{client}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
            <div className="max-w-3xl">
              <SectionLabel>Process</SectionLabel>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">A simple process designed for speed.</h2>
              <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">Most companies do not need a 100-page report first. They need to know where to play, who to approach, what to say and how to test the market quickly.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
              {process.map((item) => (
                <div key={item.step} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <p className="text-sm font-black text-sky-700">{item.step}</p>
                  <h3 className="mt-3 text-lg font-black sm:text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-slate-950 shadow-2xl sm:rounded-[2rem] lg:grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 text-white sm:p-8 md:p-12">
              <SectionLabel>Flagship package</SectionLabel>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">Advanced Materials Market & Application Sprint</h2>
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                A fixed-scope package for OEMs, Tier-1s, material suppliers, converters or distributors who want a fast and practical view of material options, target applications, supplier/customer landscape or commercial opportunity.
              </p>
              <div className="mt-8 grid gap-3 text-sm text-slate-200 sm:text-base">
                {[
                  "20-minute Needs Discovery & Fit Call to identify the customer need, challenge and expected outcome",
                  "90-minute strategy call",
                  "Application fit matrix",
                  "Material technology and supplier/customer landscape view",
                  "Competitor and positioning logic",
                  "Outreach or sourcing angles",
                  "30-day action plan",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3"><span className="text-sky-300">✓</span><span>{item}</span></div>
                ))}
              </div>
              <p className="mt-8 rounded-2xl bg-white/10 p-5 text-sm leading-7 text-slate-200">
                Suggested starting package price: €1,500–€2,500 depending on scope. Expert calls, supplier reviews, target account research and special projects can be quoted separately.
              </p>
            </div>
            <div className="relative min-h-[320px] bg-slate-900 sm:min-h-[360px] lg:min-h-full">
              <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1400&q=80" alt="Technical-commercial material strategy" className="h-full w-full object-cover opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8 sm:right-8">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-200 sm:text-sm">From material choice to commercial execution</p>
                <p className="mt-4 text-2xl font-black sm:text-3xl">Application fit → Supplier/customer logic → Positioning → Action</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div>
                <SectionLabel>Useful links</SectionLabel>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">Where clients and expert calls may come from</h2>
                <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">In addition to direct outreach, expert networks can be a useful source of paid calls. Create profiles with a clear, narrow expert headline and strict confidentiality rules.</p>
              </div>
              <div className="grid gap-4">
                <a href="https://glg.com/" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><h3 className="font-black">GLG</h3><p className="mt-1 text-sm text-slate-600">Expert network for research calls and insight projects.</p></a>
                <a href="https://www.alphasights.com/experts/" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><h3 className="font-black">AlphaSights Experts</h3><p className="mt-1 text-sm text-slate-600">Profile for paid expert interactions with clients.</p></a>
                <a href="https://www.guidepoint.com/" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><h3 className="font-black">Guidepoint</h3><p className="mt-1 text-sm text-slate-600">Expert network and research platform.</p></a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-5 lg:px-8">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">Want to understand your opportunity in automotive, EV, ADAS, BESS or advanced materials?</h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">Send me a short note with your business question, product family, target application or target geography. I will tell you quickly whether I see a realistic fit.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={`mailto:${profile.email}?subject=Automotive%20EV%20ADAS%20Materials%20Discussion`}>Email {profile.email}</ButtonLink>
              <ButtonLink href={profile.calendly} variant="light">Book intro call</ButtonLink>
              <ButtonLink href={profile.linkedIn} variant="light">LinkedIn</ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 text-sm text-slate-600 sm:px-5 md:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <p className="font-bold text-slate-950">{profile.name}</p>
            <p>{profile.title}</p>
            <p className="mt-2 max-w-2xl">Independent advisory content. No confidential employer, customer, pricing, pipeline or proprietary information is provided.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-full bg-white px-4 py-2 text-slate-700 shadow-sm hover:text-sky-700">Email</a>
            <a href={profile.calendly} className="rounded-full bg-white px-4 py-2 text-slate-700 shadow-sm hover:text-sky-700">Call</a>
            <a href={profile.linkedIn} className="rounded-full bg-white px-4 py-2 text-slate-700 shadow-sm hover:text-sky-700">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
