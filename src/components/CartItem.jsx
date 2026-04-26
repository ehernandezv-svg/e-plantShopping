import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import Navbar from "./Navbar";

function CartItem({ setPage }) {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar setPage={setPage} />
      <h2>Shopping Cart</h2>

      {items.map(item => (
        <div key={item.id}>
          <img src="https://via.placeholder.com/100" alt={item.name} />
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}>+</button>
          <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}

      <h3>Total Cart Amount: ${total}</h3>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <button onClick={() => setPage("plants")}>Continue Shopping</button>
    </div>
  );
}

export default CartItem;
