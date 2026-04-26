import { useSelector } from "react-redux";

function Navbar({ setPage }) {
  const { items } = useSelector(state => state.cart);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={{ display: "flex", gap: "20px", background: "black", color: "white", padding: "10px" }}>
      <span onClick={() => setPage("home")} style={{ cursor: "pointer" }}>Home</span>
      <span onClick={() => setPage("plants")} style={{ cursor: "pointer" }}>Plants</span>
      <span onClick={() => setPage("cart")} style={{ cursor: "pointer" }}>
        Cart ({totalItems})
      </span>
    </div>
  );
}

export default Navbar;
