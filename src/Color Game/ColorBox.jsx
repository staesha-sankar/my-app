export function ColorBox({ color, deleteClr }) {
  const styles = {
    height: "1.5rem",
    width: "14rem",
    marginBlockStart: "1rem",
    backgroundColor: color,
  };

  return (
    <div style={styles}>
      <button onClick={deleteClr}> Delete </button>
    </div>
  );
}
