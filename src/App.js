import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headphone from "./pages/Headphone";
import Earphone from "./pages/Earphone";
import Speaker from "./pages/Speaker";
import ProductDetails from "./pages/ProductDetails";
import AudiophilleState from "./context/AudiophilleState";

function App() {
  return (
    <AudiophilleState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="headphone" element={<Headphone />} />
          <Route path="earphone" element={<Earphone />} />
          <Route path="speaker" element={<Speaker />} />
          <Route path="product">
            <Route path=":slug" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Router>
    </AudiophilleState>
  );
}

export default App;
