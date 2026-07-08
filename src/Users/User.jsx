// Prop name
// Presentation - Reusability ⬆️

import { Counter } from "../Concepts/Counter";

//more control over counter
export function User({ name, pic }) {
  return (
    <div className="user-container">
      <img src={pic} alt={name + "'s profile pic"} />
      <p className="user-msg">
        Hello, <span className="user-name">{name} 🎉</span>
      </p>
      <Counter />;
    </div>
  );
}
