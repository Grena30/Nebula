import "../css/Car.css";

const Car = ({ car }) => {
  return (
    <div className="car-card">
      <img className="car-card-img" src={car.imageUrl} alt={car.make} />
      <h2 className="car-title">
        {car.brand} {car.model}
      </h2>
      <p className="car-detail">
        <span className="detail-highlight">Body type:</span> {car["body type"]}
      </p>
      <p className="car-detail">
        <span className="detail-highlight">Year: </span>
        {car["manufacturing year"]}
      </p>
      <p className="car-detail">
        <span className="detail-highlight">Color: </span>   
        {car.class}</p>
      <p className="car-detail">
        <span className="detail-highlight">Price: </span>
        {car.price}</p>
      <p className="car-detail">
        <span className="detail-highlight">Powertrain: </span>
        {car.powertrain}</p>
      <p className="car-detail car-detail-text">{car.additional}</p>
    </div>
  );
};

export default Car;
