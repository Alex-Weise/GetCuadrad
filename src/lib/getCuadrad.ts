export function getCuadrad (A: number, B: number, C: number) {
   if (A <= 0 || typeof B !== 'number' || typeof C !== 'number') {
       throw new Error("Не корректные коэфициенты");
   }

   let discrim = Math.pow(B, 2) - 4 * A * C;

   if (discrim < 0) {
       return `Дискриминант = ${discrim}. Корней нет!`
   }

   else if (discrim === 0) {
       return `Дискриминант = ${discrim}. Один корень: ${(-B + Math.sqrt(discrim)) / 2 * A}`
   } else {
   let x1 = (-B + Math.sqrt(discrim)) / 2 * A;

   let x2 = (-B - Math.sqrt(discrim)) / 2 * A;

    return `Дискриминант = ${discrim}. Корень x1 = ${x1}; корень x2 = ${x2}`
   }
 }
