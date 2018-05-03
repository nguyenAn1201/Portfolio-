import React, { Component } from 'react'; 
import { Element } from 'react-scroll';

const styles = {
    intro: {
        margin: ' 15%',
        textAlign: 'left',
        marginTop: '200px',
        marginBottom: '400px',
        fontSize: '22px',
        lineHeight: '1.7'
    },
    reactScrollMarker: {
        paddingTop: '120px', //I'm using fixed top navigation bar so it will overlap with content below it. So padding-top of these react-scroll markers(Element) to fix that
    },
}
class Intro extends Component {

    render() {
        return (
            <div>
                <Element name="aboutScrollMarker" style={styles.reactScrollMarker}></Element>
                <div style={styles.intro}>
                    <h3>HELLO WORLD! My name is An Nguyen </h3>
                    <h4>I'm a developer specialised in web develoment who always seeks opportunities to learn and improve while developing amazing applications.</h4>
                </div>
            </div>
        );
    }
}
export default Intro;