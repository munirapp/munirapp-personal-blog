import React, { Component, useState} from "react";

class IndexMenuBar extends Component {
  const [list_item, set_list_item]
  handleClick = (e) => {};
  render() {
    console.log(this.props);
    return <div>test</div>;
    return (
      <div className="menubar">
        <ul>
          {list_menu.map((item) => {
            return (
              <li key={item.link}>
                <a href={item.link}>
                  <img
                    className="animate__animated animate__zoomIn"
                    src={item.icon}
                    alt={item.link}
                    loading="lazy"
                    onClick={this.handleClick}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

// export const getStaticProps = () => {
//   return {
//     props: {
//       list_menu: [
//         { icon: "/image/user.svg", link: "#home" },
//         { icon: "/image/dialogue.svg", link: "#blog" },
//         { icon: "/image/gallery.svg", link: "#portofolio" },
//         { icon: "/image/flasks.svg", link: "#labs" },
//         { icon: "/image/drink.svg", link: "#hiring" },
//       ],
//     },
//   };
// };

export default IndexMenuBar;
