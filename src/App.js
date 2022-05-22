import logo from './logo.svg';
import './App.css';
import {Header} from './components/header';
import {Gallery} from './components/gallery'
import {Footer} from './components/footer'

const photos =[
  {
    key : 1,
    src: "https://pbs.twimg.com/media/FSBb2u9XMAcynTT?format=jpg&name=large",
    alt: "plouf le bébé"
  },
  {
    key: 2,
    src: "https://pbs.twimg.com/media/FSBb2FEXMAETlmW?format=jpg&name=large",
    alt: "c lé fleurs"
  },
  {
    key:3,
    src: "https://pbs.twimg.com/media/FSBb1bRWQAAedcY?format=jpg&name=large",
    alt: "c la moto"
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
