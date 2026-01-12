import { useState } from "react";

import Display from "./Display";

import './GridCalc.css';
import '../utils/Button/Button.css'


export default function GridCalc({ valueButtons }) {
    const listButtons = valueButtons.map((valorOfButton, index) =>
        <button
            key={index}
            onClick={handleClicks(valorOfButton)}
            styles={isNaN(valorOfButton) && valorOfButton !== '.' ? "calc-button orange" : "calc-button"}
        >
            {valorOfButton}
        </button>
    );
    return (
        <div className="button-column">
            <Display currentNumberOnScreen={currentInput} />
            {listButtons}
        </div>
    )
}
