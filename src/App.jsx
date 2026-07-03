//Staesha

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
import { useState } from "react";
// Default export (only one per file)
export default function App() {
  const names = ["Staesha", "Lauren", "Zulu", "Nolo"];
  // Array Strings -> Array of JSX (Transform)

  return (
    // JSX starts
    <div className="App">
      {/*<UserList />*/}
      {/*<MovieList />*/}
      {/*<Counter />*/}

      {/*Parent component dictates style*/}
      {/*<Fun />*/}

      {/*Conditional rendering*/}

      {/*<ConditionalRendering />*/}

      {/*<ConditionalStyling />*/}
      <ColorGame />
    </div>
    // JSX ends
  );
}

// Task - Clue: Hook & Conditional Styling
//1. Change h1 to whatever what is typed in the input box
//2. Change the color of the h1 based on the input
// Task - Clue: Hook & Conditional Styling
function ColorGame() {
  const [color, setColor] = useState("");

  const styles = {
    background: color,
  };

  // Task 2.1 First list the 3 boxes on the screen
  //const colorList = ["pink", "plum", "red"];

  // Task 2.2 Add color box
  const [colorList, setColorList] = useState(["pink", "plum", "red"]);
  // Task 2.3 Delete color box
  // type -> onChange -> setColor -> State updates (color) -> re-renders
  // click -> onClick -> setColorList ->  State updates (colorList) -> re-renders

  //if you want to delete: 
  //1. toSpliced
  //2. Filter
  const deleteColor = (index) => {
    setColorList(colorList.toSpliced(index,1));
  };

  return (
    <div>
      <input
        type="text"
        style={styles}
        onChange={(event) => setColor(event.target.value)}
      />
      {/*// Task 2.2 Add color box*/}
      {/*copy color list + new color list*/}
      <button onClick={() => setColorList([...colorList, color])}>
        Add Color
      </button>

      {/*// Task 2.1 First list the 3 boxes on the screen*/}
       {colorList.map((color, idx) => (
        <ColorBox color={color} deleteClr={() => deleteColor(idx)} />
      ))}
    </div>
  );
}

function ColorBox({ color, deleteClr }) {
  const styles = {
    height: "1.5rem",
    width: "14rem",
    marginBlockStart: "1rem",
    backgroundColor: color,
  };

  return (
    <div style={styles}>
      <button onClick= {deleteClr}> Delete </button>
    </div>
  );
}
