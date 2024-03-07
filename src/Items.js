import { pizzaData } from "./Data";

function Items(props) {
  return (
    <div className="grid-container">
      {pizzaData.map(({ name, description, price, image, note, available }) => (
        <div className="grid-item-img">
          <img src={image} alt={name} height={150} width={90} />

          <div className="grid-item">
            <h5>{name}</h5>
            <p>{description}</p>
            <p>{note}</p>
            <h4>{price}</h4>
            {available ? (
              <button className="order-button">Order</button>
            ) : (
              <button className="sold-out-button">Sold Out</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Items;
