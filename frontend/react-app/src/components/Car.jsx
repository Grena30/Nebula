import '../css/Car.css'

const Car = ({ car }) => {
  return (
    <div className="car-card">
      <img className="car-img" src={car.imageUrl} alt={car.make} />
      <h2 className="car-title">{car.brand} {car.model}</h2>
      <p className="car-detail">Body type: {car["body type"]}</p>
      <p className="car-detail">Year: {car["manufacturing year"]}</p>
      <p className="car-detail">Class: {car.class}</p>
      <p className="car-detail">Price: {car.price}</p>
      <p className="car-detail">Powertrain: {car.powertrain}</p>
      <p className="car-detail car-detail-text">Additional: {car.additional}</p>
    </div>
  )
}

export default Car