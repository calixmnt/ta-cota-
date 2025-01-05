import React, {useState} from "react";

interface ContributionFormProps  {
    who : string,
}

function ContributionForm({who} : ContributionFormProps) {

    const [montant, setMontant] = useState('');
    const [date, setDate] = useState('');
    const [screenshot, setScreenshot] = useState(null);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(screenshot,who);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                Montant:
                <input
                    type="number"
                    value={montant}
                    onChange={(e) => setMontant(e.target.value)}
                    required
                />
            </label>
            <br/>

            <label>
                Date:
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </label>
            <br/>
            <label>
                Screenshot:
                <input
                    type="file"
                    onChange={(e) => setScreenshot(e.target.files[0])}
                    accept="image/*"
                />
            </label>
            <br/>

            <button type="submit">Soumettre</button>

        </form>
    )
}

export default ContributionForm;