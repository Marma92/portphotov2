import logo from './logo.svg';
import './App.css';
import {Header} from './components/header';
import {Gallery} from './components/gallery'
import {Footer} from './components/footer/footer'

const gallery = {
  title: 'Yashica Electro GS x Fujifilm C200',
  photos:
  [
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
    },
    {
      key:4,
      src: "https://pbs.twimg.com/media/FSBb044WUAAeAwn?format=jpg&name=large",
      alt: "youpiiii!"
    }
  ]
}
;


function App() {
  return (
    <div className="App">
      <Header/>
      <h2 style={styles.galleryTitle}>{gallery.title}</h2>
      <Gallery photos={gallery.photos} />
      <Footer/>
    </div>
  );
}

const styles = {
  galleryTitle:{
    textAlign : 'left',
    marginLeft : '8%',
  }
}

export default App;
