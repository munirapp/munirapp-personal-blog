import Head from "next/head";
import { Component } from "react";
import IndexMenuBar from "../components/index/IndexMenuBar";
import IndexHeroBackground from "../components/index/IndexHeroBackground.js";

class Home extends Component {
  render() {
    return (
      <div>
        <IndexMenuBar />
        <IndexHeroBackground />
      </div>
    );
  }
}

export default Home;
