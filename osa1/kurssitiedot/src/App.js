const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}
const Content = (props) => {

  return (
    <div>
      <Part name={props.courses[0].name} exercise={props.courses[0].exercises} />
      <Part name={props.courses[1].name} exercise={props.courses[1].exercises} />
      <Part name={props.courses[2].name} exercise={props.courses[2].exercises} />
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.courses[0].exercises + props.courses[1].exercises + props.courses[2].exercises}</p>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercise}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  return (
    <div>
      <Header course={course} />
      <Content courses={parts} />
      <Total courses={parts} />
    </div>
  )
}

export default App