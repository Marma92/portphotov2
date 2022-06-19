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
    console.log('home');
    this.setState({nav : 'home'})
    return(
      <div>
        <Home/>
      </div>
    )
  }

  displayGallery() {
    console.log('gallery')
    this.setState({nav : 'gallery'})
    return (
      <>
        <Feed galleries={galleries.galleries}/>
      </>
    )

  }

  displayContact() {
    this.setState({nav : 'contact'})
    console.log('contact')
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
            <button onClick={this.displayHome}> home </button>
          </div>
          <div  className='flexEntry'>
            <button onClick={this.displayGallery}> gallery </button>
          </div>
          <div  className='flexEntry'>
            <button onClick={this.displayContact}> contact </button>
          </div>
        </div>
      {page}
    </>
    );
  }
}

