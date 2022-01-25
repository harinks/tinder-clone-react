import React from 'react-dom';
import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    //bem class name convention
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/' element={[<Header />,<TinderCards />,<SwipeButtons />]} />
          {/* header */}
          {/* tindercard */}
          {/* swipebutton */}
          <Route path='/chat' element={[<Header backButton/>]}/>
          {/* header with back button */}
          {/* chat screen */}
          {/* individual chat screen */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
