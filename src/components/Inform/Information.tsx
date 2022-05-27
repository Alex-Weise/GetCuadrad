import React from "react";
import styles from './styles.module.scss'

function Inform () {
    return (
        <>
        <div>
          <h3>Квадратные уравнения:</h3>
            <p>Уравнения вида <em>ax<sup>2</sup> + bx + c = 0 </em>,</p>
            <p>где <em>x</em> - переменная; <em>a, b, c</em> - любое число, причем <em> a - не равно 0!</em></p>
        </div>
        <div>
          <h3>Дискриминант:</h3>
              <p>это выражение <em> D = b<sup>2</sup> - 4ac</em></p>
        </div>
        <div>
          <h3>Квадратные корни:</h3>
            <p>Корни квадратного уравнения находят по формуле -</p>
            <p>x<sub>1,2</sub>= (-b ± √D) / 2a</p>
        </div>
        </>
    )

}

export default Inform;