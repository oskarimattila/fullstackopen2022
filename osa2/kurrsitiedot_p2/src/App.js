const Header = (props) => {
  return (
    <h2>{props.course.name}</h2>
  )
}
const Content = ({content}) => {
  
  return (
    <ul>
      {content.map( part => 
        <Part name={part.name} exercise={part.exercises} key={part.id} />
      )}
    </ul>
  )
}
const Total = ({content}) => {
  return (
    <h3>
      Total number of exercises {content.reduce((sum, val) => sum + val.exercises, 0)}
    </h3>
  )
}
const Part = (props) => {
  console.log('props:', props)
  return (
    <li>
      {props.name} {props.exercise}
    </li>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      <ul>
        {courses.map(course =>
          <li key={course.id}>
            <Header course={course} />
            <Content content={course.parts} />
            <Total content={course.parts}  />
          </li>
        )}
      </ul>
    </div>
  )
}

export default App