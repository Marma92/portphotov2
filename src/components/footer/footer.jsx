import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { instagram, twitter, github, darkroom, email } from '../../constants/user.constants'
import { faInstagramSquare, faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare, faFilm, faPrint } from '@fortawesome/free-solid-svg-icons';
import "./footer.css";



export class Footer extends Component {
  render() {
    return (
      <div style={styles.footer} className="footer">
      <p>Developped with ❤️ under <a href="https://opensource.org/licenses/MIT"> MIT Licence</a>, 2017-{new Date().getFullYear()}, <a href="http://amramelbaz.com">ELBAZ Amram</a></p>
      <a href={instagram} target="_blank" rel="noreferrer" style={styles.icons} ><FontAwesomeIcon icon={faInstagramSquare} size="2x"/></a>
      <a href={darkroom}  target="_blank" rel="noreferrer" style={styles.icons} className='dr'><FontAwesomeIcon icon={faPrint} size="2x"/> </a>
      <a href={twitter} target="_blank" rel="noreferrer" style={styles.icons} className='tw'><FontAwesomeIcon icon={faTwitterSquare} size="2x"/></a>
      <a href={'mailto:'+ email} target="_blank" rel="noreferrer" style={styles.icons} className='em'><FontAwesomeIcon icon={faEnvelopeSquare} size="2x"/></a>
      <a href={github} target="_blank" rel="noreferrer" style={styles.icons} className='gh'><FontAwesomeIcon icon={faGithubSquare} size="2x"/></a>
      </div>
    )
  }
}

const styles = {
  footer : {
    marginTop : '2%',
    paddingTop : '1%',
    borderTop: '1px solid #d0d7de',
  },
  icons :{
    margin : '0.5%',
    paddingBottom : '1%',
  }
}