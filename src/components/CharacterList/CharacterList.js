import React from 'react';
import styles from './CharacterList.module.css';

const CharacterList = (props) => {
    //console.log(props.schedule);
    //console.log(props.characters);
    return (
        <ul className={styles.CharacterList}>
           {props.characters.map((character, index) =>  
            <li 
                key={index} 
                onClick={() => { props.clicked(character, props.schedule); }}
                className={ character === props.schedule.find( x => x.id === character.id) ? 
                    [styles.Scheduled, styles.Character].join(' ') : 
                    styles.Character}> 
                    <div className={styles.Portrait}>
                        <img src={'./assets/images/characters/'+character.id+'.png'} alt={character.name}/>
                    </div>
                    <span>{character.name}</span>
            </li>)}
        </ul>
    );
};

export default CharacterList;