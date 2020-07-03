export default function Blog() {
  const handleClick = () => {
    const light_theme = { color: "white", textColor: "black" };
    const dark_theme = { color: "black", textColor: "white" };

    const element = document.documentElement;
    const selected_theme = getComputedStyle(element).getPropertyValue(
      "--theme-color"
    );

    if (!selected_theme || selected_theme == "white") {
      element.style.setProperty("--theme-color", "black");
      element.style.setProperty("--theme-color-text", "white");
    } else {
      element.style.setProperty("--theme-color", "white");
      element.style.setProperty("--theme-color-text", "black");
    }

    console.log(selected_theme);
  };

  return (
    <div>
      <div className="container">
        <div className="flex">
          <a href="/">
            <span>Back to Home</span>
          </a>
          <button className="btn btn-model2 ml-auto" onClick={handleClick}>
            Go to Night Mode
          </button>
        </div>
      </div>
    </div>
  );
}
