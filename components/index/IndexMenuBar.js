export default function IndexMenuBar() {
  const list_menu = [
    { icon: "/image/user.svg", link: "#home" },
    { icon: "/image/dialogue.svg", link: "#blog" },
    { icon: "/image/gallery.svg", link: "#portofolio" },
    { icon: "/image/flasks.svg", link: "#labs" },
    { icon: "/image/drink.svg", link: "#contact" },
  ];
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
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
