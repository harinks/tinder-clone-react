import React, { useState } from 'react';
import './ChatScreen.css';
import Avatar from '@mui/material/Avatar';

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessage] = useState([
        {
            name: 'sarah',
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/408px-Elon_Musk_2015.jpg",
            message: 'whats up'
        },
        {
            name: 'sarah',
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/408px-Elon_Musk_2015.jpg",
            message: 'hows its going!'
        },
        {
            message: "hello hi"
        }
    ])

    const handleSend = e => {
        e.preventDefault();

        setMessage([...messages, {message: input}]);
        setInput('');
    }

    return <div className='chatScreen'>
        <p className='chatScreen_timestamp'> YOU MATCHED WITH SARAH ON 10/01/2022</p>
        {messages.map((message) =>
            message.name ? (
                <div className='chatScreen_message'>
                    <Avatar
                        className='chatScreen_image'
                        alt={message.name}
                        src={message.image}
                    />
                    <p className='chatScreen_text'>{message.message}</p>
                </div>
            ) : (
                <div className='chatScreen_message'>
                    <p className='chatScreen_textuser'>{message.message}</p>
                </div>
            )
        )}
        <form className='chatScreen_input'>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='chatScreen_inputfield'
                type="text" placeholder='Type a message...' />
            <button onClick={handleSend} type='submit' className='chatScreen_button'>SEND</button>
        </form>
    </div>;
}

export default ChatScreen;
