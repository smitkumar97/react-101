import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export function Decrement() {
    const { count, setCount } = useContext(CounterContext);
    return <button onClick={() => setCount(count - 1)}>Decrement</button>;
}