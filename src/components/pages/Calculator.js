import { useState } from "react";
import Display from "./Display";
import Button from "../utils/Button/Button";
import './Calculator.css'
import '../pages/GridCalc.css'

export default function Calculator() {
    const [currentInput, setCurrentInput] = useState('');
    const [previousValue, setPreviousValue] = useState(0);
    const [operation, setOperation] = useState('');
    const [igualdad, setIgualdad] = useState(true)

    const handleClicks = (valor) => {
        if (igualdad) {
            switch (valor) {
                case '+':
                case '-':
                case '/':
                case '*':
                    setPreviousValue(currentInput)
                    setCurrentInput('')
                    setOperation(valor)
                    break;
                case 'AC':
                case 'DEL':
                    switch (valor) {
                        case 'AC':
                            setPreviousValue(0);
                            setCurrentInput('');
                            break;
                        case 'DEL':
                            setPreviousValue(previousValue + '');
                            setCurrentInput(parseInt(Math.floor(currentInput / 10)));
                            break;
                        default:
                            break;
                    }
                    break;
                case '=':
                    switch (operation) {
                        case '+':
                            setCurrentInput(parseFloat(previousValue) + parseFloat(currentInput));
                            break;
                        case '-':
                            setCurrentInput(parseFloat(previousValue) - parseFloat(currentInput));
                            break;
                        case '/':
                            setCurrentInput(parseFloat(previousValue) / parseFloat(currentInput));
                            break;
                        case '*':
                            setCurrentInput(parseFloat(previousValue) * parseFloat(currentInput));
                            break;
                        default:
                            break;
                    }
                    setOperation('');
                    setIgualdad(false);
                    break;
                default:
                    setCurrentInput(currentInput + valor)
                    break;
            }
        } else {
            setPreviousValue(0)
            setCurrentInput(valor)
            setIgualdad(true)
        }
    }
    const GridCalc = () => {
        return (
            <div className="button-column">
                <Button buttonValue={'AC'} onClick={handleClicks} />
                <Button buttonValue={'DEL'} onClick={handleClicks} />
                <Button buttonValue={'/'} onClick={handleClicks} />
                <Button buttonValue={'*'} onClick={handleClicks} />
                <Button buttonValue={7} onClick={handleClicks} />
                <Button buttonValue={8} onClick={handleClicks} />
                <Button buttonValue={9} onClick={handleClicks} />
                <Button buttonValue={'-'} onClick={handleClicks} />
                <Button buttonValue={6} onClick={handleClicks} />
                <Button buttonValue={5} onClick={handleClicks} />
                <Button buttonValue={4} onClick={handleClicks} />
                <Button buttonValue={'+'} onClick={handleClicks} />
                <Button buttonValue={1} onClick={handleClicks} />
                <Button buttonValue={2} onClick={handleClicks} />
                <Button buttonValue={3} onClick={handleClicks} />
                <Button buttonValue={'='} onClick={handleClicks} />
                <Button buttonValue={0} onClick={handleClicks} />
                <Button buttonValue={'.'} onClick={handleClicks} />
            </div>
        )
    }
    return (
        <section>
            <Display valueOnScreen={currentInput} />
            <GridCalc />
        </section>
    )
}