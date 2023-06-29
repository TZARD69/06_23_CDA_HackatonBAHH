import ButtonAppBar from "@components/Navbar";

// import "./App.css";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
