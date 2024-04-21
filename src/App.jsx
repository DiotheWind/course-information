const Header = (props) => {
  return (
    <>
      <h1>{props.heading}</h1>
    </>
  )
}

const Content = (props) => {
  return (
      <>
        <Part part={props.course[0].name} exercises={props.course[0].exercises} />
        <Part part={props.course[1].name} exercises={props.course[1].exercises} />
        <Part part={props.course[2].name} exercises={props.course[2].exercises} />
      </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part}: {props.exercises}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises: {props.total}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "state of a component",
        exercises: 14
      }
    ],
  }

  return (
    <div>
      <Header heading={course.name} />
      <Content course={course.parts} />
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App
