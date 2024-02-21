import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <header></header>
      <main></main>
      <footer></footer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
