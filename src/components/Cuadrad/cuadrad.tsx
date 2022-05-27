import React from "react";
import styles from "./styles.module.scss";

function Cuadrad () {
    return (
        <>
          <h2 className={styles.container}>Квадратные корни:</h2>
          <p>Корни квадратного уравнения находят по формуле -</p>
          <p>x<sub>1,2</sub>= (-b ± √D) / 2a</p>
        </>
    );
}
export default Cuadrad;