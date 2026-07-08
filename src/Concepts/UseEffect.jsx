import { useEffect, useState } from "react";

// like & disLike -> State of Component
// Like or disLike update - Re-renders - Hence total update
export function Counter() {
  let [like, setLike] = useState(0);
  let [disLike, setDisLike] = useState(0);
  let total = like + disLike;
  console.log("Re-render");

  //ComponentDidUpdate - state or props changed
  useEffect(() => {
    console.log("Component updated");
  })

   useEffect(() => {
    console.log("Like updated");
  }, [disLike]);

  //Scheduled - like - 0
  //Render - like - 3
  const incrementLike = () => {
    //batch - 0 - rerender happens in batches so performance issues don't occur: lexical scope of like which is why every value 0
    setLike(like + 1);
    setLike(like + 2);
    setLike(like + 3); // like will now increase by 3

    //takes a call back function
    //shadowed
    //state - current value
    setLike((like) => like + 1); //doesnt refer to lexical scope 0+1=1
    setLike((like) => like + 1); // 1+1 = 2
    setLike((like) => like + 1); //2 + 1 = 3
  };

  const incrementDisLike = () => {
    setDisLike(disLike + 1);
  };

  return (
    <div className="counter-container">
      {/* Event Listener - click */}
      <div className="action-buttons">
        <button onClick={incrementLike}>👍 {like}</button>
        <button onClick={incrementDisLike}>👎 {disLike}</button>
      </div>
      <progress max={total} value={like}></progress>
      <FunMsg like={like} disLike={disLike} />
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
