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
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
