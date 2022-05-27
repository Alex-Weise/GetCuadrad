import React from 'react';
import styles from './styles.module.scss';
import GetForm from '../GetCuadrad/GetForm';
import Cotent from '../Content';

const CONTENT = {
  quad: {
    title: 'Квадратные уравнения:',
    text: <>
      <p>Уравнения вида <em>ax<sup>2</sup> + bx + c = 0 </em>,</p>
      <p>где <em>x</em> - переменная; <em>a, b, c</em> - любое число, причем <em> a - не равно 0!</em></p>
    </>,
  },
  discr: {
    title: 'Дискриминант:',
    text: <p>это выражение <em> D = b<sup>2</sup> - 4ac</em></p>,
  },
  roots: {
    title: 'Квадратные корни:',
    text: <>
      <p>Корни квадратного уравнения находят по формуле -</p>
      <p>x<sub>1,2</sub>= (-b ± √D) / 2a</p>
    </>,
  },
}

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
       <Cotent title={CONTENT.quad.title} text={CONTENT.quad.text} />
       <Cotent title={CONTENT.discr.title} text={CONTENT.discr.text} />
       <Cotent title={CONTENT.roots.title} text={CONTENT.roots.text} />
      </header>
      <main className={styles.Main}>
        <GetForm />
      </main>
    </div>
  );
}

export default App;
