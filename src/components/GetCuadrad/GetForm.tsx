import React, { useState } from "react";
import { getCuadrad } from "../../lib/getCuadrad";
import styles from "./styles.module.scss";

function GetForm () {
    const [valueA, setValueA] = useState(1);
    const [valueB, setValueB] = useState(1);
    const [valueC, setValueC] = useState(1);
    const [result, setResult] = useState('');

    const handleCompute = () => {
        setResult(getCuadrad(valueA, valueB, valueC))
    }

    return (
        <div>
          <h2>Итак, приступим к расчетам!</h2>
          <div>
              <p>Введите коэфициенты уравнения a, b и c:</p>
                 <p>1-Коэфициент a - <input 
                    type="number" size={10} placeholder={"не равный 0"}
                    onChange={(e) => setValueA(Number(e.target.value))}></input></p>
                 <p>2-Коэфициент b - <input 
                    type="number" size={10} placeholder={"Коэфициэнт b"}
                    onChange={(e) => setValueB(Number(e.target.value))}></input></p>
                 <p>3-Коэфициент c - <input 
                    type="number" size={10} placeholder={"Коэфициэнт c"}
                    onChange={(e) => setValueC(Number(e.target.value))}></input></p>
            <h2>Узнать корни уравнения - 
                <button className={styles.container}
                onClick={handleCompute}>
                Искать!</button>
            </h2>
            {!!result && (<p>{result}</p>)}
          </div>
        </div>
    );
}

export default GetForm;
