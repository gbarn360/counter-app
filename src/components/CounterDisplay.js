import { useState } from "react"
import Button from "./Button";

export default function CounterDisplay() {

    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }
    function decrement() {
        if (counter !== 0)
            setCounter(counter - 1);
    }
    function reset() {
        setCounter(0);
    }

    return (
        <div className="CounterDisplayContainer">
            <div className="CounterDisplay">
                <h1 className="Count">{counter}</h1>
            </div>
            <div className="UserOptions">
                <Button title="decrement" action={decrement} />
                <Button title="reset" action={reset} />
                <Button title="increment" action={increment} />
            </div>
        </div>
    )
}