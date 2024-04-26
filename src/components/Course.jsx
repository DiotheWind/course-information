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

export default Course
