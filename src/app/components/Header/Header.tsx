import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import Button from "../Button/Button";
const Header = () => {
  return (
    <header className="header">
      <div className="row">
        <img className="w-logo" src="/logo2.png" alt="logo-img" />
        <Button />
      </div>
    </header>
  );
};

export default Header;
