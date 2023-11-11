import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import Button from "../Button/Button";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <img className="w-logo" src="/logo2.png" alt="logo-img" />
          <div className="col row justify-content-end align-items-center">
            <NavBar />
            <Button btnValue="Entrar" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
