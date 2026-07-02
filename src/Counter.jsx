import { useState } from "react";

//React reacts to special variables: Hook variables
//Hook functions start with the word use eg useState, useEffect, useReducer, useContext
//C = f(state) - State change, component re-render, UI change
export function Counter() {
  //let [state,setState] = useState(initialValue)
  //state refers to current value of the variable
  //setState is a function which updates the value of the variable
  let [like, setLike] = useState(0);
  let [dislike, setDislike] = useState(0);
  //like or dislike is a state variable, when it changes the component re-renders and the UI changes
  let total = like + dislike;
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

      <progress value={like} max={total}></progress>

      {/* 

      //Task
      //Like must be 10 more than dislike to show awesome
      */}
      {like > dislike + 10 ? <h1>You are awesome</h1> : null}
      <FunMsg like={like} disLike={dislike} />
    </div>
  );
}

// React - Boolean values does not appear in view
// Guard
function FunMsg({ like, disLike }) {
  return like >= disLike + 10 && <h3>You are awesome 🎉🎉</h3>;
}

function FunMsg3({ like, disLike }) {
  return like >= disLike + 10 ? <h3>You are awesome 🎉🎉</h3> : "";
}

function FunMsg2({ like, disLike }) {
  return like >= disLike + 10 ? <h3>You are awesome 🎉🎉</h3> : null;
}

function FunMsg1({ like, disLike }) {
  return (
    <div>
      {like >= disLike + 10 ? <h3>You are awesome 🎉🎉</h3> : <h1></h1>}
    </div>
  );
}
