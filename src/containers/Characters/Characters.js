import { React, useState, useReducer, useEffect } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import axios from "axios";

function scheduleReducer(state, action){
    switch (action.type){
        case 'add':
            return [...state, action.character];
        case 'remove':
            return [...state.filter(character => character.id !== action.character.id)];
        default:
            throw new Error("something went wrong");
    }
}

const Characters = () => {
    const [characterList, setCharacterList] = useState([]);
    //const [schedule, setSchedule] = useState([]);
    const[schedule, dispatchSchedule] = useReducer(scheduleReducer, []);

    useEffect(() => {
        //Load first character list and put it to the state (if new user)
        axios.get('https://genshin-schedule-2156e-default-rtdb.firebaseio.com/Characters.json')
        .then( response => {
            const loadedCharacters = [];
            for(const key in response.data){
                loadedCharacters.push({ 
                    type: "character",
                    id: key,
                    name: response.data[key].name,
                    material: response.data[key].material
                })
            }
            setCharacterList(loadedCharacters);
        })
    },[]);

     const handleToggle = (character, schedule) => {
        const obj = schedule.filter(item => item.name === character.name);
        if (obj.length !== 0) {  
            dispatchSchedule( {character: character, type: "remove"} );
        }else{
            dispatchSchedule( {character: character, type: "add"} );
        }
       
    }

    return (
        <div>
            this is the characters list
            <CharacterList characters={characterList} schedule={schedule} clicked={handleToggle} />
        </div>
    );
};

export default Characters;