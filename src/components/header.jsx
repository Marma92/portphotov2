import { Component } from 'react';
import { photographerName } from  '../constants/user.constants';

const title = "Welcome to "+ photographerName +"'s portfolio"

export class Header extends Component {
  render() {
    return <h1>{title}</h1>;
  }
}