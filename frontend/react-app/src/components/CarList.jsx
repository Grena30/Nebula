import Car from "./Car";
import "../css/CarList.css";
import Search from "./Search";
import { useState } from "react";

const CarList = () => {
  const carsJson = [
    {
      id: 1,
      make: "Toyota",
      model: "Corolla",
      year: 2019,
      color: "black",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_7owYsNpzm83pWAmgwv2RPpOASxACL-txw&s",
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      year: 2020,
      color: "white",
      imageUrl:
        "https://di-uploads-pod15.dealerinspire.com/wolfchasehonda/uploads/2019/12/2020-Honda-Civic-MLP-Hero.png",
    },
    {
      id: 3,
      make: "Ford",
      model: "F-150",
      year: 2018,
      color: "blue",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu2JxM71FMYtwwdO1BghrLYFDxpCrtNbZpeA&s",
    },
    {
      id: 4,
      make: "Porsche",
      model: "911",
      year: 2021,
      color: "red",
      imageUrl:
        "https://files.porsche.com/filestore/image/multimedia/none/992-c2cab-modelexplorer-04/normal/81ea4749-cf38-11eb-80d9-005056bbdc38;sS;twebp065/porsche-normal.webp",
    },
    {
      id: 5,
      make: "Dacia",
      model: "Sandero",
      year: 2020,
      color: "gray",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLVCnMp1qGWE5W8KueC5s4mdnEQ06enSdNnQ&s",
    },
    {
      id: 6,
      make: "Lamborghini",
      model: "Aventador",
      year: 2022,
      color: "yellow",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQ5emwbtsv7iW9EUH4X2-xMnGKUlrsVWUSQ&s",
    },
  ];
  const [cars, setCars] = useState(carsJson);

  return (
    <div className="car-container">
      <Search carsJson={carsJson} cars={cars} setCars={setCars} />
      <div className="car-list">
        {cars.map((car) => (
          <Car key={car.id} car={car} />
        ))}
        {cars.length === 0 && <h2 className="no-cars">No cars found</h2>}
      </div>
    </div>
  );
};

export default CarList;
