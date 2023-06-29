
import ButtonAppBar from "@components/Navbar";



import Navbar from "@components/Navbar";
import "./App.css";

import { Outlet } from "react-router-dom";
import Footer from "@components/Footer";


function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
