import { useState } from 'react'

const Statistics = ({good,neutral,bad}) => {
    const total = good+bad+neutral
    const getAverage = (good - bad) / total
    const positive = (good / total) * 100 || 0;

    return (
        <div>
            <p>Statistics</p>
            <div>
                {total > 0 ? (
                    <div>
                        <p>good {good}</p>
                        <p>neutral {neutral}</p>
                        <p>bad {bad}</p>
                        <p>All {total}</p>
                        <p>Average {getAverage}</p>
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

    const handleGood = () => {
          const good_score = good + 1
          setGood(good_score)
    }

    const handleNeutral = () => {
        const neutral_score = neutral + 1
        setNeutral(neutral_score)
    }

    const handleBad = () => {
        const  bad_score = bad + 1
        setBad(bad_score)
    }



    return (
    <div>
      <p>give feedback</p>
        <div>
            <button onClick={handleGood}>good</button>
            <button onClick={handleNeutral}>neutral</button>
            <button onClick={handleBad}>bad</button>
        </div>
        <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App