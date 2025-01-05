import React, {useEffect} from "react";
import {elle, lui} from "../data.ts";

export type Perso = {
    lastName : string;
    firstName : string;
    birthDate : Date;
    favoriteColor : string;
}

interface ChoicePersoProps  {
    choice : string,
    setChoice : React.Dispatch<React.SetStateAction<string>>
}

function ChoicePerso({choice, setChoice} : ChoicePersoProps) {

    useEffect(() => {
        const storedChoice = localStorage.getItem('userChoice');
        if (storedChoice) {
            setChoice(storedChoice);
        }
    }, []);

    const handleChoice = (whoami : string) => {
        if (!whoami) return;

        const userValues = whoami === 'elle' ? elle : lui
        setChoice(whoami);
        localStorage.setItem('userChoice', whoami);
        localStorage.setItem('userValues', JSON.stringify(userValues))
    }

    if (choice) {
        return <div>
          <p> vous êtes: {choice} </p>
            <p>finalement, vous n'êtes pas {choice} ?</p><button onClick={() => handleChoice(choice === 'elle' ? 'lui' : 'elle')}>changez !</button>
        </div>;
    }

    return (
        <>
            vous êtes ?
            <br/>
            <button onClick={() => handleChoice('elle')}>elle</button>
            <button onClick={() => handleChoice('lui')}>lui</button>
        </>
    )
}

export default ChoicePerso;