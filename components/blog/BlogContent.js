import { Component } from "react";
import { highlightBlock } from "highlight.js";

class BlogContent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.querySelectorAll("pre code").forEach((block) => {
      highlightBlock(block);
    });

    document.querySelectorAll("input[type=checkbox]").forEach((list) => {
      list.parentElement.style.listStyle = "none";
    });
  }

  render() {
    const { content } = this.props;

    return (
      <div className="blog-body">
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    );
  }
}

export default BlogContent;
