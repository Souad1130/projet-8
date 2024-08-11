
import { Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import Logement from "./pages/Logement/Logement";
import Page404 from "./pages/Page404/Page404"


function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element= { <Home /> } />
          <Route path="/about" element= { <About /> } />
          <Route path="/logement/:id" element={ <Logement /> } />
          <Route path="*" element= { <Page404 /> } />
        </Routes>
      <Footer />
    </>
  );
}
export default App;