import "./App.css";

//Componentes
import Cabecera from "./components/Cabecera";
import Footer from "./components/Footer";
import Advertisement from "./components/advertisement/Advertisement";
import Lateral from "./components/Lateral";


function App() {
 
  return (
    <div className="App">
      <Cabecera />
      <Lateral/>
      <Advertisement />
      <Footer/>
    </div>
  );
}

export default App;
