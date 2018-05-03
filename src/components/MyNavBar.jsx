import React, { Component } from 'react'; 
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
//import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'
//import {BrowserRouter as Router, Route, Link as RouterLink} from "react-router-dom";

const styles = {
    title: {
		flex: '1',
		fontSize: '38px',
	},
	navigator: {
		margin: '0 10px 0 20px',
		color: '#626465',
		fontSize: '24px'
	},
	toolBar: {
		margin: '15px',
	},
};

class MyNavBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isClick: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			isClick: true
		})
		alert("Lul");
	}

	render() {
		return (
			<div style={{wordSpacing: '12px'}}>
				<AppBar color={'inherit'}>
					<Toolbar style={styles.toolBar}>
	{/*The title for the website*/}
						<Typography variant="title"  style={styles.title}>
							AN NGUYEN
						</Typography>
	{/*Navigators are here*/}		
						<Link activeClass="active" to="aboutScrollMarker" smooth={true} duration={1000} delay={150}>
							<Typography variant="headline" style={styles.navigator}>
								ABOUT
							</Typography>		
						</Link>
						<Link activeClass="active" to="workExpScrollMarker" smooth={true} duration={1000} delay={150}>			
							<Typography variant="headline" style={styles.navigator}>
								EXPERIENCE							
							</Typography>
						</Link>
						<Link activeClass="active" to="projectSectScrollMarker" smooth={true} duration={1000} delay={150}>
							<Typography variant="headline" style={styles.navigator}>
								PROJECTS
							</Typography>
						</Link>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
export default MyNavBar;
