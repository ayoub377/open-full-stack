import {useState} from 'react'

const Button = (props) => {
    return (
        <button onClick={props.handlefeedback}>{props.feedback}</button>
    )
}

const StatisticLine = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({good, neutral, bad}) => {
    const total = good + bad + neutral
    const getAverage = (good - bad) / total
    const positive = (good / total) * 100 || 0;

    return (
        <div>
            <p>Statistics</p>
            <div>
                {total > 0 ? (
                    <table>
                        <StatisticLine text="good" value={good}/>
                        <StatisticLine text="neutral" value={neutral}/>
                        <StatisticLine text="bad" value={bad}/>
                        <StatisticLine text="All" value={total}/>
                        <StatisticLine text="average" value={getAverage}/>
                        <StatisticLine text="positive" value={positive}/>

                    </table>

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
        const bad_score = bad + 1
        setBad(bad_score)
    }

    return (
        <div>
            <p>give feedback</p>
            <div>
                <Button handlefeedback={handleGood} feedback="good"/>
                <Button handlefeedback={handleNeutral} feedback="neutral"/>
                <Button handlefeedback={handleBad} feedback="bad"/>
            </div>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App