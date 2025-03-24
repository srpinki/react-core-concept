import { useState } from "react"

 const BatsMan = () => {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);

    const handleSingle = () => {
        const updateRuns = runs + 1;
        setRuns (updateRuns);
    }
    const handleFour = () => {
        const updateRuns = runs + 4;
        setRuns (updateRuns);
    }
    const handleSix = () => {
        const updateRuns = runs + 6;
        const updatedSixs = sixes + 1;
        setSixes(updatedSixs);
        setRuns (updateRuns);
    }
    return (

        <div>
            <h3>Player: Bangladeshi</h3>
            {
                <small>six: {sixes}</small>
            }
            {
                runs > 50 && <p>Your score: 50</p>
            }
            <h1>score: {runs}</h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
        
    )
}

export default BatsMan