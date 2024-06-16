import "../css/Header.css";

function Header() {
  const handleJumpToChoicePrompt = () => {
    const choicePromptElement = document.getElementById("choice-prompt");
    if (choicePromptElement) {
      choicePromptElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1>Find the best car deals with advanced filters and AI search</h1>
          <button className="header-button" onClick={handleJumpToChoicePrompt}>Start now</button>

        </div>
      </div>
    </header>
  );
}

export default Header;
