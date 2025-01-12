import { useState } from 'react';

const App = () => {
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
    <>
      <div>
        {anecdotes[selected].text} has {anecdotes[selected].count}{' '}
      </div>
      <button onClick={randomGenerate}>Next Anecdotes</button>

      <button onClick={increaseVote}>Vote</button>

      <h1>Anecdote with most votes</h1>

      <p>
        {currentAnecdoteValue.text} {currentAnecdoteValue.count}
      </p>
    </>
  );
};

export default App;
