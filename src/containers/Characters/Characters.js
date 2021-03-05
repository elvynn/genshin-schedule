import React, { useState, useEffect, useContext } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import axios from "axios";
import { Context } from '../../hoc/Store'

const Characters = React.memo(() => {
    const [characterList, setCharacterList] = useState([]);
    const [schedule, dispatchSchedule] = useContext(Context);

    useEffect(() => {
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
        }).catch( error => console.log("error!"));
    },[]);

     const handleToggle = (character, schedule) => {
        const obj = schedule.filter(item => item.id === character.id);

        //Query
        if (obj.length !== 0) {  
            dispatchSchedule( {item: character, type: "remove"} );
        }else{
            dispatchSchedule( {item: character, type: "add"} );
        }
    }

    return (
        <div>
            this is the characters list
            <CharacterList characters={characterList} schedule={schedule} clicked={handleToggle} />
        </div>
    );
});

export default Characters;