import { useState } from "react";

import "./App.css";

//Componentes
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Advertisement from "./components/advertisement/Advertisement";
import Lateral from "./components/Lateral";
import { Navigation } from "./routers/Navigation";
import Login from "./components/Login";
import Modal from "./components/Modal";


function App() {
  const [openLogin, setOpenLogin] = useState(false);
  
  return (
    <div className="App">
      <AppBar openLogin={openLogin} setOpenLogin={setOpenLogin} />
      <Navigation />
      <Advertisement/>
      <Footer/>

      {openLogin && (
        <Modal>
          <Login openLogin={openLogin} setOpenLogin={setOpenLogin}/>
        </Modal>
      )}
    </div>
  );
}

export default App;
