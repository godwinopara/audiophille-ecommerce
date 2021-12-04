import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headphone from "./pages/Headphone";
import Earphone from "./pages/Earphone";
import Speaker from "./pages/Speaker";
import ProductDetails from "./pages/ProductDetails";
import AudiophilleState from "./context/audiophille/AudiophilleState";
import CartState from "./context/cart/CartState";

function App() {
  return (
    <AudiophilleState>
      <CartState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="headphones" element={<Headphone />} />
            <Route path="earphones" element={<Earphone />} />
            <Route path="speakers" element={<Speaker />} />
            <Route path="product">
              <Route path=":slug" element={<ProductDetails />} />
            </Route>
          </Routes>
        </Router>
      </CartState>
    </AudiophilleState>
  );
}

export default App;
