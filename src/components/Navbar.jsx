import { useSelector } from "react-redux";

function Navbar({ setPage }) {
  const { items } = useSelector(state => state.cart);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={{ display: "flex", gap: "20px", background: "black", color: "white", padding: "10px" }}>
      <h3 style={{ cursor: "pointer" }} onClick={() => setPage("home")}>
        Paradise Nursery
      </h3>

      <span style={{ cursor: "pointer" }} onClick={() => setPage("home")}>
        Home
      </span>

      <span style={{ cursor: "pointer" }} onClick={() => setPage("plants")}>
        Plants
      </span>

      <span style={{ cursor: "pointer" }} onClick={() => setPage("cart")}>
        Cart ({totalItems})
      </span>
    </div>
  );
}

export default Navbar;