export default function IndexMenuBar() {
  const list_menu = [
    { icon: "/image/user.svg", link: "#home" },
    { icon: "/image/dialogue.svg", link: "#blog" },
    { icon: "/image/gallery.svg", link: "#portofolio" },
    { icon: "/image/flasks.svg", link: "#labs" },
    { icon: "/image/drink.svg", link: "#hiring" },
  ];
  return (
    <div className="menubar lg:animate__animated lg:animate__menubar lg:animate__delay-2s">
      <ul>
        {list_menu.map((item) => {
          return (
            <li>
              <a href={item.link}>
                <img src={item.icon} alt={item.link} loading="lazy" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
