
const Header = ({ course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Part = ({part, exercises}) => {
   return (<p>
        {part} {exercises}
      </p>)
}

const Content = ({parts}) => {
  return (
    <>
      {parts.map((p1) =>  (
        <Part key={p1.name} part={p1.name} exercises={p1.exercises} />
      ))}
    </>
  )
}

const Total = ({ total }) => {
  return (
    <>
      <p>Number of exercises {total[0].exercises + total[1].exercises + total[2].exercises}</p>
    </>
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
      <Header course={course.name} />
      <Content parts={course.parts}  />
      <Total total={course.parts} />

    </div>
  )
}

export default App