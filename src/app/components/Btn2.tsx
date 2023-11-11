"use client";
import "./style.css";

const Btn2 = () => {
  function handleColor() {
    const button = document.getElementById("btn2");
    if (button) {
      button.style.backgroundColor = "red";
    }
  }
  return (
    <div>
      <button id="btn2" className="btn" onClick={handleColor}>
        Botao
      </button>
    </div>
  );
};

export default Btn2;
