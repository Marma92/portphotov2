import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { instagram, twitter, github, darkroom, email } from '../constants/user.constants'
import { faTwitter, faInstagram, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faAt, faFilm } from '@fortawesome/free-solid-svg-icons';




export class Footer extends Component {
  render() {
    return (
      <div style={styles.footer}>
      <p>Under <a href="https://opensource.org/licenses/MIT"> MIT Licence</a>, 2017-{new Date().getFullYear()}, <a href="http://amramelbaz.com">ELBAZ Amram</a></p>
      <a href={instagram} target="_blank" rel="noreferrer" style={styles.icons}><FontAwesomeIcon icon={faInstagram}  color="#ffc106" size="3x"/></a>
      <a href={darkroom}  target="_blank" rel="noreferrer" style={styles.icons}><FontAwesomeIcon icon={faFilm} color="#be4d25" size="3x"/> </a>
      <a href={twitter} target="_blank" rel="noreferrer" style={styles.icons}><FontAwesomeIcon icon={faTwitter}  color="#4099FF" size="3x"/></a>
      <a href={'mailto:'+ email} target="_blank" rel="noreferrer" style={styles.icons}><FontAwesomeIcon icon={faAt} color="#25a5be" size="3x"/></a>
      <a href={github} target="_blank" rel="noreferrer" style={styles.icons}><FontAwesomeIcon icon={faGithubAlt}  color="#ac41f4" size="3x"/></a>
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
    margin : '1%',
    paddingBottom : '1%',
  }
}