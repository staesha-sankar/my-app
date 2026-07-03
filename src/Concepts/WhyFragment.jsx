// <> - React fragment -  wrapper element
//No attributes / event listeners on react fragment due to it not being a real DOM element

//when you wnat to dictate styles from parent and want element to be a child of parent element then use react fragment
export function WhyFragment() {
  return (
    <div className="container">
      <Fun />
    </div>
  );
}

function Fun() {
  //only one parent element can be returned from a component so add a react fragment to wrap the elements

  return (
    <>
      <h1>Fun Component</h1>
      <p>Nice</p>
    </>
  );
}
