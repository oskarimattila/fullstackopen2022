import { useState } from 'react'

const Button = ({handleclick, text}) => (
  <button onClick={handleclick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({values}) => {
  const sum = values[0]+values[1]+values[2]
  const avg = (values[0] - values[2]) / sum
  const pos = values[0] / sum
  if (sum) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={values[0]} />
          <StatisticLine text="neutral" value={values[1]} />
          <StatisticLine text="bad" value={values[2]} />
          <StatisticLine text="all" value={sum} />
          <StatisticLine text="average" value={avg} />
          <StatisticLine text="positive" value={pos} />
        </tbody>
      </table>
    )
  }
  else return (<p>No feedback given</p>)
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const values = [good, neutral, bad]

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleclick={() => setGood(good + 1)} text="good" />
      <Button handleclick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleclick={() => setBad(bad + 1)} text="bad" />
      
      <h1>statistics</h1>

      <Statistics values={values} />

    </div>
  )
}

export default App