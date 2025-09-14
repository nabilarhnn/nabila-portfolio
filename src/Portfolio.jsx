// src/Portfolio.jsx
import { useRef } from "react";
import { Mail, Github, Linkedin, Brain, Code, Database, BarChart3, Activity,
  Cloud, Layout, PenLine, Users, CalendarCheck, GraduationCap, FileText } from "lucide-react";


export default function Portfolio() {
  const carouselRef = useRef(null);

  const projects = [
    {
      title: "Cuacane, Weather and Dispersion App",
      desc:
        "Desktop application integrating Vaisala WXT520 sensor with real-time dashboard, multi-horizon wind forecasting (MLP), and Gaussian Plume dispersion simulation. Developed in collaboration with BRIN for nuclear safety research.",
      img: "/CuacaneLogo.png",
      tags: ["Python", "PyQt5/QML", "Machine Learning", "Simulation"],
      link: "https://github.com/hilmihaidarrr/cuacane_app_prototype", 
    },
    {
      title: "Vaisala Converter App",
      desc:
        "Utility app to convert raw Vaisala WXT520 sensor data (TXT) into structured CSV formats for analytics pipelines and PC-COSYMA compatibility.",
      img: "/Converterapp.jpg",
      tags: ["Python", "Pandas", "Data Processing"],
      link: "https://github.com/hilmihaidarrr/Vaisala-Converter-App", 
    },
    {
      title: "StuDocu Uploads",
      desc:
        "Created and published structured Computer Engineering lecture notes on StuDocu, helping peers worldwide prepare for exams and assignments. Recognized in StuDocu’s Paid Uploads program for high-quality contributions.",
      img: "/studocu.png",
      tags: ["Academic Writing", "Knowledge Sharing", "Content Creation"],
      link: "https://www.studocu.com/id/user/nabila-rihan/14426479", 
    },
  ];

    const skillGroups = [
    {
      title: "Data Science & ML",
      icon: <Brain className="w-4 h-4" />,
      items: [
        "Machine Learning",
        "Deep Learning",
        "Data Science",
        "Statistical Modeling",
        "Scikit-Learn",
        "Time Series Forecasting",
      ],
    },
    {
      title: "Programming & Core Tools",
      icon: <Code className="w-4 h-4" />,
      items: [
        "Python (Programming Language)",
        "SQL",
        "PyQt5",
      ],
    },
    {
      title: "Data Handling & Engineering",
      icon: <Database className="w-4 h-4" />,
      items: [
        "Real-Time Data Processing",
        "Data Cleaning",
        "Preprocessing",
        "Large Datasets",
      ],
    },
    {
      title: "Visualization & BI",
      icon: <BarChart3 className="w-4 h-4" />,
      items: [
        "Data Visualization",
        "Tableau",
        "Matplotlib",
        "Seaborn",
      ],
    },
    {
      title: "Domain & Applied Analytics",
      icon: <Cloud className="w-4 h-4" />,
      items: [
        "Meteorological Data Analysis",
      ],
    },
    {
      title: "UI/UX & Product",
      icon: <Layout className="w-4 h-4" />,
      items: [
        "UI/UX Design",
        "Digital Content Creation",
        "Summarization",
        "Knowledge Sharing",
      ],
    },
    {
      title: "Communication & Writing",
      icon: <PenLine className="w-4 h-4" />,
      items: [
        "Academic Writing",
        "Report Writing",
        "Organizational Communication",
        "Internal Communications",
      ],
    },
    {
      title: "Leadership & Collaboration",
      icon: <Users className="w-4 h-4" />,
      items: [
        "Team Collaboration",
        "Team Coordination",
        "Problem Solving",
        "Conflict Resolution",
        "Organization Skills",
      ],
    },
    {
      title: "Events & Project Ops",
      icon: <CalendarCheck className="w-4 h-4" />,
      items: [
        "Project Management",
        "Event Management",
        "Event Planning",
        "Time Management",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor Computer Engineering",
      school: "Telkom University, Bandung",
      period: "Sep 2021 – Aug 2025",
      summary:
        "Completed full academic curriculum while actively engaging in organizations; grew leadership, teamwork, and problem-solving.",
      highlights: [
        "Member — Internal Relations, HMTK: strengthened internal communication & cohesion.",
        "Coordinated internal events and cross-division collaboration to enhance organizational synergy.",
      ],
    },
  ];

  // ====== SCROLL LOGIC ======
  const scroll = (dir) => {
    const el = carouselRef.current;
    if (!el) return;
    const width = el.getBoundingClientRect().width;
    el.scrollBy({ left: dir * (width * 0.85), behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white text-[#333333] selection:bg-[#A8E6CF]/40 selection:text-[#333333]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-[#333333]">Hello!</h1>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-[#333333]/80">
            <a href="#about" className="hover:text-[#A8E6CF]">About</a>
            <a href="#portfolio" className="hover:text-[#A8E6CF]">Projects</a>
            <a href="#experience" className="hover:text-[#A8E6CF]">Experience</a>
            <a href="#education" className="hover:text-[#A8E6CF]">Education</a>
            <a href="#skills" className="hover:text-[#A8E6CF]">Skills</a>
            <a href="#contact" className="hover:text-[#A8E6CF]">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-[#A8E6CF] via-[#FFD3B6] to-[#E0BBE4] opacity-80"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-6">
              {/* Badge */}
              <span className="inline-block rounded-full bg-white/80 px-5 py-2 text-sm font-semibold text-[#333333] shadow-md backdrop-blur-sm">
                🌸 Open to Work
              </span>

              {/* Nama & Title */}
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Nabila Putri Rihan  
                <br />
                <span className="text-[#9C27B0]">Data Enthusiast & ML Developer</span>
              </h2>

              {/* Lokasi */}
              <p className="flex items-center gap-2 text-[#333333]/70 font-medium">
                <span>📍</span> East Jakarta, Indonesia
              </p>

              {/* Motto singkat */}
              <p className="text-lg text-black/70 leading-relaxed max-w-xl italic">
                "Turning raw data into meaningful insights to drive innovation 
                and empower smarter decisions."
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-3">
                <a
                  href="#about"
                  className="rounded-xl bg-[#E0BBE4] px-6 py-3 font-semibold shadow-md transition hover:translate-y-[-1px]"
                >
                  View Portfolio
                </a>
                <a
                  href="/ats.pdf"
                  className="rounded-xl border border-[#9C27B0] bg-white px-6 py-3 font-semibold shadow-md transition hover:bg-[#9C27B0]/20"
                >
                  Download CV
                </a>
              </div>
            </div>
            {/* Ilustrasi (Foto Profil Bulat Besar) */}
            <div className="relative flex items-center justify-center">
              {/* Blob pastel dekorasi */}
              <div aria-hidden className="absolute -top-20 -left-16 h-56 w-56 rounded-full bg-[#B3E5FC]/70 blur-3xl" />
              <div aria-hidden className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-[#FFD3B6]/70 blur-2xl" />

              {/* Foto Profil */}
              <img
                src="/nabila.jpg" 
                alt="Nabila Portrait"
                className="relative z-10 w-72 h-72 rounded-full object-cover shadow-xl border-8 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative overflow-hidden py-20">
        {/* Background full section */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-[#A8E6CF]/40 via-[#B3E5FC]/30 to-[#E0BBE4]/40"
        />
        {/* Blob pastel dekorasi */}
        <div aria-hidden className="absolute top-10 left-[-60px] h-64 w-64 rounded-full bg-[#FFD3B6]/50 blur-3xl" />
        <div aria-hidden className="absolute bottom-[-80px] right-[-80px] h-72 w-72 rounded-full bg-[#A8E6CF]/40 blur-3xl" />

        {/* Content */}
        <div className="relative mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-black/80 leading-relaxed bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-md">
            <p>
              I am <b>Nabila Putri Rihan</b>, a fresh graduate in Computer Engineering 
              from Telkom University, East Jakarta. My academic journey has shaped me 
              into a data enthusiast who enjoys exploring patterns, solving problems, 
              and turning complex datasets into meaningful insights. 
            </p>
            <p>
              I specialize in <b>data analysis, machine learning, and statistical modeling</b>, 
              with hands-on experience using Python, SQL, Pandas, Scikit-learn, and 
              TensorFlow. I also enjoy creating clear data visualizations with tools like 
              <b> Tableau</b> to communicate findings effectively. 
            </p>
            <p>
              Beyond technical expertise, I value <b>teamwork, adaptability, and curiosity</b>. 
              I am motivated to keep learning and aim to contribute to impactful projects 
              in <b>data science and analytics</b>, especially in areas that drive innovation 
              and provide real benefits for society.
            </p>
          </div>
          {/* Social Links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:rihannabila89@gmail.com"
              className="flex items-center gap-2 rounded-lg border bg-white/70 backdrop-blur-sm px-4 py-2 font-medium shadow-sm transition hover:bg-[#A8E6CF]/30"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href="https://github.com/nabilarhnn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border bg-white/70 backdrop-blur-sm px-4 py-2 font-medium shadow-sm transition hover:bg-[#A8E6CF]/30"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nabilarhnn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border bg-white/70 backdrop-blur-sm px-4 py-2 font-medium shadow-sm transition hover:bg-[#A8E6CF]/30"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="/ats.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border bg-white/70 backdrop-blur-sm px-4 py-2 font-medium shadow-sm transition hover:bg-[#A8E6CF]/30"
            >
              <FileText className="w-4 h-4" />
              CV
            </a>
          </div>
        </div>
      </section>

     {/* PORTFOLIO / PROJECTS */}
      <section id="portfolio" className="relative overflow-hidden py-20" aria-label="Projects">
        {/* Full pastel background + blobs */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-[#A8E6CF]/40 via-[#B3E5FC]/30 to-[#E0BBE4]/40"
        />
        <div aria-hidden className="absolute top-8 left-[-70px] h-64 w-64 rounded-full bg-[#FFD3B6]/50 blur-3xl" />
        <div aria-hidden className="absolute bottom-[-90px] right-[-90px] h-72 w-72 rounded-full bg-[#A8E6CF]/40 blur-3xl" />

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">Projects</h2>
            <p className="mt-2 text-black/60">
              Practical experiences in data-driven solutions, simulation systems, and digital knowledge platforms.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <article
                key={i}
                className="group rounded-2xl border bg-white/70 backdrop-blur-md shadow-md hover:shadow-xl transition overflow-hidden"
              >
                {/* Cover */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.title} cover`}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* subtle gradient overlay for readability */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-black/75">{p.desc}</p>

                  {/* Tags */}
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tags?.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-[#B3E5FC]/50 px-3 py-1 text-[11px] font-semibold"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-5 flex items-center gap-3">
                    {/* Primary: View Project (enabled if link not '#') */}
                    {p.link && p.link !== "#" ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#E0BBE4] px-4 py-2 text-sm font-semibold shadow-sm transition hover:translate-y-[-1px]"
                      >
                        View Project →
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-black/50 shadow-sm cursor-not-allowed">
                        View Project (coming soon)
                      </span>
                    )}

                    {/* Optional secondary button: Case Study (only if provided) */}
                    {p.caseUrl && (
                      <a
                        href={p.caseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-[#9C27B0] bg-white/80 px-4 py-2 text-sm font-semibold shadow-sm transition hover:bg-[#9C27B0]/10"
                      >
                        Case Study
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Note for StuDocu specific CTA row (optional) */}
          <div className="mt-10 text-center">
            {/* kalau kamu punya link profil/publication StuDocu, taruh di sini */}
            <a
              href="https://www.studocu.com/xx/your-studocu-profile" // ganti dengan URL profil/daftar publikasi Nabila
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#3F51B5] bg-white/80 px-6 py-3 text-sm font-semibold shadow-sm transition hover:bg-[#3F51B5]/10"
            >
              Browse StuDocu Publications
            </a>
          </div>
        </div>
      </section>


      {/* EXPERIENCE */}
      <section id="experience" className="relative overflow-hidden py-20">
        {/* Background full pastel */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-[#E0BBE4]/40 via-[#B3E5FC]/30 to-[#A8E6CF]/40"
        />
        <div aria-hidden className="absolute top-10 left-[-80px] h-72 w-72 rounded-full bg-[#FFD3B6]/50 blur-3xl" />
        <div aria-hidden className="absolute bottom-[-100px] right-[-100px] h-80 w-80 rounded-full bg-[#A8E6CF]/40 blur-3xl" />

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

          {/* Work Experience */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-white/70 backdrop-blur-md border-l-4 border-[#9C27B0] shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">Collaboration Capstone Design</h3>
              <p className="text-sm text-black/60">BRIN • Bandung • Sep 2024 – Jun 2025</p>
              <p className="mt-3 text-black/80">
                Developed a <b>desktop-based application</b> integrating real-time weather
                data for nuclear leak detection. Contributed to <b>UI design, ML
                integration,</b> and coordination with BRIN researchers.
              </p>
            </div>

            <div className="rounded-2xl bg-white/70 backdrop-blur-md border-l-4 border-[#3F51B5] shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">Data Science Intern</h3>
              <p className="text-sm text-black/60">BRIN • Bandung • Jun 2024 – Sep 2024</p>
              <p className="mt-3 text-black/80">
                Built <b>predictive models</b> for environmental and nuclear safety data.
                Focused on <b>anomaly detection</b> and efficient <b>data pipelines</b> for
                large datasets.
              </p>
            </div>

            <div className="rounded-2xl bg-white/70 backdrop-blur-md border-l-4 border-[#FF8A65] shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">Freelance Content Contributor</h3>
              <p className="text-sm text-black/60">StuDocu • Remote • Jun 2021 – Jun 2022</p>
              <p className="mt-3 text-black/80">
                Created and uploaded <b>structured lecture notes</b> in Computer Engineering.
                Strengthened <b>academic writing</b>, <b>summarization</b>, and <b>digital content
                creation</b>.
              </p>
            </div>
          </div>

          {/* Organisational Experience */}
          <h2 className="text-3xl font-bold text-center mt-20 mb-12">Organisational Experience</h2>

          <div className="space-y-8">
            <div className="rounded-2xl bg-white/70 backdrop-blur-md border-l-4 border-[#4CAF50] shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">Rules & Discipline Committee</h3>
              <p className="text-sm text-black/60">Overclock • Telkom University • Oct 2023 – Oct 2025</p>
              <p className="mt-3 text-black/80">
                Ensured <b>discipline and fairness</b> in orientation events. Worked with
                10+ members to enforce policies and maintain program integrity.
              </p>
              {/* Button Certificate */}
                <div className="mt-4">
                  <a
                    href="ocbeel.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#A8E6CF]/70 px-4 py-2 font-medium text-black shadow-sm transition hover:bg-[#A8E6CF]/90"
                  >
                    View Certificate
                  </a>
                </div>
            </div>

            <div className="rounded-2xl bg-white/70 backdrop-blur-md border-l-4 border-[#2196F3] shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">Secretary – Relasi Internal</h3>
              <p className="text-sm text-black/60">HMTK • Telkom University • Oct 2023 – Oct 2024</p>
              <p className="mt-3 text-black/80">
                Managed <b>documentation and internal communication</b>. Coordinated 5
                projects, ensuring <b>smooth execution</b> and organizational transparency.
              </p>
              {/* Button Certificate */}
                <div className="mt-4">
                  <a
                    href="beraksibeel.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#A8E6CF]/70 px-4 py-2 font-medium text-black shadow-sm transition hover:bg-[#A8E6CF]/90"
                  >
                    View Certificate
                  </a>
                </div>
            </div>

            <div className="rounded-2xl bg-white/70 backdrop-blur-md border-l-4 border-[#E91E63] shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">Secretary – CENTURION</h3>
              <p className="text-sm text-black/60">HMTK • Telkom University • Oct 2023 – May 2024</p>
              <p className="mt-3 text-black/80">
                Prepared <b>event proposals & accountability reports</b> for HMTK’s annual
                celebration. Ensured compliance with university regulations.
              </p>
              {/* Certificate Not Issued */}
              <div className="mt-4">
                <span
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 font-medium text-black/50 shadow-sm cursor-not-allowed"
                >
                  🚫 Certificate Not Issued
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white/70 backdrop-blur-md border-l-4 border-[#FFB300] shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">Decoration Committee</h3>
              <p className="text-sm text-black/60">PKKMB • Telkom University • Aug 2023</p>
              <p className="mt-3 text-black/80">
                Designed and executed <b>event decorations</b> to create a welcoming
                atmosphere. Collaborated with 4 members to align with the program theme.
              </p>
              {/* Certificate Not Issued */}
              <div className="mt-4">
                <span
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 font-medium text-black/50 shadow-sm cursor-not-allowed"
                >
                  🚫 Certificate Not Issued
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="relative overflow-hidden py-20">
        {/* Background full pastel (selaras dengan section lain) */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-[#A8E6CF]/40 via-[#B3E5FC]/30 to-[#E0BBE4]/40"
        />
        <div aria-hidden className="absolute top-10 left-[-70px] h-64 w-64 rounded-full bg-[#FFD3B6]/50 blur-3xl" />
        <div aria-hidden className="absolute bottom-[-90px] right-[-90px] h-72 w-72 rounded-full bg-[#A8E6CF]/40 blur-3xl" />

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

          <div className="grid gap-6 md:grid-cols-1">
            {education.map((edu, i) => (
              <article
                key={i}
                className="rounded-2xl bg-white/70 backdrop-blur-md border shadow-lg hover:shadow-xl transition p-6"
              >
                <header className="flex items-start gap-3">
                  <div className="inline-flex items-center justify-center rounded-full bg-[#E0BBE4]/70 w-10 h-10">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-sm text-black/60">
                      {edu.school} • {edu.period}
                    </p>
                  </div>
                </header>

                <p className="mt-4 text-black/80">{edu.summary}</p>

                {edu.highlights?.length > 0 && (
                  <ul className="mt-3 list-disc pl-6 text-black/80 space-y-1">
                    {edu.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                )}
                {/* Button Certificate */}
                <div className="mt-4">
                  <a
                    href="sklbeel.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#A8E6CF]/70 px-4 py-2 font-medium text-black shadow-sm transition hover:bg-[#A8E6CF]/90"
                  >
                    🎓 View Certificate
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="relative overflow-hidden py-20"
      >
        {/* Background full section */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-[#A8E6CF]/40 via-[#B3E5FC]/30 to-[#E0BBE4]/40"
        />
        {/* Optional pastel blobs */}
        <div aria-hidden className="absolute top-10 left-[-60px] h-64 w-64 rounded-full bg-[#FFD3B6]/50 blur-3xl" />
        <div aria-hidden className="absolute bottom-[-80px] right-[-80px] h-72 w-72 rounded-full bg-[#A8E6CF]/40 blur-3xl" />

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">Skills</h2>
            <span className="text-sm text-black/60">curated from LinkedIn</span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg transition p-5"
              >
                <header className="flex items-center gap-2 mb-3">
                  <div className="inline-flex items-center justify-center rounded-full bg-[#A8E6CF]/60 w-8 h-8">
                    {group.icon}
                  </div>
                  <h3 className="font-semibold">{group.title}</h3>
                </header>

                <ul className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full bg-[#B3E5FC]/40 px-3 py-1 text-xs font-semibold"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden py-20">
        {/* Background pastel full */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-[#B3E5FC]/40 via-[#FFD3B6]/30 to-[#E0BBE4]/40"
        />
        <div aria-hidden className="absolute top-10 left-[-60px] h-64 w-64 rounded-full bg-[#A8E6CF]/50 blur-3xl" />
        <div aria-hidden className="absolute bottom-[-80px] right-[-80px] h-72 w-72 rounded-full bg-[#FFD3B6]/40 blur-3xl" />

        {/* Content */}
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-black/70 max-w-2xl mx-auto">
            Interested in collaborating or learning more about my work? 
            Let’s connect and create meaningful solutions together.
          </p>

          
          {/* Direct Contact Info */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 text-black/80">
            <a
              href="mailto:rihannabila89@gmail.com"
              className="flex items-center gap-2 hover:text-[#9C27B0] transition"
            >
              <Mail className="w-5 h-5" /> rihannabila89@gmail.com
            </a>
            <a
              href="https://github.com/nabilarhnn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#9C27B0] transition"
            >
              <Github className="w-5 h-5" /> github.com/nabilarhnn
            </a>
            <a
              href="https://linkedin.com/in/nabilarhnn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#9C27B0] transition"
            >
              <Linkedin className="w-5 h-5" /> linkedin.com/in/nabilarhnn
            </a>
          </div>
        </div>
      </section>


      <footer className="py-10 text-center text-sm text-black/60">
        © {new Date().getFullYear()} Nabila — Built with React & Tailwind
      </footer>
    </main>
  );
}

function CardTile({ title, subtitle, className = "" }) {
  return (
    <div
      className={
        "rounded-2xl border border-black/5 p-5 shadow-md transition hover:shadow-lg " +
        className
      }
    >
      <p className="text-sm text-black/60">{subtitle}</p>
      <p className="mt-1 text-xl font-semibold">{title}</p>
    </div>
  );
}
