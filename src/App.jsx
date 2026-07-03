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
import { MovieList } from "./Movies/MovieList";
import { UserList } from "./Users/UserList";
import { Counter } from "./Users/Counter";
import { ColorGame } from "./Color Game/ColorGame";
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
