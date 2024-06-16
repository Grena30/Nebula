import { useState } from "react";
import "../../css/Shop.css";
import CarList from "../CarList";

const Shop = () => {
  const [cars, setCars] = useState([]); 
  const brands = [
    "BMW",
    "Mercedes",
    "Audi",
    "Toyota",
    "Ford",
    "Honda",
    "Mitsubishi",
  ];
  const [activeBrands, setActiveBrands] = useState([]);

  const powertrains = ["Diesel", "Electric", "Hybrid", "Petrol"];
  const [activePowertrains, setActivePowertrains] = useState([]);

  const carClasses = ["Luxury", "Sport", "SUV", "Compact"];
  const carClassesImages = [
    "https://www.topgear.com/sites/default/files/news-listicle/image/2023/09/LEAD.jpg",
    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ijsxlvQB.bu8/v0/-1x-1.jpg",
    "https://media.cdn-jaguarlandrover.com/api/v2/images/101871/w/1600.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/8/8a/2020_Volkswagen_Golf_Style_1.5_Front.jpg",
  ];
  const [activeCarClasses, setActiveCarClasses] = useState([]);

  const bodyTypes = ["Sedan", "Coupe", "Hatchback", "Crossover"];
  const bodyTypesImages = [
    "https://images.topgear.com.ph/topgear/images/2020/08/07/camnry-black-edition-1-1596789185.jpg",
    "https://www.complete-leasing.co.uk/img/gallery/lexus-rc-coupe-car.jpg",
    "https://www.actualidadmotor.com/wp-content/uploads/2023/09/toyota-yaris-130h-2-768x461.jpg",
    "https://media.ed.edmunds-media.com/mitsubishi/outlander-sport/2024/oem/2024_mitsubishi_outlander-sport_4dr-suv_20-se_fq_oem_1_1600.jpg",
  ];
  const [activeBodyTypes, setActiveBodyTypes] = useState([]);

  const [additional, setAdditional] = useState("");
  const apiUrl = "http://127.0.0.1:5000/api/search";

  const handleClick = (item, items, setActiveItems, activeItems) => {
    if (item === "All") {
      if (activeItems.length === items.length) {
        setActiveItems([]);
      } else {
        setActiveItems(items);
      }
    } else {
      setActiveItems((prevItems) => {
        if (prevItems.includes(item)) {
          return prevItems.filter((i) => i !== item);
        } else {
          return [...prevItems, item];
        }
      });
    }
  };

  const handleSubmit = () => {
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        brands: activeBrands.join(),
        powertrains: activePowertrains.join(),
        carClasses: activeCarClasses.join(),
        bodyTypes: activeBodyTypes.join(),
        additional: additional,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCars(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container shop-section">
      <div className="form-group">
        <h2 className="form-group-title">Brand</h2>
        <div className="brand-btns">
          <button
            className={`btn btn-brand ${
              activeBrands.length === brands.length ? "active" : ""
            }`}
            onClick={() =>
              handleClick("All", brands, setActiveBrands, activeBrands)
            }
          >
            All
          </button>
          {brands.map((brand, index) => (
            <button
              key={index}
              className={`btn btn-brand ${
                activeBrands.includes(brand) ? "active" : ""
              }`}
              onClick={() =>
                handleClick(brand, brands, setActiveBrands, activeBrands)
              }
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <h2 className="form-group-title">Powertrain</h2>
        <div className="powertrain-btns">
          <button
            className={`btn ${
              activePowertrains.length === powertrains.length ? "active" : ""
            }`}
            onClick={() =>
              handleClick(
                "All",
                powertrains,
                setActivePowertrains,
                activePowertrains
              )
            }
          >
            All
          </button>
          {powertrains.map((powertrain, index) => (
            <button
              key={index}
              className={`btn btn-powertrain ${
                activePowertrains.includes(powertrain) ? "active" : ""
              }`}
              onClick={() =>
                handleClick(
                  powertrain,
                  powertrains,
                  setActivePowertrains,
                  activePowertrains
                )
              }
            >
              {powertrain}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <h2 className="form-group-title">Car Class</h2>
        <div className="car-class-btns">
          <button
            className={`btn btn-car-img-all ${
              activeCarClasses.length === carClasses.length ? "active" : ""
            }`}
            onClick={() =>
              handleClick(
                "All",
                carClasses,
                setActiveCarClasses,
                activeCarClasses
              )
            }
          >
            All
          </button>
          <div className="car-img-list">
            {carClasses.map((carClass, index) => (
              <div className="car-img-wrapper" key={index}>
                <img
                  className="car-img"
                  src={carClassesImages[index]}
                  alt={carClass}
                />
                <button
                  key={index}
                  className={`btn btn-car-class ${
                    activeCarClasses.includes(carClass) ? "active" : ""
                  }`}
                  onClick={() =>
                    handleClick(
                      carClass,
                      carClasses,
                      setActiveCarClasses,
                      activeCarClasses
                    )
                  }
                >
                  {carClass}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="form-group">
        <h2 className="form-group-title">Body Type</h2>
        <div className="body-type-btns">
          <button
            className={`btn btn-car-img-all ${
              activeBodyTypes.length === bodyTypes.length ? "active" : ""
            }`}
            onClick={() =>
              handleClick("All", bodyTypes, setActiveBodyTypes, activeBodyTypes)
            }
          >
            All
          </button>
          <div className="car-img-list">
            {bodyTypes.map((bodyType, index) => (
              <div className="car-img-wrapper" key={index}>
                <img
                  className="car-img"
                  src={bodyTypesImages[index]}
                  alt={bodyType}
                />
                <button
                  key={index}
                  className={`btn btn-body-type ${
                    activeBodyTypes.includes(bodyType) ? "active" : ""
                  }`}
                  onClick={() =>
                    handleClick(
                      bodyType,
                      bodyTypes,
                      setActiveBodyTypes,
                      activeBodyTypes
                    )
                  }
                >
                  {bodyType}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="form-group">
        <h2 className="form-group-title">Additional</h2>
        <textarea
          className="additional-text-area"
          value={additional}
          onChange={(e) => setAdditional(e.target.value)}
          placeholder="Enter additional information"
        ></textarea>
      </div>

      <div className="form-group">
        <button className="btn btn-submit" onClick={handleSubmit}>
          Search
        </button>
      </div>

      {
        cars.length > 0 &&
        <div className="form-group">
          <h2 className="form-group-title">Results</h2>
          <CarList carsResults={cars} />
        </div>
      }
    </div>
  );
};

export default Shop;
