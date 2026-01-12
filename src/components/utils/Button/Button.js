import './Button.css'
export default function Button({ buttonValue, onClick }) {
    return (
        <button
            onClick={() => onClick(buttonValue)}
            className={isNaN(buttonValue) && buttonValue !== '.' ? "calc-button orange" : "calc-button"}
        >
            {buttonValue}
        </button>
    )
}