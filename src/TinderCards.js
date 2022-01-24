import React, { useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "elon musk",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/408px-Elon_Musk_2015.jpg"
        },
        {
            name: "jeff bezz",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/408px-Elon_Musk_2015.jpg"
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing:" + nameToDelete);
        //setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen!")
    }
    return (
        <div className='tinderCards'>
            <div className='tinderCards_cardContainer'>
                {people.map((person) => (
                    <TinderCard className='swipe'
                        key={person.name}
                        preventSwipe={["left", "right"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}>

                        <div className='card' style={{ backgroundImage: `url(${person.url})` }}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards;
