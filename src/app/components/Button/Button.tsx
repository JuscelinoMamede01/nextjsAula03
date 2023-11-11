import "./button.css";

interface BtnValue {
  btnValue: string;
}
const Button = ({ btnValue }: BtnValue) => {
  return (
    <>
      <button className="button-7">{btnValue}</button>
    </>
  );
};

export default Button;
