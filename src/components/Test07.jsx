/**
Task: Change the code so:

If isLoggedIn is true ➔ show "Welcome back!"

If isLoggedIn is false ➔ show "Please log in."
 */

function Test07() {
  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please login</h1>}
      </div>
  );
}

export default Test07;
