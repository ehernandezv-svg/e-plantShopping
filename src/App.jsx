import { useState } from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

function App() {
  const [page, setPage] = useState("home");

  if (page === "cart") return <CartItem setPage={setPage} />;
  if (page === "plants") return <ProductList setPage={setPage} />;

  return (
    <div className="app-container background-image">
      <h1>Welcome to Paradise Nursery</h1>
      <AboutUs />
      <button onClick={() => setPage("plants")}>Get Started</button>
    </div>
  );
}

export default App;
