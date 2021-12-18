import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headphone from "./pages/Headphone";
import Earphone from "./pages/Earphone";
import Speaker from "./pages/Speaker";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import AudiophilleState from "./context/audiophille/AudiophilleState";
import CartState from "./context/cart/CartState";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  return (
    <AudiophilleState>
      <CartState>
        <Router>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="headphones" element={<Headphone />} />
              <Route path="earphones" element={<Earphone />} />
              <Route path="speakers" element={<Speaker />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="product">
                <Route path=":slug" element={<ProductDetails />} />
              </Route>
            </Routes>
          </ScrollToTop>
        </Router>
      </CartState>
    </AudiophilleState>
  );
}

export default App;
