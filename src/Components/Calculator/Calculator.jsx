import { useState } from "react";
import style from './Calculator.module.scss';


export function Calculator(props) {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);
  const [congratulation, setCongratulation] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value)
  }
  // Funktion til at rydde input, resultat og besked(pozdravlenie)
  const clearInput = () => {
    setInput('')//Nulstil brugerinput
    setResult(0)// Nulstil resultatet
    setCongratulation('');// Ryd beskeden
  }
  // Funktion til at beregne resultatet
  const calculateResult = () => {
    try {
      // Evaluer den aktuelle inputstreng for at beregne resultatet
      const calculatedResult = eval(input);
      setResult(calculatedResult);// Sæt resultatet
      // hvis det er lig med 42
      if (calculatedResult === 42) {
        setCongratulation("Congratulations, Universe!");
      } else {
        setCongratulation('');
      }
    } catch (error) {
      setResult('Error')
      setCongratulation('');
    }
  }

  // Opret et array med teksterne på knapperne
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/"];

  return (
    <div className={style.calculator}>
      <div className={style.input}>
        <input type="text" value={input} readOnly />
      </div>
      <div className={style.buttons}>
        <button onClick={clearInput}>C</button>
        {/* Используем метод map для создания кнопок на основе массива */}
        {buttons.map((buttonText) => (
          <button key={buttonText} onClick={() => handleButtonClick(buttonText)}>
            {buttonText}
          </button>
        ))}
        <button onClick={calculateResult}>=</button>
      </div>
      <div className={style.result}>
        <span>Result: {result}</span>
        {congratulation && <p>{congratulation}</p>}
      </div>
    </div>
  )
}
