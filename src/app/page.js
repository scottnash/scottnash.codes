import React from 'react';
import ProjectData from './projectdata';

export default function Home() {
  const renderImage = (project) => {
    if (project.desktopImage && project.mobileImage) {
      let desktopImage = `./images/screenshots/${project.desktopImage}`;
      let mobileImage = `./images/screenshots/${project.mobileImage}`;

      return <a href={project.url} target="_blank" rel="noreferrer"><picture>
        <source media="(max-width: 767px)" srcSet={mobileImage} />
        <source media="(min-width: 768px)" srcSet={desktopImage} />
        <img src={desktopImage} alt={desktopImage} />
      </picture></a>;
    } else if (project.desktopImage) {
      return <a href={project.url} target="_blank" rel="noreferrer"><img className="w-full" src={`./images/screenshots/${project.desktopImage}`} alt={project.title} /></a>;
    } else {
      return <a href={project.url} target="_blank" rel="noreferrer"><img src={`./images/screenshots/${project.mobileImage}`} alt={project.title} /></a>;
    }
  };

  return (
    <main className="flex min-h-screen flex-col justify-between p-0 sm:flex-row">
      <aside className="bg-black text-white px-[25px] py-[15px] w-full sm:h-full sm:w-[200px] sm:fixed sm:h-full sm:top-[0] left-[0]">
        <div className="text-center sm:text-left">
          <h2 className="text-[24px] font-bold">Scott Nash</h2>
          <img
            className="my-[10px] border-[3px] border-white rounded-[50%] block w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] mx-auto sm:mx-0"
            src="./images/scottnash.jpg" />
          <ul className="flex flex-wrap items-center justify-center sm:flex-nowrap sm:items-start sm:justify-start sm:flex-col">
            <li className="py-[5px] px-[5px] sm:px-0"><a className="underline underline-offset-4" href="mailto:scott@scottnash.codes">Email me</a></li>
            <li className="py-[5px] px-[5px] sm:px-0"><a className="underline underline-offset-4" href="https://docs.google.com/document/d/1jaBVyToUZBhWGSwQgo0J1CMghwaFtMgWKVuRj7r5SSo/edit?usp=sharing" target="_blank" rel="noreferrer">My R&eacute;sum&eacute;</a></li>
            <li className="py-[5px] px-[5px] sm:px-0"><a className="underline underline-offset-4" href="https://www.linkedin.com/in/scott-nash-106b40174/" target="_blank" rel="noreferrer">LinkedIn Profile</a></li>
            <li className="py-[5px] px-[5px] sm:px-0"><a className="underline underline-offset-4" href="https://github.com/scottnash" target="_blank" rel="noreferrer">GitHub Account</a></li>
            <li className="py-[5px] px-[5px] sm:px-0"><a className="underline underline-offset-4" href="https://gitlab.com/scottmichaelnash" target="_blank" rel="noreferrer">GitLab Account</a></li>
          </ul>
        </div>
      </aside>
      <div className="flex flex-col sm:ml-[200px]">
        <h1 className="text-[32px] font-bold mt-[25px] mx-[25px]">Project Highlights</h1>
        <p className="mx-[25px] mb-[25px]">The following is a list of just some of the projects I've worked on over the years in roles ranging from front end developer, lead engineer, and lead architect.</p>
        {ProjectData.filter((project) => project.active).map((project, index) => {
          return (
            <div key={index} className="mt-0 mb-[25px] mx-[25px] max-w-[1000px]">
              <a
                className={`${project.url ? 'underline underline-offset-4' : ''}  pb-[15px] text-[24px] font-bold`}
                href={project.url} target="_blank" rel="noreferrer">{project.title}</a>
              {renderImage(project)}
              <p className="my-[10px]">{project.description}</p>
            </div>
          );
        }
        )}
        <h2 className="text-[24px] font-bold mt-[25px] mx-[25px]">Inactive Projects</h2>
        {ProjectData.filter((project) => !project.active).map((project, index) => {
          return (
            <div key={index} className="mt-0 mb-[25px] mx-[25px] max-w-[1000px]">
              <a
                className={`${project.url ? 'underline underline-offset-4' : ''}  pb-[15px] text-[24px] font-bold`}
                href={project.url} target="_blank" rel="noreferrer">{project.title}</a>
              {renderImage(project)}
              <p className="my-[10px]">{project.description}</p>
            </div>
          );
        }
        )}
      </div>
    </main>
  );
}
