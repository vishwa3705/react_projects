import "./Products.css";
import "remixicon/fonts/remixicon.css";
const Product = ({
  item: { image, name, price, description, category },
  likeItem,
}) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} />
      </div>
      <div className="name-like">
        <h3 className="product-name">{name}</h3>
        <i class="ri-poker-hearts-fill" id="likeBtn" onClick={likeItem}></i>
      </div>

      <div className="categories">
        {category.map((category, index) => (
          <button key={index}>{category}</button>
        ))}
      </div>
      <p className="product-price">{price}</p>
      <p className="product-description">{description}</p>
      <button className="buy">Buy</button>
    </div>
  );
};

export default Product;
