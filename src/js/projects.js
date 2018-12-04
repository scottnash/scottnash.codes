import React, { Component } from 'react';
import Project from './project';
import ProjectData from './projectdata';

export default class Projects extends Component {
  constructor(props) {
    super(props);


  }

  render(){
    return(
      <div>
        { this.renderProjects() }
      </div>
    )
  }

  renderProjects = () => {
    return ProjectData.map( ( project, index ) => {
      return  <Project
          key = { index }
          project = { project }
        />
    });
  }
}
