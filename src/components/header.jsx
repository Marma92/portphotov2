import { Component } from 'react';
import { photographerName, portrait } from  '../constants/user.constants';

const title = photographerName

export class Header extends Component {
  render() {
    return (
    <>
    <img src={portrait} alt='portrait of the photographer' style={styles.portrait}/>
    <h1>{title}</h1>
    </>
    );
  }
}

const styles = {
  portrait:{
    borderRadius : '100%',
    width : '100px',
    height : 'auto'
  }
}