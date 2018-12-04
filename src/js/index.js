import 'normalize.css';
import '../css/scottnash';

import React from "react";
import ReactDOM from "react-dom";
import Projects from "./projects";

const jsx = ( <Projects /> );

const app = document.getElementById( "projects" );
ReactDOM.render( jsx, app );
