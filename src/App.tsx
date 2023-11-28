import React from 'react';
import filter from './components/filter';
import paintings from './components/paintings';
import pagination from './components/pagination';
// import theme from './modules/App.module.scss';

function App() {


  return (
    <div className={theme.dark_theme}>

      <header className='header'>
        <img className='header__logo' src="./" alt="logo" />
        <button className='header__theme-switch'></button>
      </header>
     
     <filter/>
      {/* <paintings/>
      <pagination/> */}

    </div>
  );

}
var 12

export default App;
