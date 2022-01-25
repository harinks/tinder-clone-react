import React from 'react-dom';
import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';
import Chats from './Chats';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import ChatScreen from './ChatScreen';

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
          <Route path='/chat' element={[<Header backButton='/'/>,<Chats />]}/>
          {/* header with back button */}
          {/* chat screen */}
          <Route path='/chat/:person' element={[<Header backButton='/chat' />,<ChatScreen />]}/>
          {/* individual chat screen */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
