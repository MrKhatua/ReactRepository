import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import PurchaseHistory from "./PurchaseHistory";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import { useSelector } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginComponent from "./GoogleLoginComponent";

function App() {
  const cartItems = useSelector((state) => state.cart.items); // Access items in the cart state
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0); // Calculate total quantity

  return (
    <GoogleOAuthProvider clientId="372697982055-0m70eeiun8smi4f3k855gakg3oos7ceb.apps.googleusercontent.com">
      <GoogleLoginComponent/>
    <>
      <BrowserRouter>
          <Link to="/">My Shop</Link>
          <Link to="/Veg">Veg</Link>
          <Link to="/Non-veg">Non-veg</Link>
          <Link to="/Cart">Cart ({totalItems})</Link>  {/* Show total items in cart */}
          <Link to="/Purchase-History">Purchase History</Link>
          <Link to="/Contact Us">Contact Us</Link>
          <Link to="/About Us">About Us</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Veg" element={<Veg />} />
          <Route path="/Non-veg" element={<NonVeg />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Purchase-History" element={<PurchaseHistory />} />
          <Route path="/Contact Us" element={<ContactUs />} />
          <Route path="/About Us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
      
    </>
    </GoogleOAuthProvider>
  );
}

export default App;
