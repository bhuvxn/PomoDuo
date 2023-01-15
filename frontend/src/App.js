import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Homepage/Home";
import Login from "./components/Homepage/Login";
import Register from "./components/Homepage/Register";
import Header from "./components/Header/Header";
function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
