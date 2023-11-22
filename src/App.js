import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import CustomNavbar from "./components/Navbar";
import Navbarmobile from "./components/Navbarmobile";
import Informazioni from "./components/Informazioni";
import Skills from "./components/Skills";
import Progetti from "./components/Progetti";
import Contattami from "./components/Contattami";
import Social from "./components/Social";

function App() {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  return (
    <div>
      {isMobile ? (
        <Navbarmobile />
      ) : (
        <CustomNavbar />
      )}
      <Informazioni />
      <Skills />
      <Progetti />
      <Social />
      <Contattami />
    </div>
  );
}

export default App;
