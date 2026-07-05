import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Clock3,
  Construction,
  DraftingCompass,
  Filter,
  Hammer,
  Handshake,
  Layers3,
  LayoutGrid,
  Mail,
  MapPinned,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  SquarePen,
  Star,
  Users,
  X,
} from 'lucide-react';

const pages = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About & Structure' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'credentials', label: 'Credentials' },
];

const trustStats = [
  { label: 'Established', value: '2024' },
  { label: 'Accreditation', value: 'PCAB Accredited Contractor' },
  { label: 'Membership', value: 'PhilGEPS Platinum Member' },
  { label: 'Record', value: 'Zero Complainant Record' },
];

const featuredServices = [
  {
    icon: Building2,
    title: 'General Building',
    text: 'School buildings, government offices, hospitals, and healthcare facilities delivered with disciplined project control.',
  },
  {
    icon: Hammer,
    title: 'General Engineering',
    text: 'Road rehabilitation, drainage systems, site development, and utilities that strengthen public infrastructure.',
  },
  {
    icon: DraftingCompass,
    title: 'Design & Build',
    text: 'Integrated architectural and engineering delivery with structural, electrical, sanitary, and mechanical works.',
  },
];

const missionPillars = [
  'Deliver high-quality infrastructure in full compliance with national laws, standards, and regulations.',
  'Uphold the highest standards of safety, quality, and environmental stewardship in all operations.',
  'Ensure timely and cost-efficient completion through effective project management and technical expertise.',
  'Foster long-term relationships with clients through integrity, professionalism, and excellence.',
];

const organizationTree = [
  { role: 'CEO / Officer In Charge', name: 'Rey C. Dionela' },
  { role: 'Company Consultant', name: 'Romeo B. Race' },
  { role: 'Operational Manager', name: 'Marianel C. Derequito' },
  { role: 'Project Engineer', name: 'Alyka Dianaline Lagman' },
  { role: 'Site Engineers', name: 'Rey C. Dionela & Razzelle Ron P. Albano' },
  { role: 'Safety Officer', name: 'Nomi B. Villena' },
  { role: 'Government Account Executive', name: 'Raymund Gasmeña' },
  { role: 'Administrative & Finance', name: 'Celiste Aramil' },
  { role: 'General Foreman', name: 'Ed Guavar' },
  { role: 'Field Supervisor', name: 'Alvin De Luna' },
];

const services = [
  {
    icon: Building2,
    title: 'General Building',
    summary: 'Institutional and civic structures with dependable execution.',
    items: ['School Buildings', 'Government Offices', 'Hospitals and Healthcare Facilities'],
  },
  {
    icon: Hammer,
    title: 'General Engineering',
    summary: 'Infrastructure work that improves access, resilience, and public utility.',
    items: ['Road Construction and Rehabilitation', 'Drainage and Flood Control Systems', 'Site Development', 'Water System Installation', 'Street Lights'],
  },
  {
    icon: DraftingCompass,
    title: 'Design & Build Services',
    summary: 'End-to-end delivery combining concept, engineering, and construction.',
    items: ['Architectural and Engineering Design', 'Structural, Electrical, Sanitary, and Mechanical Works', 'Project Management and Supervision'],
  },
];

