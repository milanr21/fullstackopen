import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [hasFeedbackData, setHasFeedbackData] = useState(false);

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
