'use client';
import React, { useEffect, useRef } from 'react';
import ProjectData from './projectdata';

function AnimatedCard({ children, index }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(32px)',
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const renderImage = (project) => {
    if (!project.desktopImage && !project.mobileImage) return null;

    const desktopSrc = `./images/screenshots/${project.desktopImage}`;
    const mobileSrc = `./images/screenshots/${project.mobileImage}`;

    const imgEl = project.desktopImage && project.mobileImage ? (
      <picture>
        <source media="(max-width: 767px)" srcSet={mobileSrc} />
        <source media="(min-width: 768px)" srcSet={desktopSrc} />
        <img className="w-full transition-transform duration-500 group-hover:scale-[1.02]" src={desktopSrc} alt={project.title} />
      </picture>
    ) : project.desktopImage ? (
      <img className="w-full transition-transform duration-500 group-hover:scale-[1.02]" src={desktopSrc} alt={project.title} />
    ) : (
      <img className="transition-transform duration-500 group-hover:scale-[1.02]" src={mobileSrc} alt={project.title} />
    );

    return (
      <div className="relative group overflow-hidden">
        {imgEl}
        {project.url && (
          <div className="absolute inset-0 bg-slate-900/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 border-2 border-sky-400 text-sky-400 rounded-full font-semibold hover:bg-sky-400 hover:text-slate-900 transition-colors duration-200"
            >
              View Project →
            </a>
          </div>
        )}
      </div>
    );
  };

  return (
    <main className="flex min-h-screen flex-col p-0 sm:flex-row bg-slate-900 text-slate-100">
      <aside className="bg-black px-6 py-6 w-full sm:w-[220px] sm:fixed sm:h-full sm:top-0 sm:left-0 border-r border-slate-800">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-white tracking-tight">Scott Nash</h2>
          <img
            className="my-4 border-[3px] border-sky-400 rounded-full block w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] mx-auto sm:mx-0"
            src="./images/scottnash.jpg"
            alt="Scott Nash"
          />
          <p className="text-slate-400 text-sm mb-3 hidden sm:block">Senior Software Engineer</p>
          <ul className="flex flex-wrap items-center justify-center sm:flex-nowrap sm:items-start sm:justify-start sm:flex-col gap-1">
            <li className="py-1 px-2 sm:px-0"><a className="text-slate-300 hover:text-sky-400 transition-colors duration-200 text-sm" href="mailto:scott@scottnash.codes">Email me</a></li>
            <li className="py-1 px-2 sm:px-0"><a className="text-slate-300 hover:text-sky-400 transition-colors duration-200 text-sm" href="https://docs.google.com/document/d/1jaBVyToUZBhWGSwQgo0J1CMghwaFtMgWKVuRj7r5SSo/edit?usp=sharing" target="_blank" rel="noreferrer">My R&eacute;sum&eacute;</a></li>
            <li className="py-1 px-2 sm:px-0"><a className="text-slate-300 hover:text-sky-400 transition-colors duration-200 text-sm" href="https://www.linkedin.com/in/scott-nash-106b40174/" target="_blank" rel="noreferrer">LinkedIn Profile</a></li>
            <li className="py-1 px-2 sm:px-0"><a className="text-slate-300 hover:text-sky-400 transition-colors duration-200 text-sm" href="https://github.com/scottnash" target="_blank" rel="noreferrer">GitHub Account</a></li>
            <li className="py-1 px-2 sm:px-0"><a className="text-slate-300 hover:text-sky-400 transition-colors duration-200 text-sm" href="https://gitlab.com/scottmichaelnash" target="_blank" rel="noreferrer">GitLab Account</a></li>
          </ul>
        </div>
      </aside>

      <div className="flex flex-col sm:ml-[220px] px-6 sm:px-10 py-8">
        <h1 className="text-4xl font-bold mb-2">Hello! 👋</h1>
        <div className="w-16 h-1 bg-sky-400 mb-6 rounded-full"></div>
        <p className="text-slate-300 leading-relaxed mb-4 max-w-[800px]">I have many years experience as a senior Front-End Engineer, experienced with React, React Native, and many other frameworks, packages, as well as just working in vanilla JavaScript. I have worked on high profile projects as part of a large team, as well as smaller projects entirely on my own. Although my expertise lies most strongly on front-end development, I have experience on all aspects of web and mobile development, including design, UI/UX, analytics, SEO, working with APIs of a wide variety of flavors, databases, the construction of custom Content Management Systems, and just about every other aspect of taking a website or a mobile app from conception to production. I enjoy working both independently as well as part of a larger team where there is an opportunity to share knowledge and learn from others through code reviews and collaboration. I have never been on a team or a job where someone regretted my being there.</p>
        <p className="text-slate-300 leading-relaxed mb-8 max-w-[800px]">Below is just a partial list of the many projects I have worked on over my career.</p>

        {ProjectData.map((project, index) => (
          <AnimatedCard key={index} index={index}>
            <div className="mb-6 max-w-[1000px] bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-sky-400/40 transition-colors duration-300">
              <div className="px-6 pt-5 pb-3">
                <a
                  className={`text-xl font-bold text-sky-400 hover:text-sky-300 transition-colors duration-200 ${!project.url ? 'cursor-default pointer-events-none' : ''}`}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.title}
                </a>
              </div>
              {renderImage(project)}
              <div className="px-6 py-5">
                <p className="text-slate-300 leading-relaxed">{project.description}</p>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </main>
  );
}