const projects = [
  {
    name: 'Malaya Elementary School',
    location: 'Brgy. Malaya, Rosario, Batangas',
    scope: '2-Storey, 6-Classroom Building (Subcontract with Greenfield Construction)',
    cost: 18666800,
    duration: '7 Months',
    category: 'Building',
  },
  {
    name: 'Balanga Elementary School',
    location: 'Brgy. Balanga, Ibaan, Batangas',
    scope: '2-Storey, 8-Classroom Building (Subcontract with Greenfield Construction)',
    cost: 23190000,
    duration: '8 Months',
    category: 'Building',
  },
  {
    name: 'Concrete Pavement Line Canal',
    location: '18 Poblacion-Bilogo, Taysan, Batangas',
    scope: 'Rehabilitation/Upgrading of Provincial Road',
    cost: 10000000,
    duration: '90 Days',
    category: 'Engineering',
  },
  {
    name: 'Road and Canal Construction',
    location: 'Brgy. Talaga, Rizal, Laguna',
    scope: 'Rehabilitation and Upgrading',
    cost: 4900000,
    duration: '60 Days',
    category: 'Engineering',
  },
  {
    name: 'One-Storey Classroom Building',
    location: 'Brgy. Namunga, Rosario, Batangas',
    scope: '1 Classroom with bedroom and CR',
    cost: 1890000,
    duration: '45 Days',
    category: 'Building',
  },
  {
    name: 'Rehabilitation of Slab Flooring',
    location: 'Brgy. Namunga, Rosario, Batangas',
    scope: 'Concrete Slab Pouring',
    cost: 1049400,
    duration: '7 Days',
    category: 'Engineering',
  },
  {
    name: 'Motorpool Facilities',
    location: 'Lipa City',
    scope: 'Full facility construction',
    cost: 7669350,
    duration: '120 Days',
    category: 'Building',
  },
  {
    name: 'Proposed Resort House',
    location: 'Lipa City, Batangas',
    scope: 'Function Hall, Guestroom, Stockroom, and Service Facilities',
    cost: 4871370,
    duration: '120 Days',
    category: 'Design & Build',
  },
  {
    name: 'DEPED School Repair (Conference Room)',
    location: 'Cresencia Senior High School, San Pablo City, Laguna',
    scope: 'Conference room repair and improvement works',
    cost: 171168.52,
    duration: '15 Days',
    category: 'Repair',
  },
  {
    name: 'DEPED School Repair (Admin Office)',
    location: 'Santisimo Elementary School, San Pablo City, Laguna',
    scope: 'Administrative office repair and renovation',
    cost: 177292.35,
    duration: '15 Days',
    category: 'Repair',
  },
  {
    name: 'One-Storey Function Hall Building',
    location: 'Brgy. Papaya, Nasugbu, Batangas',
    scope: 'Function hall construction',
    cost: 3000000,
    duration: '60 Days',
    category: 'Building',
  },
  {
    name: 'LED Street Lights Provision',
    location: 'Brgy. Bigaa, Cabuyao, Laguna',
    scope: 'Installation of LED Streetlights',
    cost: 10935933.34,
    duration: '210 Days',
    category: 'Engineering',
  },
];

const credentials = [
  {
    badge: 'SEC',
    title: 'Certificate of Incorporation',
    detail: 'Company Reg. No. 2024080162929-00',
    note: 'Issued Aug 6, 2024',
  },
  {
    badge: 'PCAB',
    title: "Regular Contractor's License",
    detail: 'Accredited under Philippine Law',
    note: 'Construction authority and compliance verified',
  },
  {
    badge: 'PhilGEPS',
    title: 'Platinum Membership Certificate',
    detail: 'Reference No. 202509-453396-450330283',
    note: 'Valid until April 10, 2027',
  },
];

const contactCards = [
  {
    icon: Phone,
    title: 'Contact Numbers',
    lines: ['049-544 1533', '0995 981 9133'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['lrbuilderscorporation@gmail.com'],
  },
  {
    icon: MapPinned,
    title: 'Main Office',
    lines: ['2707 UPA Building, 27 Barleta St.', 'Brgy IV-B, San Pablo City, Laguna'],
  },
  {
    icon: MapPinned,
    title: 'Extension Office',
    lines: ['Brgy. San Gabriel, Teomora Village Ph 4', 'San Pablo City, Laguna'],
  },
];

const projectTypes = ['All', 'Building', 'Engineering', 'Repair', 'Design & Build'];

function formatPeso(value) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 2,
  }).format(value);
}

