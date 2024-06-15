import { useState } from "react";
import PropTypes from "prop-types";
import "../css/ChoicePrompt.css";

function ChoicePrompt({ optionA, optionB, infoA, infoB }) {
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoice = (choice) => {
    setSelectedChoice(choice);
  };

  const handleKeyDown = (e, choice) => {
    if (e.key === "Enter") {
      handleChoice(choice);
    }
  };

  return (
    <div id="choice-prompt">
      <div className="question">Would you rather drive a ...</div>
      <div className="choice-prompt">
        <div
          className="choice choice-a"
          onClick={() => handleChoice("A")}
          role="button"
          tabIndex="0"
          onKeyDown={(e) => handleKeyDown(e, "A")}
        >
          {optionA}
          {selectedChoice === "A" && (
            <ul className="info info-a">
              {infoA.map((item, index) => (
                <li className="info-item" key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <div
          className="choice choice-b"
          onClick={() => handleChoice("B")}
          role="button"
          tabIndex="0"
          onKeyDown={(e) => handleKeyDown(e, "B")}
        >
          {optionB}
          {selectedChoice === "B" && (
            <ul className="info info-b">
              {infoB.map((item, index) => (
                <li className="info-item" key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

ChoicePrompt.propTypes = {
  optionA: PropTypes.string.isRequired,
  optionB: PropTypes.string.isRequired,
  infoA: PropTypes.array.isRequired,
  infoB: PropTypes.array.isRequired,
  customStyles: PropTypes.object,
};

ChoicePrompt.defaultProps = {
  customStyles: {},
};

export default ChoicePrompt;
