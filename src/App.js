import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Menu from "./components/pages/Menu";
import Contact from "./components/pages/Contact";
import MyAccount from "./components/pages/MyAccount";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Cart from "./components/pages/Cart";
import CategoryMenu from "./components/pages/CategoryMenu";
import ProductDetail from "./components/pages/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/home.css";
import "./styles/about.css";
import "./styles/menu.css";
import "./styles/cart.css";
import "./styles/userAuth.css";
import Privacy from "./components/pages/Privacy";
import Sitemap from "./components/pages/Sitemap";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/menu/:categoryId" element={<CategoryMenu />} />
            <Route
              path="/menu/:categoryId/:productId"
              element={<ProductDetail />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
