import React from 'react';
import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    //bem class name convention
    <div className='app'>
      <Header/> {/* header */}
      <TinderCards /> {/* tindercard */}
      <SwipeButtons /> {/* swipebutton */}
    </div>
  );
}

export default App;
