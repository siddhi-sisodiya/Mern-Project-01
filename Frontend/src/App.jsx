import { useEffect, useState } from "react";
import Card from "./Components/Card";
import { fetchProducts } from "./services/api";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(res => setProducts(res.data));
  }, []);

   return (
    <div>
      <h1>Product List</h1>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((p) => (
          <Card
            key={p._id}
            name={p.name}
            price={p.price}
            description={p.description}
          />
        ))
      )}
    </div>
  );
}
export default App;