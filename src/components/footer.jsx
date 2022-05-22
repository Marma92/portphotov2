import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { instagram, twitter, github } from '../constants/user.constants'
import { faTwitter, faInstagram, faGithubAlt } from '@fortawesome/free-brands-svg-icons'




export class Footer extends Component {
  render() {
    return (
      <div>
      <p>Under <a href="https://opensource.org/licenses/MIT"> MIT Licence</a>, 2017-{new Date().getFullYear()}, <a href="http://amramelbaz.com">ELBAZ Amram</a></p>
      <a href={instagram} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}  color="#ffc106" size="3x"/></a>
      <a href={twitter} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter}  color="#4099FF" size="3x"/></a>
      <a href={github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithubAlt}  color="#ac41f4" size="3x"/></a>
      </div>
    )
  }
}