import React, { useState, useEffect, useContext, useCallback, useMemo } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import axios from "axios";
import { Context } from '../../store/Store'

const Characters = () => {
    //const [characterList, setCharacterList] = useState([]);
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

     const handleToggle = useCallback((character, schedule) => {
        const obj = schedule.filter(item => item.id === character.id);

        //Query
        if (obj.length !== 0) {  
            dispatchSchedule( {item: character, type: "remove"} );
        }else{
            dispatchSchedule( {item: character, type: "add"} );
            console.log(schedule);
        }
    },[dispatchSchedule])

    const characterListItem = useMemo(() => {
        return <CharacterList characters={characterList} schedule={schedule} clicked={handleToggle} />
        
    }, [characterList, schedule, handleToggle]);

    return (
        <div>
            this is the characters list
            <div>Filters</div>
            {characterListItem}
        </div>
    );
};

export default Characters;