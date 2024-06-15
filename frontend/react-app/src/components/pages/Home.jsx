import React from "react";
import Header from "../Header";
import ChoicePrompt from "../ChoicePrompt";

function Home() {
  return (
    <>
      <Header />
      <ChoicePrompt
        optionA="Mercedes Maybach"
        optionB="Toyota Camry"
        infoA="The Mercedes Maybach offers unparalleled luxury and performance. It is fast and packed with high-end features, providing an exceptional driving experience. BUT it comes with a very high price tag and expensive maintenance costs."
        infoB="The Toyota Camry is a reliable and affordable option with great fuel efficiency and a comfortable ride. It is known for its durability and low cost of ownership. BUT it lacks the luxurious features and performance of high-end cars like the Maybach."
      />
    </>
  );
}

export default Home;
