import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents" },
  { id: 2, name: "Snake Plant", price: 15, category: "Succulents" },
  { id: 3, name: "Echeveria", price: 12, category: "Succulents" },

  { id: 4, name: "Peace Lily", price: 20, category: "Indoor" },
  { id: 5, name: "Fern", price: 18, category: "Indoor" },
  { id: 6, name: "Monstera", price: 25, category: "Indoor" },

  { id: 7, name: "Cactus", price: 12, category: "Desert" },
  { id: 8, name: "Bonsai", price: 30, category: "Desert" },
  { id: 9, name: "Agave", price: 22, category: "Desert" }
];

function ProductList({ setPage }) {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);

  const isInCart = (id) => items.some(item => item.id === id);
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div>
      <Navbar setPage={setPage} />
      <h2>Plants</h2>

      {categories.map(category => (
        <div key={category}>
          <h3>{category}</h3>

          {plants
            .filter(p => p.category === category)
            .map(p => (
              <div key={p.id}>
                <img src="https://via.placeholder.com/100" alt={p.name} />
                <h4>{p.name}</h4>
                <p>${p.price}</p>

                <button
                  onClick={() => dispatch(addItem(p))}
                  disabled={isInCart(p.id)}
                >
                  {isInCart(p.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
