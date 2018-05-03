import React, { Component } from 'react'; 
//import { Phone, Email } from 'material-ui-icons';
import '../App.css';

const styles = {
    outer: {
        backgroundColor: '#262626',
        height: '450px',
        textAlign: 'left',
    },
    inner: {
        margin: '0 15% 0 15%'
    },
    dt: {
        float: 'left',
        width: '100px',
        fontWeight: 'bold',
        color: '#c9c9c9'
    },
    dl: {
        display: 'block'
    },
    dd: {
        margin: '0 0 0 110px',
        padding: '0 0 0.5em 0',
        color:'#5d5d5d',
        fontSize: '20px'
    }
}

class ContactMe extends Component {
    render() {
        return (
            <div style={styles.outer}>
                <div style={styles.inner}>
                    <h3 style={{textAlign: 'left', color: '#c9c9c9', paddingTop: '50px'}}>CONTACT ME</h3>
                    <p style={{color: '#5d5d5d', fontSize: '24px'}}>I'm avaiable for hire and ready to develop your next project </p>             
                    <div style={{display: 'inline-block', float: 'left', fontSize: '18px'}}>
                        <dl style={styles.dl}>
                            <dt style={styles.dt}>Email:</dt>
                            <dd style={styles.dd}><a href="mailto:nguyena7@wit.edu">nguyena7@wit.edu</a></dd>
                            <dt style={styles.dt}>Mobile:</dt>
                            <dd style={styles.dd} >(650) 892 5678</dd>
                            <dt style={styles.dt}>LinkedIn:</dt>

{/*target blanked to open link in new tab*/}
                            <dd style={styles.dd}><a href="https://www.linkedin.com/in/annguyen961/" target="_blank" rel="noopener noreferrer">LinkedIn</a></dd>
                            <dt style={styles.dt}>Github:</dt>
                            <dd style={styles.dd}><a href="https://github.com/nguyenAn1201" target="_blank" rel="noopener noreferrer">GitHub</a></dd>
                        </dl>                     
                        <footer>
                            <p>&copy; An Nguyen 2018</p>
                            <p><i>Last updated on 4 May 2018</i></p> 
                        </footer>       
                    </div>      
                </div>                 
            </div>            
        );
    }
}
export default ContactMe;