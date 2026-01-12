import Button from "../utils/Button/Button.js"
import './ButtonPanel.css'
export default function ButtonPanel() {
    return (
        <div className="button-column">
            <Button buttonValue={'AC'} />
            <Button buttonValue={'DEL'} />
            <Button buttonValue={'/'} />
            <Button buttonValue={'*'} />
            <Button buttonValue={'7'} />
            <Button buttonValue={'8'} />
            <Button buttonValue={'9'} />
            <Button buttonValue={'-'} />
            <Button buttonValue={'6'} />
            <Button buttonValue={'5'} />
            <Button buttonValue={'4'} />
            <Button buttonValue={'+'} />
            <Button buttonValue={'1'} />
            <Button buttonValue={'2'} />
            <Button buttonValue={'3'} />
            <Button buttonValue={'='} />
            <Button buttonValue={'0'} />
            <Button buttonValue={'.'} />
        </div>
    )
}