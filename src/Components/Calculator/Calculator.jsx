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
      // hvis det er lig med 25
      if (calculatedResult === 25) {
        setCongratulation("Congratulations, Universe!");
      } else {
        setCongratulation('');
      }
    } catch (error) {
      setResult('Error')
      setCongratulation('');
    }
  }

  // Eto moy array gde vse moi shicli budu pokazivaet na Knapkoh
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/"];

  return (
    <div className={style.calculator}>
      <div className={style.input}>
        <input type="text" value={input} readOnly />
      </div>
      <div className={style.buttons}>
        <button onClick={clearInput}>C</button>
        {/* Brug map-metoden til at oprette knapper baseret på arrayet */}
        {buttons.map((buttonText) => (
          <button key={buttonText} onClick={() => handleButtonClick(buttonText)}>
            {buttonText}
          </button>
        ))}
        <button onClick={calculateResult}>=</button>
      </div>
          <p>hej</p>
      <div className={style.result}>
        <span>Result: {result}</span>
        {congratulation && <p>{congratulation}</p>}
      </div>
    </div>
  )
}
