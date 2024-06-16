import '../css/Car.css'

const Car = ({ car }) => {
  return (
    <div className="car-card">
      <img className="car-img" src={car.imageUrl} alt={car.make} />
      <h2 className="car-title">{car.make} {car.model}</h2>
      <p className="card-detail">Year: {car.year}</p>
      <p className="card-detail">Color: {car.color}</p>
    </div>
  )
}

export default Car