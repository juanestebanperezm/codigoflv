import "./App.css";

//Componentes
import NavBar from "./components/AppBar";
import Footer from "./components/Footer";
import Advertisement from "./components/advertisement/Advertisement";
import Lateral from "./components/Lateral";
import { Navigation } from "./routers/Navigation";


function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Navigation />
      <Advertisement/>
      <Footer/>
    </div>
  );
}

export default App;
