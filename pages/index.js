import Head from "next/head";
import { Component } from "react";
import IndexMenuBar from "../components/index/IndexMenuBar";
import IndexHeroBackground from "../components/index/IndexHeroBackground.js";
import IndexBlogContent from "../components/index/IndexBlogContent";
import IndexPortofolioContent from "../components/index/IndexPortofolioContent";
import IndexLabsContent from "../components/index/IndexLabsContent";
import IndexContactContent from "../components/index/IndexContactContent";

class Home extends Component {
  render() {
    return (
      <div>
        <IndexMenuBar />
        <IndexHeroBackground />
        <IndexBlogContent />
        <IndexPortofolioContent />
        <IndexLabsContent />
        <IndexContactContent />
      </div>
    );
  }
}

export default Home;
