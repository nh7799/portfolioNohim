import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { ThemeProvider } from "./hooks/useTheme.jsx";

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="page">
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <Navigation />
          <div id="main" className="page-inner page-main" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
