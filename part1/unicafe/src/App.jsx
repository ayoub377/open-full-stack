import { useState } from 'react'

const Statistics = ({good,neutral,bad,all,average,positive}) => {
    return (
        <div>
            <p>Statistics</p>
            <div>
                {all > 0 ? (
                    <div>
                        <p>good {good}</p>
                        <p>neutral {neutral}</p>
                        <p>bad {bad}</p>
                        <p>All {all}</p>
                        <p>Average {average}</p>
                        <p>positive {positive} %</p>
                    </div>

                ) : (
                    <div>No feedback given</div>
                )
                }
            </div>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
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

    const positive = (good / all) * 100 || 0;

    return (
    <div>
      <p>give feedback</p>
        <div>
            <button onClick={handleGood}>good</button>
            <button onClick={handleNeutral}>neutral</button>
            <button onClick={handleBad}>bad</button>
        </div>
        <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App