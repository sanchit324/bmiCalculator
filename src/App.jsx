/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState(null)
  const [height, setHeight] = useState(null)
  const [message, setMessage] = useState('')
  const [bmi, setBmi] = useState(null)
  const [verdict, setVerdict] = useState('')

  // Calculate BMI
  const calculateBMI = useCallback(() => {
    if(weight === null || height === null) return;
    const bmi = (weight / height / height) * 10000
    setBmi(bmi.toFixed(2))
    setMessage(`Your BMI is ${bmi.toFixed(2)}`)

    // Final Verdict
    if(bmi < 18.5) {
      setVerdict('Include more nutritious foods to achieve a healthier balance')
    } else if(bmi >= 18.5 && bmi < 25) {
      setVerdict('Continue making healthy choices to maintain your weight')
    } else if(bmi >= 25 && bmi < 30) {
      setVerdict('Consider a balanced diet and regular exercise for weight management')
    } else {
      setVerdict('Prioritize health with a balanced diet and physical activity for weight control')
    }

  }, [weight, height, setBmi, setMessage])

  // Reset
  const reset = useCallback(() => {
    setWeight(null);
    setHeight(null);
    setBmi(null);
    setMessage('');
    setVerdict('');
  }, [setWeight, setHeight, setBmi, setMessage]);


  return (
    <>
      <div>
        <div className='text-3xl font-bold text-center text-bold'>BMI Calculator</div>
        
        {/* Weights Field */}
        <div>Weight (kg)</div> 
        <input type="text" 
        placeholder="Weight (kg)"
        value={weight === null ? '' : weight}
        onChange={(e) => setWeight(e.target.value)} />

        {/* Heights Field */}
        <div>Height (cm)</div>
        <input type="text" 
        placeholder="Height (cm)" 
        value={height === null ? '' : height}
        onChange={(e) => setHeight(e.target.value)}/>

        <br />

        {/* Calculate Button */}
        <button
        onClick={calculateBMI}>Calculate</button>

        {/* Reset Button */}
        <button
        onClick={reset}>Reset</button>

        {/* BMI */}
        <div>{message}</div>

        {/* Verdict */}
        <div>{verdict}</div>
      </div>
    </>
  )
}

export default App
