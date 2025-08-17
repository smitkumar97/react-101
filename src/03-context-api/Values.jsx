import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export function Value() {
    const { count } = useContext(CounterContext);
    return <p>Count: {count}</p>;
}