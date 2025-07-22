import { useState } from 'react'
import styles from './App.module.css'

function App() {
  const NUMS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  const [operand1, setOperand1] = useState('')
  const [operator, setOperator] = useState('')
  const [operand2, setOperand2] = useState('')

  const resetDisplay = () => {
    setOperand1('')
    setOperator('')
    setOperand2('')
  }

  const handleNumberClick = (digit) => {
    if (operator === '') {
      setOperand1(prev => prev + digit)
    } else {
      setOperand2(prev => prev + digit)
    }
  }

  const handleEqualClick = () => {
    const num1 = Number(operand1)
    const num2 = Number(operand2)
  
    if (operator === '+') {
      setOperand1(String(num1 + num2))
    } else if (operator === '-') {
      setOperand1(String(num1 - num2))
    }
  
    setOperator('')
    setOperand2('')
  }

  return (
    <div className={styles.App}>
      <div className={styles.calculator}>
        <div className={styles["calculator-display"]}>{operand1 + operator + operand2}</div>
        <div className={styles["calculator-buttons"]}>
          <button className={styles.fullWidth} onClick={resetDisplay}>C</button>
          <button onClick={() => setOperator("+")}>+</button>
          <button onClick={() => setOperator("-")}>-</button>
          <button onClick={handleEqualClick}>=</button>
        </div>

        <div className={styles["calculator-keypad"]}>
          {NUMS.map((number) => (
            <button key={number} onClick={() => handleNumberClick(number)}>
              {number}
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}

export default App