import ContributionForm from "./components/contribution-form.tsx";
import ChoicePerso from "./components/choice-perso.tsx";
import {useState} from "react";
import supabase from "./supabase-client.ts";


function App() {

    const [choice, setChoice] = useState('');


    return (
        <>
            <div className="container">
                <ChoicePerso choice = {choice} setChoice= {setChoice}/>
                <h1>ta cota ?</h1>
                <ContributionForm who={choice}/>
            </div>
        </>
    )
}
//

export default App
