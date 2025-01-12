const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content part={course.parts} />

      <Total exercisePart={course.parts} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ name, exercise }) => {
  return (
    <>
      <p>
        {name} {exercise}
      </p>
    </>
  );
};

const Content = ({ part }) => {
  return (
    <>
      {part.map((item, index) => (
        <Part key={index} name={item.name} exercise={item.exercises} />
      ))}
    </>
  );
};

const Total = ({ exercisePart }) => {
  const totalExercises = exercisePart?.reduce(
    (sum, item) => sum + item.exercises,
    0
  );

  return <p>Number of exercises {totalExercises}</p>;
};

export default App;
