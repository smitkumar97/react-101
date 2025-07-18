# 🧠 Week 1–2: Core React + Hooks – Concepts, Examples & Interview Q&A

---

## ✅ Covered Concepts

- JSX
- Components (Functional)
- Props & State
- useState, useEffect
- List Rendering (`map`)
- Conditional Rendering
- Event Handling
- Controlled vs Uncontrolled Components
- Project: Task Tracker App (with localStorage)

---

## 📚 Concept Explanations & Examples

---

### 1. JSX

> JSX allows writing HTML-like syntax in JavaScript. It improves readability and represents UI in a declarative way.

🎤 Interview Questions & Answers
JSX & Components
Q1: What is JSX?

JSX is a syntax extension to JavaScript that allows writing HTML-like tags in React. It's transpiled to React.createElement() under the hood.

Q2: Functional vs Class Components?

Functional components are simpler and now preferred. They use hooks like useState for managing logic. Class components were used before hooks were introduced.

Q3: Why prefer functional components with hooks?

They're easier to read, test, and maintain. Hooks allow logic reuse via custom hooks, and avoid issues like this binding.

Props & State
Q4: Difference between props and state?

Props are passed to components and are immutable. State is local and managed within a component, and can change over time.

Q5: Can we pass a function as a prop?

Yes, it's common. For example, a parent can pass a handleDelete function to a child component to trigger logic.

useState & useEffect
Q6: What does useState return?

An array: [stateValue, setStateValue].

Q7: What is useEffect used for?

It runs side effects after render — like fetching data or syncing with localStorage.

Q8: What if we omit the dependency array in useEffect?

The effect will run after every render, which may lead to performance issues or infinite loops.

List & Keys
Q9: How does React render lists?

By mapping over arrays and returning JSX. Each element must have a unique key prop.

Q10: Why are keys important?

Keys help React identify which items changed and optimize re-rendering.

Events & Forms
Q11: Event handling in React vs HTML?

In React, events are camelCase (onClick) and use functions, not strings. The event is wrapped in a synthetic event system.

Q12: What is a controlled component?

A form input whose value is controlled by React state. It’s predictable and easier to validate.

Q13: How to handle form submission in React?

With onSubmit on <form> and e.preventDefault() to stop page reload.

localStorage & Effects
Q14: How to persist data in React?

Use localStorage.setItem() in useEffect to save, and localStorage.getItem() on mount to load.

Q15: Should we use localStorage inside useEffect?

Yes, because useEffect runs after the component is mounted, ensuring access to the window object.

✅ Week 1–2 React Interview Q&A

### JSX & Components

1. What is JSX? Why is it used in React?
   Answer:
   JSX stands for JavaScript XML. It’s a syntax extension that lets us write HTML-like code inside JavaScript. React uses JSX to make UI structure more readable and declarative.
   Under the hood, JSX is transpiled into React.createElement() calls, so it's purely syntactic sugar, but it significantly improves developer experience.

2. How is a functional component different from a class component?
   Answer:
   Functional components are simpler and are just plain JavaScript functions that return JSX.
   Class components used to be necessary when we needed state or lifecycle methods, but now, with the introduction of Hooks like useState and useEffect, we can handle all those features in functional components, which are more concise and easier to test.

3. What are the advantages of using functional components with hooks?
   Answer:
   Functional components with hooks make the code more concise, readable, and modular. They avoid the boilerplate of this binding, and let us reuse logic through custom hooks.
   They also encourage separation of concerns and composability, which makes applications easier to scale and maintain.

### Props & State

4. What is the difference between props and state?
   Answer:
   Props are read-only data passed from a parent to a child component. They help make components reusable and dynamic.
   State, on the other hand, is internal to a component and can change over time — usually based on user interaction or application logic. Props are immutable, while state is mutable within the component.

5. Can you pass a function as a prop? Why would you do that?
   Answer:
   Yes, we can and often do. Passing functions as props allows child components to communicate with their parents.
   For example, in a Task Tracker app, the TaskItem component might receive a onDelete function prop from its parent to remove a task from the list.

### Hooks (useState, useEffect)

6. What does useState return?
   Answer:
   useState returns an array with two elements:

The current state value.

A function to update that value.

We typically use array destructuring like this:
const [count, setCount] = useState(0);

7. How does useEffect work and when does it run?
   Answer:
   useEffect runs side effects in function components. It runs after the render cycle.
   It can be used to perform data fetching, update the DOM, or sync with external systems like localStorage.
   The second argument — the dependency array — controls when the effect runs. If it's empty, it runs once on mount. If dependencies are provided, it re-runs whenever any of them change.

8. What happens if you don’t provide a dependency array to useEffect?
   Answer:
   Without a dependency array, the useEffect will run after every render, which can lead to performance issues or infinite loops if the effect updates state.
   That’s why it's important to carefully manage dependencies to avoid unintended behavior.

### Rendering

9. How does React render lists?
   Answer:
   React renders lists by using JavaScript’s map() function to loop over an array and return a component or JSX element for each item.
   Each item must have a unique key prop to help React identify which items have changed, been added, or removed.

10. Why are keys important in list rendering?
    Answer:
    Keys help React optimize re-rendering by giving it a stable identity for each element in a list.
    Without keys, or with improper keys like array indexes, React might reorder elements inefficiently and cause bugs in dynamic lists.

### Events & Forms

11. How is event handling in React different from plain HTML?
    Answer:
    In React, event handlers are written in camelCase (e.g. onClick) and passed as functions instead of strings.
    Also, the event object in React is a synthetic event, which wraps the browser's native event and provides consistent behavior across browsers.

12. What is a controlled component? Why is it preferred?
    Answer:
    A controlled component is a form input whose value is managed by React state.
    It ensures that the UI is always in sync with the component state, making behavior predictable and easier to test.
    It also allows for validation and logic before updating input values.

13. How do you handle form submission in React?
    Answer:
    I handle it using an onSubmit handler attached to the form. Inside the handler, I prevent the default form action using e.preventDefault() and then process the form data using state values.

Example:
const handleSubmit = (e) => {
e.preventDefault();
console.log(inputValue);
};

### localStorage & Side Effects

14. How do you persist data across browser sessions in React?
    Answer:
    I use localStorage. On initial render, I load saved data using useEffect, and whenever the data changes, I update localStorage using another useEffect.
    This way, tasks or preferences remain saved across sessions.

15. Can you use localStorage inside useEffect? Why?
    Answer:
    Yes, and that’s the ideal place to use it. Since useEffect runs after the component mounts, it avoids any issues related to server-side rendering, and ensures that we’re accessing the browser’s APIs only after the component is in the DOM.
