import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
