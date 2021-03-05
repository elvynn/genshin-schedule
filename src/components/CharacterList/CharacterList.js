import React from 'react';

const CharacterList = (props) => {
    //console.log(props.characters);
    const output = null;
    
    return (
        <ul>
           {props.characters.map((character, index) =>  
            <li 
                key={index} 
                onClick={() => {
                    props.clicked(character, props.schedule);
                }}
                className={ character === props.schedule.find( x => x.name === character.name) ? "scheduled" : null}> {character.name}</li>)}
        </ul>
    );
};

export default CharacterList;