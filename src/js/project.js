import React from 'react';


export default ( { project } ) => {
  const renderImage = () => {
    if ( project.desktopImage && project.mobileImage ) {
      let desktopImage = `dist/images/screenshots/${ project.desktopImage }`;
      let mobileImage = `dist/images/screenshots/${ project.mobileImage }`;
      return <picture>
			  <source media="(max-width: 767px)" srcSet = { mobileImage } />
			  <source media="(min-width: 768px)" srcSet = { desktopImage } />
			  <img src={ desktopImage } alt={ desktopImage } />
			</picture>
    } else if ( project.desktopImage ) {
      return <img src = { `dist/images/screenshots/${ project.desktopImage }` } alt = { project.title } />
    } else {
      return <img src = { `dist/images/screenshots/${ project.mobileImage }` } alt = { project.title } />
    }
  }


  return (
    <div className="project-holder">
      <a href={ project.url } target = "_blank">{ project.title }</a>
      { renderImage() }
      <p>{ project.description }</p>
    </div>
  )
}
