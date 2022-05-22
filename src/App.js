import logo from './logo.svg';
import './App.css';
import {Header} from './components/header';
import {Gallery} from './components/gallery'
import {Footer} from './components/footer'

const photos =[
  {
    key : 1,
    src: "https://pbs.twimg.com/media/FSpFqCoWIAMpQQn?format=jpg&name=large",
    alt: "wesh alors"
  },
  {
    key: 2,
    src: "https://pbs.twimg.com/media/FSpFqCoWIAMpQQn?format=jpg&name=large",
    alt: "wesh alors"
  }
];


function App() {
  return (
    <div className="App">
      <Header/>
      <Gallery photos={photos} />
      <Footer/>
    </div>
  );
}

export default App;
