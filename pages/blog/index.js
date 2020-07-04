import ButtonTheme from "../../components/general/ButtonTheme";

export default function Blog() {
  return (
    <div>
      <div className="container">
        <div className="flex items-center p-5">
          <a href="/">
            <span>Back to Home</span>
          </a>
          <div className="ml-auto">
            <ButtonTheme />
          </div>
        </div>
      </div>
    </div>
  );
}
