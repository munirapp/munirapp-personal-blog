import ButtonTheme from "./ButtonTheme";

export default function BlogHeader({ linkBack, textBack }) {
  return (
    <div className="menu-blog">
      <a href={linkBack}>
        <span className="text-xl"> &larr; {textBack}</span>
      </a>
      <div className="ml-auto">
        <ButtonTheme />
      </div>
    </div>
  );
}
