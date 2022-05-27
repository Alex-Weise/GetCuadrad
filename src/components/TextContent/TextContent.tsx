import React from "react";

function inform() {
   return ( 
   <div>
    <h2>Квадратные уравнения:</h2>
      <p>Уравнения вида <em>ax<sup>2</sup> + bx + c = 0 </em>,</p>
      <p>где <em>x</em> - переменная; <em>a, b, c</em> - любое число, причем <em> a - не равно 0!</em></p>
  </div>
   );
}

export function GetCuadrad (A: any, B: any, C: any) {
   if (A <= 0 || typeof B !== 'number' || typeof C !== 'number') {
       throw new Error("Не корректные коэфициенты");
   }
   let discrim = Math.pow(B, 2) - 4 * A * C;
   if (discrim < 0) {
       return (<p>Дискриминант = {discrim}. Корней нет!</p>)
   }
   else if (discrim === 0) {
       return <p>Дискриминант = {discrim}. Один корень: {(-B + Math.sqrt(discrim)) / 2 * A}</p>
   } else {
   let x1 = (-B + Math.sqrt(discrim)) / 2 * A;
   let x2 = (-B - Math.sqrt(discrim)) / 2 * A;
    return <p>Дискриминант = {discrim}. Корень x1 = {x1}; корень x2 = {x2}</p>
   }
 }