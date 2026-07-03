function ConditionalStyling() {
  //must be object and key camelCase
  //conditional styling - dynamically styling based on some condition
  const styles = {
    fontSize: 5 > 4 ? "5rem" : "2rem",
    color: "crimson",
  };

  //inline style - style attribute takes an object
  return <h1 style={styles}>Conditional Styling</h1>;
}
