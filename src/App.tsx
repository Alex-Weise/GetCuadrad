import React from 'react';
import './App.scss';
import GetForm from './components/Form/form';
import Cuadrad from './components/Cuadrad/cuadrad';
import Discrim from './components/Discr/discrim';
import Inform from './components/Info/inform';

function App() {
  return (
    <main className='App'> 
      <div className='column'>
         <Inform />
         <Discrim />
      </div>
      <Cuadrad />
      <GetForm />
    </main>
  );
}

export default App;
