import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
