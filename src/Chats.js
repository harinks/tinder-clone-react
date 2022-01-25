import React from 'react';
//import './Chats.css';
import Chat from './Chat';

function Chats() {
  return <div className='chats'>
      <Chat
      name = 'Sarah'
      message = 'hey! how are you'
      timestamp = '13 minutes ago'
      profilePic = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/408px-Elon_Musk_2015.jpg'
      />
      <Chat
      name = 'Sarah'
      message = 'hey! how are you'
      timestamp = '13 minutes ago'
      profilePic = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/408px-Elon_Musk_2015.jpg'
      />
  </div>;
}

export default Chats;
