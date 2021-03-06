import React, { useState } from "react";
import styles from "./styles.module.scss";

function GetForm () {
    const [valueA, setValueA] = useState(1);
    const [valueB, setValueB] = useState(1);
    const [valueC, setValueC] = useState(1);

    function GetCuadrad () {
      if (valueA <= 0 || typeof valueB !== 'number' || typeof valueC !== 'number') {
          throw new Error("Не корректные коэфициенты");
      }
      let discrim = Math.pow(valueB, 2) - 4 * valueA * valueC;
      if (discrim < 0) {
          return (<p>Дискриминант = {discrim}. Корней нет!</p>)
      }
      else if (discrim === 0) {
          return <p>Дискриминант = {discrim}. Один корень: {(-valueB + Math.sqrt(discrim)) / 2 * valueA}</p>
      } else {
      let x1 = (-valueB + Math.sqrt(discrim)) / 2 * valueA;
      let x2 = (-valueB - Math.sqrt(discrim)) / 2 * valueA;
       return <p>Дискриминант = {discrim}. Корень x1 = {x1}; корень x2 = {x2}</p>
      }
    }
    return (
        <div className={styles.container}>
          <h2>Итак, приступим к расчетам!</h2>
          <div>
              <p>Введите коэфициенты уравнения a, b и c:</p>
                 <p>1-Коэфициент a - <input 
                    type={"number"} size={10} placeholder={"не равный 0"}
                    onChange={(e) => setValueA(+e.target.value)}></input></p>
                 <p>2-Коэфициент b - <input 
                    type={"number"} size={10} placeholder={"Коэфициэнт b"}
                    onChange={(e) => setValueB(+e.target.value)}></input></p>
                 <p>3-Коэфициент c - <input 
                    type={"number"} size={10} placeholder={"Коэфициэнт c"}
                    onChange={(e) => setValueC(+e.target.value)}></input></p>
            <h2>Узнать корни уравнения - <button 
                className={styles.container} onClick={() => GetCuadrad()}>
                <img src="logo32.png" alt="Квадратный корень"></img>Искать!</button>
            </h2>
          </div>
          <h2><GetCuadrad /></h2>
        </div>
    );
}
export default GetForm;


