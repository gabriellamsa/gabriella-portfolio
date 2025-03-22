import logo from "../assets/images/logo.png";

export const Navebar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={100} height={83} />
        </a>
      </div>
    </nav>
  );
};
