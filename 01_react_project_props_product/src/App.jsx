


import Product from "./component/Product";
import "./App.css";
import products from "./Product.json";
import Navbar from "./component/Navbar";
import { useState } from "react";
function App() {
  let [itemLikes, setItemLikes] = useState(0);
  let [itemCart, setItemCart] = useState(0);

  const likeItem = () => {
    setItemLikes(itemLikes + 1);
  };

  return (
    <>
      <Navbar itemLikes={itemLikes} />
      <section>
        <div>
          <div className="hi">
            {products.map((product, index) => {
              return <Product item={product} key={index} likeItem={likeItem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;