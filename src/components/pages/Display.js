import "./Display.css"

export default function Display({ valueOnScreen }) {
    return (
        <input type="number" value={valueOnScreen} placeholder="0" readOnly />
    )
}