function svgDataUri(svg) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const visualShowcase = [
  {
    title: 'Commercial Build',
    alt: 'Stylized construction site illustration for commercial building work',
    src: svgDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560" role="img" aria-label="Commercial build illustration">
        <defs>
          <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#0f172a"/>
            <stop offset="100%" stop-color="#1e293b"/>
          </linearGradient>
          <linearGradient id="glass" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#f5a623"/>
            <stop offset="100%" stop-color="#fef3c7"/>
          </linearGradient>
        </defs>
        <rect width="800" height="560" rx="36" fill="url(#sky)"/>
        <rect y="380" width="800" height="180" fill="#334155"/>
        <rect x="100" y="210" width="190" height="210" rx="18" fill="#e2e8f0"/>
        <rect x="318" y="160" width="220" height="260" rx="18" fill="#cbd5e1"/>
        <rect x="572" y="238" width="120" height="182" rx="18" fill="#94a3b8"/>
        <rect x="145" y="255" width="110" height="30" rx="10" fill="url(#glass)"/>
        <rect x="145" y="305" width="110" height="30" rx="10" fill="url(#glass)"/>
        <rect x="367" y="208" width="124" height="34" rx="10" fill="url(#glass)"/>
        <rect x="367" y="264" width="124" height="34" rx="10" fill="url(#glass)"/>
        <rect x="367" y="320" width="124" height="34" rx="10" fill="url(#glass)"/>
        <rect x="612" y="286" width="40" height="108" rx="10" fill="url(#glass)"/>
        <path d="M78 156h230l-18 22H96z" fill="#f8fafc" opacity="0.95"/>
        <path d="M308 118l92 0 0 22-92 0z" fill="#f5a623"/>
        <path d="M400 118l0 210" stroke="#f5a623" stroke-width="16" stroke-linecap="round"/>
        <path d="M400 156l178 70" stroke="#f5a623" stroke-width="10" stroke-linecap="round"/>
        <path d="M505 224l144 0" stroke="#f5a623" stroke-width="10" stroke-linecap="round"/>
        <path d="M210 500h420" stroke="#0f172a" stroke-width="18" stroke-linecap="round"/>
      </svg>
    `),
  },
  {
    title: 'Infrastructure Works',
    alt: 'Stylized road and drainage infrastructure illustration',
    src: svgDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560" role="img" aria-label="Infrastructure works illustration">
        <defs>
          <linearGradient id="bg2" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#1f2937"/>
            <stop offset="100%" stop-color="#111827"/>
          </linearGradient>
        </defs>
        <rect width="800" height="560" rx="36" fill="url(#bg2)"/>
        <rect y="360" width="800" height="200" fill="#475569"/>
        <path d="M120 490L360 220h120l240 270z" fill="#e2e8f0" opacity="0.96"/>
        <path d="M400 215l0 274" stroke="#f5a623" stroke-width="16" stroke-dasharray="34 22" stroke-linecap="round"/>
        <rect x="78" y="300" width="186" height="110" rx="18" fill="#94a3b8"/>
        <rect x="542" y="278" width="180" height="132" rx="18" fill="#cbd5e1"/>
        <rect x="120" y="328" width="110" height="20" rx="8" fill="#f5a623"/>
        <rect x="584" y="308" width="104" height="20" rx="8" fill="#f5a623"/>
        <circle cx="188" cy="446" r="34" fill="#0f172a"/>
        <circle cx="188" cy="446" r="14" fill="#f5a623"/>
        <circle cx="613" cy="446" r="34" fill="#0f172a"/>
        <circle cx="613" cy="446" r="14" fill="#f5a623"/>
        <path d="M250 430h300" stroke="#e2e8f0" stroke-width="18" stroke-linecap="round"/>
        <path d="M250 470h300" stroke="#94a3b8" stroke-width="10" stroke-linecap="round"/>
      </svg>
    `),
  },
  {
    title: 'Design & Build',
    alt: 'Stylized architectural design and construction illustration',
    src: svgDataUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560" role="img" aria-label="Design and build illustration">
        <defs>
          <linearGradient id="bg3" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#111827"/>
            <stop offset="100%" stop-color="#334155"/>
          </linearGradient>
        </defs>
        <rect width="800" height="560" rx="36" fill="url(#bg3)"/>
        <rect y="392" width="800" height="168" fill="#1f2937"/>
        <path d="M132 392l88-132h170l88 132z" fill="#e2e8f0"/>
        <rect x="180" y="270" width="104" height="122" rx="12" fill="#f8fafc"/>
        <rect x="305" y="238" width="120" height="154" rx="12" fill="#cbd5e1"/>
        <rect x="448" y="280" width="92" height="112" rx="12" fill="#94a3b8"/>
        <path d="M563 150l86 86-86 86-86-86z" fill="#f5a623" opacity="0.95"/>
        <path d="M563 190l0 112" stroke="#111827" stroke-width="12" stroke-linecap="round"/>
        <path d="M505 236h116" stroke="#111827" stroke-width="12" stroke-linecap="round"/>
        <path d="M118 470h564" stroke="#f5a623" stroke-width="16" stroke-linecap="round"/>
        <path d="M170 470v-56" stroke="#f8fafc" stroke-width="12" stroke-linecap="round"/>
        <path d="M630 470v-72" stroke="#f8fafc" stroke-width="12" stroke-linecap="round"/>
      </svg>
    `),
  },
];

const projectIllustrations = visualShowcase.map((visual, index) => ({
  ...visual,
  category: index === 0 ? 'Building' : index === 1 ? 'Engineering' : 'Design & Build',
}));

function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [pendingQuoteScroll, setPendingQuoteScroll] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', projectType: 'General Inquiry', message: '' });

  const filteredProjects = useMemo(() => {
    const lowerQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesFilter = filter === 'All' || project.category === filter;
      const matchesQuery =
        !lowerQuery ||
        [project.name, project.location, project.scope, project.category]
          .join(' ')
          .toLowerCase()
          .includes(lowerQuery);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  const navTo = (target) => {
    setPage(target);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToQuote = () => {
    setPage('home');
    setMenuOpen(false);
    setPendingQuoteScroll(true);
  };

  useEffect(() => {
    if (!pendingQuoteScroll || page !== 'home') {
      return;
    }

    const contactSection = document.getElementById('contact');
    if (!contactSection) {
      return;
    }

    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setPendingQuoteScroll(false);
  }, [page, pendingQuoteScroll]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);
    setSubmitError('');

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then(async (response) => {
        const payload = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(payload.error || 'Unable to submit inquiry right now.');
        }

        setSubmitted(true);
        setForm({ name: '', email: '', projectType: 'General Inquiry', message: '' });
      })
      .catch((error) => {
        setSubmitError(error.message || 'Unable to submit inquiry right now.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navTo('home')}
            className="group flex items-center gap-3 text-left"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-amber-500 shadow-corporate">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">Industrial Corporate</p>
              <h1 className="text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
                LR BUILDERS CORPORATION
              </h1>
            </div>
          </button>

          <div className="ml-auto flex items-center gap-2">
            <nav className="hidden items-center gap-1 lg:flex">
              {pages.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navTo(item.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
                    page === item.id
                      ? 'bg-slate-900 text-white shadow-corporate'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              type="button"
              onClick={scrollToQuote}
              className="hidden rounded-full bg-amber-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/30 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-400 sm:inline-flex"
            >
              Get a Quote
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition hover:border-amber-500 hover:text-amber-500 lg:hidden"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          className={`border-t border-slate-200 bg-white px-4 pb-4 pt-3 shadow-sm transition-all duration-300 lg:hidden ${
            menuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 overflow-hidden opacity-0'
          }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:px-2">
            {pages.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => navTo(item.id)}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition duration-300 ${
                  page === item.id ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={scrollToQuote}
              className="mt-2 rounded-2xl bg-amber-500 px-4 py-3 text-left text-sm font-bold text-slate-950"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className={`transition duration-500 ${page ? 'opacity-100' : 'opacity-0'}`}>
          {page === 'home' && (
            <section className="space-y-8">
              <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 px-6 py-16 text-white shadow-corporate sm:px-10 lg:px-14 lg:py-24">
                <div className="absolute inset-0 bg-industrial-grid bg-[size:3rem_3rem] opacity-20" />
                <div className="absolute -right-20 top-8 h-56 w-56 rounded-full bg-amber-500/20 blur-3xl" />
                <div className="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-slate-700/40 blur-3xl" />
                <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                  <div className="max-w-3xl">
                    <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
                      <Sparkles className="h-4 w-4" />
                      Sustainable Infrastructure Nationwide
                    </p>
                    <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                      LR BUILDERS CORPORATION: Shaping Sustainable and Durable Infrastructure Nationwide.
                    </h2>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                      We deliver disciplined construction, engineering, and design-build solutions with a corporate standard of quality, safety, and reliability.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <button
                        type="button"
                        onClick={() => navTo('projects')}
                        className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-amber-400"
                      >
                        View Projects <ArrowRight className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => navTo('services')}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                      >
                        Our Services
                      </button>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                    {visualShowcase.map((visual) => (
                      <figure key={visual.title} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-corporate">
                        <img
                          src={visual.src}
                          alt={visual.alt}
                          className="h-36 w-full object-cover sm:h-40 lg:h-32"
                        />
                        <figcaption className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-slate-200">
                          <span>{visual.title}</span>
                          <span className="rounded-full bg-white/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.22em] text-amber-400">
                            Photo
                          </span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>

              <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {trustStats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-corporate">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{stat.label}</p>
                    <p className="mt-3 text-lg font-extrabold text-slate-900">{stat.value}</p>
                  </div>
                ))}
              </section>

              <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                    <Award className="h-4 w-4" />
                    About Preview
                  </div>
                  <h3 className="text-3xl font-black tracking-tight text-slate-900">A trusted construction partner built for public and private sector work.</h3>
                  <p className="mt-4 leading-8 text-slate-600">
                    A duly registered domestic corporation engaged in general construction, design-and-build services, and infrastructure development in the Philippines. Licensed and accredited by the Philippine Contractors Accreditation Board (PCAB).
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {[
                      'Quality-driven execution',
                      'Safety-first site discipline',
                      'Responsive project management',
                      'Durable infrastructure outcomes',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-700">
                        <CheckCircle2 className="h-5 w-5 text-amber-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-corporate">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-amber-400">
                    <Layers3 className="h-4 w-4" />
                    Featured Services
                  </div>
                  <div className="space-y-4">
                    {featuredServices.map((service) => {
                      const Icon = service.icon;
                      return (
                        <div key={service.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                          <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-slate-950">
                              <Icon className="h-6 w-6" />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold">{service.title}</h4>
                              <p className="mt-2 leading-7 text-slate-300">{service.text}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              <section id="contact" className="space-y-8 pt-4">
                <div className="rounded-[2rem] bg-slate-900 px-6 py-12 text-white shadow-corporate sm:px-10">
                  <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
                    <Mail className="h-4 w-4" />
                    Contact
                  </p>
                  <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">Request project support, quotations, or corporate consultation.</h2>
                </div>

                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="space-y-4">
                    {contactCards.map((card) => {
                      const Icon = card.icon;
                      return (
                        <article key={card.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                          <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-amber-500">
                              <Icon className="h-6 w-6" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                              <div className="mt-1 space-y-1 text-sm leading-6 text-slate-600">
                                {card.lines.map((line) => (
                                  <p key={line}>{line}</p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </article>
                      );
                    })}

                    <article className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                      <div className="flex items-center gap-3">
                        <Clock3 className="h-5 w-5 text-amber-600" />
                        <h3 className="text-lg font-bold text-slate-900">Operating Hours</h3>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-600">Monday to Saturday: 8:00 AM to 5:00 PM</p>
                      <p className="text-sm leading-7 text-slate-600">Sunday: By appointment</p>
                    </article>
                  </div>

                  <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-6 flex items-center gap-3">
                      <SquarePen className="h-5 w-5 text-amber-600" />
                      <h3 className="text-2xl font-black text-slate-900">Send a Message</h3>
                    </div>
                    <form className="grid gap-4" onSubmit={handleSubmit}>
                      <div className="grid gap-4 md:grid-cols-2">
                        <label className="grid gap-2 text-sm font-semibold text-slate-700">
                          <span className="inline-flex items-center gap-1">
                            Name <span className="text-rose-500">*</span>
                          </span>
                          <input
                            value={form.name}
                            onChange={(event) => setForm({ ...form, name: event.target.value })}
                            required
                            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-500 focus:bg-white"
                            placeholder="Your full name"
                          />
                        </label>
                        <label className="grid gap-2 text-sm font-semibold text-slate-700">
                          <span className="inline-flex items-center gap-1">
                            Email <span className="text-rose-500">*</span>
                          </span>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(event) => setForm({ ...form, email: event.target.value })}
                            required
                            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-500 focus:bg-white"
                            placeholder="you@example.com"
                          />
                        </label>
                      </div>

                      <label className="grid gap-2 text-sm font-semibold text-slate-700">
                        <span className="inline-flex items-center gap-1">
                          Project Type <span className="text-rose-500">*</span>
                        </span>
                        <select
                          value={form.projectType}
                          onChange={(event) => setForm({ ...form, projectType: event.target.value })}
                          required
                          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-500 focus:bg-white"
                        >
                          <option>General Inquiry</option>
                          <option>General Building</option>
                          <option>General Engineering</option>
                          <option>Design & Build</option>
                          <option>Project Consultation</option>
                        </select>
                      </label>

                      <label className="grid gap-2 text-sm font-semibold text-slate-700">
                        <span className="inline-flex items-center gap-1">
                          Message <span className="text-rose-500">*</span>
                        </span>
                        <textarea
                          value={form.message}
                          onChange={(event) => setForm({ ...form, message: event.target.value })}
                          required
                          rows="6"
                          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-500 focus:bg-white"
                          placeholder="Tell us about your project needs, site location, and target timeline."
                        />
                      </label>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'} <ArrowRight className="h-4 w-4" />
                      </button>
                    </form>

                    {submitted && (
                      <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                        Your inquiry has been sent to LR Builders Corporation and a copy was sent to your email.
                      </div>
                    )}

                    {submitError && (
                      <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">
                        {submitError}
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </section>
          )}

          {page === 'about' && (
            <section className="space-y-8">
              <div className="rounded-[2rem] bg-slate-900 px-6 py-12 text-white shadow-corporate sm:px-10">
                <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
                  <Users className="h-4 w-4" />
                  About & Structure
                </p>
                <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">Corporate structure with clear accountability and disciplined delivery.</h2>
                <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                  LR Builders Corporation combines registered corporate governance with a focused construction organization designed to execute complex infrastructure responsibly.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                  <h3 className="text-2xl font-black text-slate-900">Company Intro</h3>
                  <p className="mt-4 leading-8 text-slate-600">
                    A duly registered domestic corporation engaged in general construction, design-and-build services, and infrastructure development in the Philippines. Licensed and accredited by the Philippine Contractors Accreditation Board (PCAB).
                  </p>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                  <h3 className="text-2xl font-black text-slate-900">Vision</h3>
                  <p className="mt-4 leading-8 text-slate-600">
                    To become a leading and highly respected construction firm in the Philippines, recognized for its commitment to quality, reliability, and innovation. It aims to contribute significantly to national development by delivering sustainable and durable infrastructure that enhances communities and improves quality of life.
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                    <Handshake className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Mission Pillars</h3>
                    <p className="text-sm text-slate-500">The operating principles behind every project engagement.</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {missionPillars.map((pillar, index) => (
                    <div key={pillar} className="flex gap-4 rounded-3xl bg-slate-50 p-5 transition duration-300 hover:-translate-y-1">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-sm font-black text-amber-500">
                        {index + 1}
                      </div>
                      <p className="leading-7 text-slate-700">{pillar}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-amber-500">
                    <LayoutGrid className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Organizational Tree</h3>
                    <p className="text-sm text-slate-500">Interactive profile grid for leadership and operational roles.</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {organizationTree.map((person) => (
                    <article key={`${person.role}-${person.name}`} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-corporate">
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-500">{person.role}</p>
                      <p className="mt-3 text-lg font-extrabold text-slate-900">{person.name}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          {page === 'services' && (
            <section className="space-y-8">
              <div className="rounded-[2rem] bg-slate-900 px-6 py-12 text-white shadow-corporate sm:px-10">
                <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
                  <Construction className="h-4 w-4" />
                  Services
                </p>
                <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">Construction services built for scale, compliance, and durability.</h2>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <article key={service.title} className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-corporate">
                      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-50 text-amber-600 transition duration-300 group-hover:bg-amber-500 group-hover:text-slate-950">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="mt-5 text-2xl font-black text-slate-900">{service.title}</h3>
                      <p className="mt-3 leading-7 text-slate-600">{service.summary}</p>
                      <ul className="mt-5 space-y-3">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {page === 'projects' && (
            <section className="space-y-8">
              <div className="rounded-[2rem] bg-slate-900 px-6 py-12 text-white shadow-corporate sm:px-10">
                <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
                  <Star className="h-4 w-4" />
                  Projects Portfolio
                </p>
                <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">Completed works presented with search and category filtering.</h2>
              </div>

              <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[1.2fr_0.8fr]">
                <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <Search className="h-5 w-5 text-slate-400" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search projects, locations, or scope"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </label>
                <div className="flex flex-wrap items-center gap-2">
                  <Filter className="h-5 w-5 text-slate-500" />
                  {projectTypes.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFilter(option)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
                        filter === option
                          ? 'bg-slate-900 text-white shadow-corporate'
                          : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-slate-900'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {filteredProjects.map((project, index) => (
                  <article key={project.name} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-corporate">
                    <img
                      src={projectIllustrations[index % projectIllustrations.length].src}
                      alt={projectIllustrations[index % projectIllustrations.length].alt}
                      className="h-44 w-full object-cover"
                    />
                    <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-500">{project.category}</p>
                        <h3 className="mt-3 text-2xl font-black text-slate-900">{project.name}</h3>
                      </div>
                      <div className="rounded-2xl bg-slate-900 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
                        {project.duration}
                      </div>
                    </div>
                    <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                      <p>
                        <span className="font-semibold text-slate-900">Location:</span> {project.location}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">Scope:</span> {project.scope}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">Cost:</span> {formatPeso(project.cost)}
                      </p>
                    </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {page === 'credentials' && (
            <section className="space-y-8">
              <div className="rounded-[2rem] bg-slate-900 px-6 py-12 text-white shadow-corporate sm:px-10">
                <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
                  <ShieldCheck className="h-4 w-4" />
                  Credentials & Compliance
                </p>
                <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">Verified legal credentials and membership records.</h2>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {credentials.map((item) => (
                  <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-corporate">
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full bg-amber-50 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-amber-600">{item.badge}</span>
                      <Award className="h-6 w-6 text-slate-300" />
                    </div>
                    <h3 className="mt-6 text-2xl font-black text-slate-900">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.detail}</p>
                    <p className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-amber-500" />
                      {item.note}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>

      <footer className="border-t border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500 text-slate-950">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-black">LR Builders Corporation</h2>
                <p className="text-sm text-slate-400">Industrial Corporate Construction Partner</p>
              </div>
            </div>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Shaping sustainable and durable infrastructure nationwide through disciplined construction, engineering, and design-build delivery.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">Office Details</h3>
            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300">
              <p>Main Office: 2707 UPA Building, 27 Barleta St. Brgy IV-B, San Pablo City, Laguna</p>
              <p>Extension Office: Brgy. San Gabriel, Teomora Village Ph 4, San Pablo City, Laguna</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">Quick Links</h3>
            <div className="mt-4 grid gap-2 text-sm font-medium text-slate-300">
              {pages.map((item) => (
                <button key={item.id} type="button" onClick={() => navTo(item.id)} className="text-left transition hover:text-amber-400">
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-4 py-4 text-center text-sm text-slate-400">
          Email: lrbuilderscorporation@gmail.com | Contact: 049-544 1533 | 0995 981 9133
        </div>
      </footer>
    </div>
  );
}

export default App;
