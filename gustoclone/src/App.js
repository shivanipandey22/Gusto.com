// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";
import Payroll from "./Components/Payroll/Payroll";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";


function App() {
  return (
    <div className="App">
 <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/payroll" element={<Payroll />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
