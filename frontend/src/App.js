import "./App.css";

//Componentes
import Cabecera from "./components/Cabecera";
import Footer from "./components/Footer";
import Advertisement from "./components/advertisement/Advertisement";


function App() {
 
  return (
    <div className="App">
      <Cabecera />
      <Advertisement />
      <Footer/>
    </div>
  );
}

export default App;
