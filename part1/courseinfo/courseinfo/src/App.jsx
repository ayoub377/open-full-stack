import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const Header = (props)=>{
    return(
        <div>
        <h1>{props.course.name}</h1>
    </div>
    )
}

const Part = (props)=>{
    return (
        <div>
            <div>
                <p>
                    {props.part} {props.exercises}
                </p>
            </div>

        </div>
    )
}

const Content = (props) => {
    return (
        <>
            <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
            <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
            <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
        </>
    )
}

const Total = (props) => {
    const total_exercises = props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises;
    return (
        <div>
            <p>Number of exercises {total_exercises}</p>
        </div>
    )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
        <Header course={course}/>
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
  )
}

export default App