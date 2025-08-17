import { CounterContextProvider } from "./CounterContext";
import { Decrement } from "./Decrement";
import { Increment } from "./Increment";
import { Value } from "./Values";

export function Parent() {
    return (
        <CounterContextProvider>
            <Increment />
            <Decrement />
            <Value />
        </CounterContextProvider>
    );
}