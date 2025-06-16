import Header from "./components/Header";
import Home from "./Pages/Home";    
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const state = location.state;

  return (
    <div className="App">
      <Header />
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/price" element={<Price />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
      <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      <Footer />
    </div>

  );
}

export default App;