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
        infoA={`
        Offers unparalleled luxury and performance.

        It is fast and packed with high-end features.

        Provides an exceptional driving experience.

        But it comes with a very high price tag and expensive maintenance costs.
        `.trim()}
        infoB={`
        It is a reliable and affordable option with great fuel efficiency and a comfortable ride.
        It is known for its durability and low cost of ownership.
        But it lacks the luxurious features and performance of high-end cars like the Maybach.
        `.trim()}
      />
    </>
  );
}

export default Home;
