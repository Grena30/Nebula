import "../../css/Tutorial.css";

const Tutorial = () => {
  return (
    <section id="tutorial">
      <h2 className="tutorial-title">
        In order to <span className="title-accent">get started</span> you need to follow these steps:
      </h2>
      <ol className="tutorial-list">
        <li className="tutorial-list-item">Click on shop button</li>
        <li className="tutorial-list-item">Fill in the filters</li>
        <li className="tutorial-list-item">Get desired results</li>
      </ol>
    </section>
  );
};

export default Tutorial;
