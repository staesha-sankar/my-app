import { useState } from "react";

export function MovieCounter() {
  let [like, setLike] = useState(0);
  let [disLike, setDisLike] = useState(0);
  return (
    <div>
      <div className="action-buttons">
        <button
          onClick={() => {
            setLike(like + 1);
          }}
        >
          👍 {like}
        </button>
        <button
          onClick={() => {
            setDisLike(disLike + 1);
          }}
        >
          👎 {disLike}
        </button>
      </div>
    </div>
  );
}

// import { useState } from "react";

// import IconButton from "@mui/material/IconButton";
// import Badge from "@mui/material/Badge";

// export function MovieCounter() {
//   let [like, setLike] = useState(0);
//   let [disLike, setDisLike] = useState(0);

//   return (
//     <div>
//       <div className="action-buttons">
//         <Badge badgeContent={like} color="primary">
//           <IconButton
//             onClick={() => {
//               setLike(like + 1);
//             }}
//             aria-label="like movie"
//           >
//             👍
//           </IconButton>
//         </Badge>

//         <Badge badgeContent={disLike} color="error">
//           <IconButton
//             onClick={() => {
//               setDisLike(disLike + 1);
//             }}
//             aria-label="dislike movie"
//           >
//             👎
//           </IconButton>
//         </Badge>
//       </div>
//     </div>
//   );
// }