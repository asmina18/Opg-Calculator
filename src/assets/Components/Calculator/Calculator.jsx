import { useState } from "react"
import style from './Calculator.module.scss'



export function Calculator() {

    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);


    const handleButtonClick = (value) => {
        setInput(input + value)
    }

    const clearInput = () => {
        setInput('')
        setResult(0)
    }
// eval() используется в вашем коде для вычисления результата выражения, введенного пользователем в калькуляторе. 
    const calculateResult = () => {
        try {
            setResult(eval(input)) 
        } catch (error) {
            setResult('Error')
        }
    }

    return (
        <div className={style.calculator}>
        <div className={style.input}>
          <input type="text" value={input} readOnly />
        </div>
        <div className={style.buttons}>
          <button onClick={clearInput}>C</button>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
          <button onClick={() => handleButtonClick("*")}>*</button>
        </div>
        <div className={style.result}>
          <span >Result: {result}</span>
        </div>
      </div>
    )
}



