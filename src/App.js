import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Nav } from "./components/nav/nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
