// Summary
// One component per file
// 1. Select
// 2. Right click
// 3. Refactor
// 4. Move to new file
// 5. Save all file
// 6. After saving only then goto next component

// Dont move multiple components at same time

import "./index.css";
import { MovieList } from "./MovieList";
import { UserList } from "./UserList";
import { Counter } from "./Counter";
// Default export (only one per file)
export default function App() {
  const names = ["Staesha", "Lauren", "Zulu", "Nolo"];
  // Array Strings -> Array of JSX (Transform)

  return (
    // JSX starts
    <div className="App">
      {/*<UserList />*/}
      <MovieList />
      <Counter />

      {/*Parent component dictates style*/}
      {/*<Fun />*/}

      {/*Conditional rendering*/}

      {/*<ConditionalRendering />*/}

      {/*<ConditionalStyling />*/}
    </div>
    // JSX ends
  );
}


function ConditionalStyling(){
  //must be object and key camelCase

  //conditional styling - dynamically styling based on some condition
  const styles = {
    fontSize: 5 > 4 ? "5rem" : "2rem",
    color: "crimson"
  };

  //inline style - style attribute takes an object
  return (<h1 style={styles}>Conditional Styling</h1>);


}
