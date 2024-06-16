import "../../css/Tutorial.css";

const Tutorial = () => {
  return (
    <section id="tutorial">
      <h2 className="tutorial-title">
        In order to <span className="title-accent">get started</span> and find
        the perfect car for you, follow these steps:
      </h2>
      <ol className="tutorial-list">
        <li className="tutorial-list-item">
          <span className="bullet-point">Choose your brand:</span> Brands
          represent manufacturers known for quality, design, and performance.
          Whether you prefer <span className="accent-word">luxury</span> from
          BMW, <span className="accent-word">prestige</span> and{" "}
          <span className="accent-word">comfort</span> with Mercedes, or Audi's
          blend of technology and <span className="accent-word">style</span>,
          selecting a brand aligns your preferences with specific automotive
          characteristics.
        </li>
        <li className="tutorial-list-item">
          <span className="bullet-point">Select your powertrain:</span> The
          powertrain determines how a vehicle generates{" "}
          <span className="accent-word">power</span> and delivers it to the
          wheels. Choose from diesel engines for{" "}
          <span className="accent-word">efficiency</span> and torque, electric
          vehicles (EVs) for eco-friendliness and{" "}
          <span className="accent-word">quiet operation</span>, hybrids for fuel
          efficiency and reduced emissions, or petrol engines for{" "}
          <span className="accent-word">versatility</span> and acceleration.
        </li>
        <li className="tutorial-list-item">
          <span className="bullet-point">Decide on a car class:</span> Car
          classes categorize vehicles by size, features, and use. Luxury cars
          prioritize <span className="accent-word">comfort</span> and advanced
          technology, sports cars emphasize{" "}
          <span className="accent-word">performance</span> and agility, SUVs
          offer space and <span className="accent-word">versatility</span>,
          while compact cars focus on efficiency and
          <span className="accent-word">affordability</span>.
        </li>
        <li className="tutorial-list-item">
          <span className="bullet-point">Pick the body type:</span> Body types
          define a vehicle’s structure and functionality. Sedans offer comfort
          and <span className="accent-word">everyday use</span>, coupes feature
          a <span className="accent-word">sleek design</span> and sporty feel,
          hatchbacks provide versatile cargo space, and crossovers combine SUV
          and car features for varied lifestyles.
        </li>
        <li className="tutorial-list-item">
          <span className="bullet-point">Provide additional information:</span>{" "}
          Use <span className="accent-word">custom filters</span> to refine your
          search with criteria like seating capacity, fuel efficiency, and
          safety features tailored to your needs.
        </li>
        <li className="tutorial-list-item">
          <span className="bullet-point">
            Explore results and make your choice: 
          </span> Our AI generates results matching your preferences. Review detailed
          listings, including photos and seller details. Contact sellers through
          our platform to arrange a test drive and finalize your purchase
          confidently.
        </li>
      </ol>
    </section>
  );
};

export default Tutorial;
