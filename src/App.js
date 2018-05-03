import React, { Component } from 'react'
/*import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu'; */
//import * as Scroll from 'react-scroll';
import { Element } from 'react-scroll';
import './App.css';

const EDUCATION = [
	{coursework: 'Introduction to Programming I and II'},
	{coursework: 'Introduction to Networks and System'},
	{coursework: 'Introduction to Programming Language'},
	{coursework: 'Computer Architecture'},
	{coursework: 'Operating System'},
	{coursework: 'Object Oriented Programming'},
	{coursework: 'Data Structure and Data Management Systems'},
	{coursework: 'Assembly Language'},
	{coursework: 'Web Application Development'},
	{coursework: 'Algorithm Design and Analysis'}
]

const WORKEXP = [ 
	{company: 'EChO Foundation - Eradicate Childhood Obesity', position: 'AR Developer', duration: 'January 2018 - April 2018', location: 'Cambridge, MA', description: 'Worked as an AR (Agumented Reality) Developer at EChO foundation. Worked collaboratively with other developers to develop one of the first health mobile application using Augmrented Reality technology. Contributed in developing SugAR Poke app that is avaialbe on both Android and iOS platforms using Unity(C#), Vuforia, and Xcode.'},
	{company:'American Student Assistance (ASA)', position:'Front-End Web Developer', duration:'January 2017 - June 2017', location: 'Boston, MA', description: 'As a front-end web developer, I contributed in developing and redesigning ASA\'s website which was Saltmoney.org. Here, I utilized HTML, Sass, Dust.js, jQuer, HighChart.js to develop beautiful and functional webpage. Furthermore, I was able to learn and apply Agile methodologies such as daily stand-up meeting, stories meeting, and sprint cycle.', tool:''},
  //{company: 'Wentworth Intitute of Technology Office of Campus Life', position:'Office Assistant', duration:'January 2015 - Present', location: 'Boston, MA', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium auctor est, non interdum lectus interdum non. Donec id velit sed urna aliquet scelerisque. Mauris eu mauris vel neque suscipit imperdiet.'},
]

const styles = {
	reactScrollMarker: {
		paddingTop: '5px', //Using fixed top navigation bar so it won't overlap with content below it. So padding-top of these react-scroll markers(Element) to fix that
	}
};

class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		EDUCATION,
  		WORKEXP
  	};
	}

  render() {
    return (
			<div className="App">     
{/*Marker for React-scroll to scroll to education section*/}

{/*Removing Eucation section. Doesn't seem to be enough info for this to be usedful
				<Element name="educationScrollMarker" style={styles.reactScrollMarker}>
				</Element>

				<div className="Layout">
					<p style={{color: "#c9c9c9", fontSize: "32px"}}>Education</p>
					<h4>Wentworth Institute of Technology</h4>
					<i style={{float: 'right'}}>2014 - 2018</i>
					<b style={{float: 'left'}}>Computer Science, B.S.</b>
					<ul>
						{this.state.EDUCATION.map((EDUCATION, index) => 
							<li key={index}>
								<p>{EDUCATION.coursework} </p>
							</li>
						)}
					</ul>
				</div>
*/}		

{/*Marker for React-scroll to scroll to work exp section*/}
				<Element name="workExpScrollMarker" style={styles.reactScrollMarker}>
				</Element>
					<div className="Layout">
						<p style={{color: "#c9c9c9", fontSize: "32px"}}> Experience</p>
						{this.state.WORKEXP.map((WORKEXP, index) => 
							<WorkExp key={index} company= {WORKEXP.company} 
							position={WORKEXP.position} 
							location={WORKEXP.location} 
							duration={WORKEXP.duration} 
							description={WORKEXP.description}/>
							)}
					</div>
			</div>					
    );			
  }
}

const WorkExp = (props) => {
	return (
			<div>
				<b>{props.company}</b>
				<span style={{float:'right'}}><i>{props.duration}</i></span>
				<br></br>
				<b>{props.position}</b>
				<span style={{float:'right'}}><i>{props.location}</i></span>
				<br></br>
				<p>{props.description}</p>
				<br></br>
				<br></br>
			</div>
	);
}

export default App;
