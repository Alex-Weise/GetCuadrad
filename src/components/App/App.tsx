import React from 'react';
import styles from './styles.module.scss';
import Inform from '../Inform/Information';
import GetForm from '../GetCuadrad/GetForm';
import { GetCuadrad } from '../TextContent/TextContent';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
       <Inform />
      </header>
      <main className={styles.Main}>
        <GetForm />
      </main>
    </div>
  );
}

export default App;
