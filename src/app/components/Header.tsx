import { Paragrafo } from "./Paragrafo";
import { Titulo } from "./Titulo";
import "./style.css";

export const Header = () => {
  return (
    <div className="header">
      <h1>Header</h1>
      <Titulo />
      <Paragrafo />
    </div>
  );
};
