import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import MyNavBar from './components/MyNavBar.jsx';
import ProjectSection from './components/ProjectSection.jsx';
import ContactMe from './components/ContactMe.jsx';
import Intro from './components/Intro.jsx';

//import {BrowserRouter as Router, Route, Switch, Link as RouterLink} from "react-router-dom"; Will use router when there are more to show for the website. 



ReactDOM.render(<MyNavBar />, document.getElementById('navigation'));
ReactDOM.render(<Intro />, document.getElementById('intro'));
ReactDOM.render(<App />, document.getElementById('container'));
ReactDOM.render(<ProjectSection />, document.getElementById('projects'));
ReactDOM.render(<ContactMe />, document.getElementById('contact'));

//Display current React version
//ReactDOM.render(<div>React version: {React.version}</div>, document.getElementById('version'));
registerServiceWorker();
