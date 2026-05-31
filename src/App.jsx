import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { ThemeProvider } from "./hooks/useTheme.jsx";
import { scrollToSection } from "./lib/scrollToSection";

function SkipToContent() {
  return (
    <a
      href="#main"
      className="skip-link"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("main", { behavior: "auto" });
        document.getElementById("main")?.focus({ preventScroll: true });
      }}
    >
      Skip to content
    </a>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="page">
          <SkipToContent />
          <Navigation />
          <div id="main" className="page-inner page-main" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
