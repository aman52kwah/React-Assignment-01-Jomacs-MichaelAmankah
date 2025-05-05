/**
Task:

Create a button that says "Click Jomacs!" where "Jomacs" is a JavaScript variable.
 */

function Test09() {
  const name = "Jomacs";

  return (
    <div>
      <button onClick={() => alert(`You Clicked ${name}!`)}>
        Click {name}!
      </button>
    </div>
  );
}

export default Test09;
