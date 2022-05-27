import React from "react";
import styles from "./styles.module.scss";

// Вот пример работы модулей
// Сейчас все работает, поправь по всему приложению

function Cuadrad () {
    return (
        <>
          <h2 className={styles.title}>Квадратные корни:</h2>
          <p>Корни квадратного уравнения находят по формуле -</p>
          <p className="center">x<sub>1,2</sub>= (-b ± √D) / 2a</p>
        </>
    );
}
export default Cuadrad;