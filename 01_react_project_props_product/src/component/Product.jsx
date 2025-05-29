import "./Products.css";

const Product = (props) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={props.item.image} alt={props.item.name} />
      </div>
      <h3 className="product-name">{props.item.name}</h3>
      <p className="product-price">{props.item.price}</p>
      <p className="product-description">{props.item.description}</p>
    </div>
  );
};

export default Product;
