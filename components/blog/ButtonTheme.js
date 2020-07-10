import { Component } from "react";

class ButtonTheme extends Component {
  constructor() {
    super();
    this.state = {
      buttonTheme: { className: null, icon: null, text: null },
      light_theme: {
        buttonStyle: {
          className: "btn btn-model3",
          text: "Dark Mode",
          icon: "🌙",
        },
        elementStyle: { color: "white", textColor: "black" },
      },
      dark_theme: {
        buttonStyle: {
          className: "btn btn-model1",
          text: "Light Mode",
          icon: "☀️",
        },
        elementStyle: { color: "#17212b", textColor: "#ecf0f1" },
      },
    };
  }

  componentDidMount() {
    const themeMode = window.localStorage.getItem("themeMode");
    const themeKey = themeMode ? themeMode : "light_theme";

    const { documentElement } = document;
    const { elementStyle } = this.state[themeKey];
    documentElement.style.setProperty("--theme-color", elementStyle.color);
    documentElement.style.setProperty(
      "--theme-text-color",
      elementStyle.textColor
    );

    this.setState((state) => ({
      buttonTheme: { ...state[themeKey].buttonStyle },
    }));
  }

  handleClick = (e) => {
    const themeColor = "--theme-color";
    const themeTextColor = "--theme-text-color";

    const { localStorage } = window;
    const themeMode = localStorage.getItem("themeMode");
    const { style } = document.documentElement;

    const themeKey = themeMode == "light_theme" ? "dark_theme" : "light_theme";
    const { elementStyle } = this.state[themeKey];

    style.setProperty(themeColor, elementStyle.color);
    style.setProperty(themeTextColor, elementStyle.textColor);
    this.setState((state) => ({
      buttonTheme: { ...state[themeKey].buttonStyle },
    }));
    localStorage.setItem("themeMode", themeKey);
  };
  render() {
    const { buttonTheme } = this.state;

    return (
      <button className={buttonTheme.className} onClick={this.handleClick}>
        {buttonTheme.icon}
        <span className="theme-button-text"> {buttonTheme.text}</span>
      </button>
    );
  }
}

export default ButtonTheme;
