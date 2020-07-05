import { useState } from "react";

export default function ButtonTheme() {
  const light_theme = {
    buttonStyle: {
      className: "btn btn-model3",
      text: "Dark Mode",
      icon: "🌙",
    },
    elementStyle: { color: "white", textColor: "black" },
  };
  const dark_theme = {
    buttonStyle: {
      className: "btn btn-model1",
      text: "Light Mode",
      icon: "☀️",
    },
    elementStyle: { color: "#17212b", textColor: "#ecf0f1" },
  };

  const [buttonStyle, setButtonStyle] = useState(light_theme.buttonStyle);

  const handleClick = () => {
    const element = document.documentElement;
    const selected_theme = getComputedStyle(element).getPropertyValue(
      "--theme-color"
    );

    if (!selected_theme || selected_theme == "white") {
      element.style.setProperty("--theme-color", dark_theme.elementStyle.color);
      element.style.setProperty(
        "--theme-text-color",
        dark_theme.elementStyle.textColor
      );
      setButtonStyle(dark_theme.buttonStyle);
    } else {
      element.style.setProperty(
        "--theme-color",
        light_theme.elementStyle.color
      );
      element.style.setProperty(
        "--theme-text-color",
        light_theme.elementStyle.textColor
      );
      setButtonStyle(light_theme.buttonStyle);
    }
  };

  return (
    <button className={buttonStyle.className} onClick={handleClick}>
      {buttonStyle.icon}
      <span className="theme-button-text"> {buttonStyle.text}</span>
    </button>
  );
}
