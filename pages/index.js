import Head from "next/head";
import { Component } from "react";
import IndexMenuBar from "../components/index/IndexMenuBar";
import IndexHeroBackground from "../components/index/IndexHeroBackground.js";
import IndexBlogContent from "../components/index/IndexBlogContent";

class Home extends Component {
  render() {
    return (
      <div>
        <IndexMenuBar />
        <IndexHeroBackground />
        <IndexBlogContent />
        <IndexBlogContent />
      </div>
    );
  }
}

export default Home;
