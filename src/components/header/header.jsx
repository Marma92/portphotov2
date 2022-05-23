import { Component } from 'react';
import { photographerName, portrait } from  '../../constants/user.constants';
import './header.css'
const title = photographerName

export class Header extends Component {
  render() {
    return (
    <div style={styles.flexContainer}>
      <div>
        <img src={portrait} alt='portrait of the photographer' className='portrait'/>
      </div>
      <div style={styles.divTitle}>
      <h1 className='title'>{title}</h1>
      </div>
    </div>
    );
  }
}

const styles = {
  flexContainer:{
    marginTop : '3%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  divTitle:{
    marginLeft: '1%',
  }
}