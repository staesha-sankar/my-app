import { useState } from "react";
import { ColorBox } from "../Color Game/ColorBox";

// Task - Clue: Hook & Conditional Styling
//1. Change h1 to whatever what is typed in the input box
//2. Change the color of the h1 based on the input
// Task - Clue: Hook & Conditional Styling
//React - model - view - sync
export function ColorGame() {
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
    setColorList(colorList.toSpliced(index, 1));
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
