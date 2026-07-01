// Summary
// One component per file
// 1. Select
// 2. Right click
// 3. Refactor
// 4. Move to new file
// 5. Save all file
// 6. After saving only then goto next component

// Dont move multiple components at same time

import { useState } from "react";
import "./index.css";
import { MovieList } from "./MovieList";
import { UserList } from "./UserList";
// Default export (only one per file)
export default function App() {
  const names = ["Staesha", "Lauren", "Zulu", "Nolo"];
  // Array Strings -> Array of JSX (Transform)

  return (
    // JSX starts
    <div className="App">
      {/* <UserList /> */}
      {/*<MovieList />*/}
      <Counter />
    </div>
    // JSX ends
  );
}

//React reacts to special variables: Hook variables
//Hook functions start with the word use eg useState, useEffect, useReducer, useContext

//C = f(state) - State change, component re-render, UI change
function Counter() {
  //let [state,setState] = useState(initialValue)
  //state refers to current value of the variable
  //setState is a function which updates the value of the variable
  let [like, setLike] = useState(0);
  let [dislike, setDislike] = useState(0);
  return (
    <div>
      <button
        //click - onClick - setLike - update states = State changes rerender
        onClick={() => {
          setLike(like + 1);
        }}
      >
        👍 Like
      </button>
      <h2>{like}</h2>

      <button
        onClick={() => {
          setDislike(dislike + 1);
        }}
      >
        👎 Dislike
      </button>
      <h2>{dislike}</h2>

      <progress value={like} max={like + dislike}></progress>
    </div>
  );
}

//onclick - JS
//onClick - React
