const Course = ({ course }) => {
  return (
    <div>
      <Header heading={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ heading }) => {
  return <h1>{heading}</h1>
}

const Content = ({ parts }) => {
  return (
      <div>
        <ul>
          {parts.map(part => (
            <Part key={part.id} part={part} />
          ))}
        </ul>
      </div>
  )
}

const Part = ({ part }) => {
  return <li>{part.name} {part.exercises}</li>
}

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p><b>total of {totalExercises} exercises</b></p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "state of a component",
        exercises: 14,
        id: 3
      },
      {
        name: 'Using git and github',
        exercises: 4,
        id: 4
      }
    ],
  }

  return (
    <Course course={course} />
  )
}

export default App
