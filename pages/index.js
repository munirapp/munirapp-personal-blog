import Head from "next/head";
import { Component } from "react";
import IndexHeroBackground from "../components/index/IndexHeroBackground.js";

class Home extends Component {
  render() {
    return (
      <div>
        <IndexHeroBackground />
      </div>
    );
  }
}

export default Home;
