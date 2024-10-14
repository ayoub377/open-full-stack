import { useState } from 'react'

const App = () => {
      // save clicks of each button to its own state
      const [good, setGood] = useState(0)
      const [neutral, setNeutral] = useState(0)
      const [bad, setBad] = useState(0)
      const [all,setAll] = useState(0)
      const [average, setAverage] = useState(0)

    const handleGood = () => {
          const good_score = good + 1
          const newAll = all +1
          setGood(good_score)
          setAll(newAll)
          const average_score = (good_score - bad) / newAll
          setAverage(average_score)
    }

    const handleNeutral = () => {
        const neutral_score = neutral + 1
        const newAll = all + 1
        setNeutral(neutral_score)
        setAll(newAll)
        const average_score = (good - bad) / newAll
            setAverage(average_score)
    }

    const handleBad = () => {
        const  bad_score = bad + 1
        const newAll = all + 1
        setBad(bad_score)
        setAll(newAll)
        const average_score = (good-bad_score) / newAll
        setAverage(average_score)
    }

    let postive = (good / all) * 100 || 0;

    return (
    <div>
      <p>give feedback</p>
        <div>
            <button onClick={handleGood}>good</button>
            <button onClick={handleNeutral}>neutral</button>
            <button onClick={handleBad}>bad</button>
        </div>
        <p>Statistics</p>
        <div>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
        </div>
        <p>All {all}</p>
        <p>Average {average}</p>
        <p>positive {postive} %</p>
    </div>
  )
}

export default App