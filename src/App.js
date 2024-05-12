import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home.js";
import Footer from './components/Footer/Footer.js';
import Navbar from "./components/Navbar/Navbar.js";
import { Routes, Route } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
