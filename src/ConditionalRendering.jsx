import { Counter } from "./Counter";

//conditonal rendering
//ternary operator in JSX
function ConditionalRendering() {
  return <div>{5 > 4 ? <h1> Awesome</h1> : <Counter />}</div>;
}
