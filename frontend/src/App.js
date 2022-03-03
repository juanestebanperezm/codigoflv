import "./App.css";

//Componentes
import Cabecera from "./components/Cabecera";
import Footer from "./components/Footer";
import Advertisement from "./components/advertisement/Advertisement";
import Lateral from "./components/Lateral";
import { Navigation } from "./routers/Navigation";


function App() {
  
  return (
    <div className="App">
      <Cabecera />
      <Navigation />
     
      <Footer/>
    </div>
  );
}

export default App;
