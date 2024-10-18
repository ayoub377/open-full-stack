import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [anecdote_votes, setanecdote_votes] = useState(Array(anecdotes.length).fill(0));
  const [highest,sethighest] = useState(0)

  const generate_anecdote = ()=> {
   const generated = Math.floor(Math.random() * (anecdotes.length))
      setSelected(generated)
  }

    const handle_vote = () =>{
        const anectodes_copy = [...anecdote_votes];
        anectodes_copy[selected] += 1
        setanecdote_votes(anectodes_copy)
        const highest_vote = Math.max(...anecdote_votes)
        const index = anecdote_votes.indexOf(highest_vote)
        console.log(index)
        sethighest(index)
    }

  return (
      <div>
        {anecdotes[selected]} has {anecdote_votes[selected]}
          <br/>
        <button onClick={handle_vote} style={{backgroundColor:"green"}}>vote</button>
        <button onClick={generate_anecdote} style={{backgroundColor:"red"}}>next anecdote</button>
          <br/>
          <h2>Anecdote With most votes</h2>
          {anecdotes[highest]} has {anecdote_votes[highest]}
      </div>
  )
}

export default App