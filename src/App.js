import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headphone from "./pages/Headphone";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="headphone" element={<Headphone />} />
      </Routes>
    </Router>
  );
}

export default App;
