import { useState } from 'react';

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10,
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7,
//       },
//       {
//         name: 'State of a component',
//         exercises: 14,
//       },
//     ],
//   };

//   return (
//     <div>
//       <Header course={course.name} />
//       <Content part={course.parts} />

//       <Total exercisePart={course.parts} />
//     </div>
//   );
// };

// const Header = ({ course }) => {
//   return <h1>{course}</h1>;
// };

// const Part = ({ name, exercise }) => {
//   return (
//     <>
//       <p>
//         {name} {exercise}
//       </p>
//     </>
//   );
// };

// const Content = ({ part }) => {
//   return (
//     <>
//       {part.map((item, index) => (
//         <Part key={index} name={item.name} exercise={item.exercises} />
//       ))}
//     </>
//   );
// };

// const Total = ({ exercisePart }) => {
//   const totalExercises = exercisePart?.reduce(
//     (sum, item) => sum + item.exercises,
//     0
//   );

//   return <p>Number of exercises {totalExercises}</p>;
// };

// export default App;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [hasFeedbackData, setHasFeedbackData] = useState(false);
  const [selected, setSelected] = useState(0);
  const [anecdotes, setAnecdotes] = useState([
    { text: 'If it hurts, do it more often.', count: 0 },
    {
      text: 'Adding manpower to a late software project makes it later!',
      count: 0,
    },
    {
      text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      count: 0,
    },
    {
      text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      count: 0,
    },
    { text: 'Premature optimization is the root of all evil.', count: 0 },
    {
      text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      count: 0,
    },
    {
      text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      count: 0,
    },
    { text: 'The only way to go fast, is to go well.', count: 0 },
  ]);

  const currentAnecdoteValue = anecdotes.reduce((max, current) =>
    current.count > max.count ? current : max
  );

  const total = good + neutral + bad;
  const average = (good - bad) / (good + bad + neutral);
  const positivePercentage = good / (good + bad + neutral);

  const handGoodReview = () => {
    setGood(good + 1);
    setHasFeedbackData(true);
  };

  const handleNeutralReview = () => {
    setNeutral(neutral + 1);
    setHasFeedbackData(true);
  };

  const handleBadReview = () => {
    setBad(bad + 1);
    setHasFeedbackData(true);
  };

  const randomGenerate = () => {
    const randomValue = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomValue);
  };

  const increaseVote = () => {
    const newAnecodes = [...anecdotes];
    newAnecodes[selected].count += 1;
    setAnecdotes(newAnecodes);
  };

  return (
    <div>
      <h2>Give Feedback</h2>

      <button onClick={handGoodReview}>Good</button>
      <button onClick={handleNeutralReview}>Neutral</button>
      <button onClick={handleBadReview}>bad</button>

      <h2>Statistics</h2>
      {hasFeedbackData ? (
        <table>
          <tbody>
            <StatisticsLine text='Good' value={good} />
            <StatisticsLine text='Neutral' value={neutral} />
            <StatisticsLine text='Bad' value={bad} />
            <StatisticsLine text='All' value={total} />
            <StatisticsLine text='Average' value={average} />
            <StatisticsLine
              text='Positive Feedback'
              value={positivePercentage}
            />
          </tbody>
        </table>
      ) : (
        <p>No Feedback Given</p>
      )}

      <div>
        {anecdotes[selected].text} has {anecdotes[selected].count}{' '}
      </div>
      <button onClick={randomGenerate}>Next Anecdotes</button>

      <button onClick={increaseVote}>Vote</button>

      <h1>Anecdote with most votes</h1>

      <p>
        {currentAnecdoteValue.text} {currentAnecdoteValue.count}
      </p>
    </div>
  );
};

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td> : {value}</td>
    </tr>
  );
};

export default App;
