import React from "react";
import { useNavigate } from "react-router-dom";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
  const navigate = useNavigate();

  return (
    <div className="base container">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza && pizza.base === base ? "active" : "";
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>

      {pizza && pizza.base && (
        <div className="next">
          <button onClick={() => navigate("/toppings")}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Base;
