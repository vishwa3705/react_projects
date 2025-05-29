import Product from "./component/Product";
import "./App.css";
import products from "./Product.json";

function App() {
  return (
    <>
      <section>
        <div>
          <div className="hi">
            {products.map((product, index) => {
              return <Product item={product} key={index} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
