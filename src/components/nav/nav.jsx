import { Component } from 'react';
import { Home } from '../home/home';
import { Feed } from '../feed/feed';
import galleries from '../../data/galleries.json'
import './nav.css'


export class Nav extends Component {
  constructor(props) {
    super(props);
    this.displayHome = this.displayHome.bind(this);
    this.displayContact = this.displayContact.bind(this);
    this.displayGallery = this.displayGallery.bind(this);
    this.state = {nav: 'home'};
  }

  displayHome() {
    this.setState({nav : 'home'})
  }

  displayGallery() {
    this.setState({nav : 'gallery'})
  }

  displayContact() {
    this.setState({nav : 'contact'})
  }

  render() {
    const nav = this.state.nav
    let page ;
    if (nav === 'home'){
      page = <div><Home/></div>;
    }
    else if (nav === 'gallery'){
      page = <Feed galleries={galleries.galleries}/>
    }
    else if (nav === 'contact'){
      page = ''
    }

    return (
      <>
        <div className='flexNav'>
          <div className='flexEntry'>
            <button onClick={this.displayHome}> Home </button>
            {nav === 'home' ? <hr/> : <br/>}
          </div>
          <div  className='flexEntry'>
            <button onClick={this.displayGallery}> Gallery </button>
            {nav === 'gallery' ? <hr/> : <br/>}
          </div>
          <div  className='flexEntry'>
            <button onClick={this.displayContact}> Contact </button>
            {nav === 'contact' ? <hr/> : <br/>}
          </div>
        </div>
      {page}
    </>
    );
  }
}

