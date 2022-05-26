import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer'
import { Feed } from './components/feed/feed';
import galleries from './data/galleries.json'

function App() {
  return (
    <div className="App">
      <Header/>
      <Feed galleries={galleries.galleries}/>
      <Footer/>
    </div>
  );
}


export default App;
