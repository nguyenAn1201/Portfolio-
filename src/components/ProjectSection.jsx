import React, { Component } from 'react'; 

import Grid from 'material-ui/Grid';
//import Paper from 'material-ui/Paper';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
//import * as Scroll from 'react-scroll';
import { Element } from 'react-scroll';

const styles = {
  paper: {
    height: 340,
    width: 436,
  },
  card: {
	  maxWidth: 536,
	  height: 460,
  },
  media: {
  	height: 200,
  },
  row: {
		displays: 'inline',
  },
  chipContainer: {
		display: 'flex',
		flexWrap: 'wrap', 
		paddingTop: '20px',
  },
  chip: {
		margin: '0 5px 0px 0px',
	},
	projTitle: {
		fontSize: '28px'
	},
	projBody: {
		paddingTop: '30px', 
		fontSize: '18px'
	},
  reactScrollMarker: {
		paddingTop: '120px', //Using fixed top navigation bar so it will overlap with content below it. So padding-top of these react-scroll markers(Element) to fix that
  }
};

class ProjectSection extends Component {
	render() {	
		return (
			<div >
				<Element name="projectSectScrollMarker" style={styles.reactScrollMarker}></Element>

				<Grid container justify={'center'} spacing={24}>
					<Grid item>
						<Card style={styles.card} square={true} elevation={2}>
							<CardContent>
								<p style={styles.projTitle}>Dota2Stat</p>
								<p style={styles.projBody}>
									A website that utilizes an official API of a massive-multipler online game (Dota 2) which 
									displays the player's in-game statistic and information. Player can view his/her 
									overall gameplay statistic or view specific statistic for a specific game. Website aims to improve
									player's experience with the game. 
								</p>
								<div style={styles.chipContainer}>
									<Chip style={styles.chip} label="HTML"/>
									<Chip style={styles.chip} label="CSS"/>
									<Chip style={styles.chip} label="Bootstrap"/>
									<Chip style={styles.chip} label="JavaScript"/>
									<Chip style={styles.chip} label="jQuery"/>
									<Chip style={styles.chip} label="JSON"/>
								</div>
							</CardContent>
						</Card>
					</Grid>
					<Grid item >
						<Card style={styles.card} square={true} elevation={2}>
							<CardContent>
								<p style={styles.projTitle}>Project Vigilante</p>
								<p style={styles.projBody}>
									A in-class group project which I worked with 2 other students to develop a database for an
									application that would help increase user's crime awareness. The database contains information such as type of crime,
									suspect, victim, locations. This database was meanted to be used for applications
									to increase awareness of crimes within certain areas.
								</p>
							<span style={styles.chipContainer}>
								<Chip style={styles.chip} label="Java"/>
								<Chip style={styles.chip} label="MySQL"/>
								<Chip style={styles.chip} label="SQLite"/>
							</span>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default ProjectSection;