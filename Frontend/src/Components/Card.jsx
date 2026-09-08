function Card({ name, price, description }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>{description}</p>
    </div>
  );
}

export default Card;
 