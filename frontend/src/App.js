import { useState } from "react";

import "./App.css";

//Componentes
import AppBar from "./components/AppBar";
import Advertisement from "./components/advertisement/Advertisement";
import { Navigation } from "./routers/Navigation";
import Login from "./components/Login/Login";
import Modal from "./components/Modal";


function App() {
  const [openLogin, setOpenLogin] = useState(false);
  
  return (
    <div className="App">
      <AppBar openLogin={openLogin} setOpenLogin={setOpenLogin} />
      <Navigation />
     
      {openLogin && (
        <Modal>
          <Login openLogin={openLogin} setOpenLogin={setOpenLogin}/>
        </Modal>
      )}
    </div>
  );
}

export default App;
