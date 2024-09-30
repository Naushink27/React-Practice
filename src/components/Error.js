import React from "react";
import { useRouteError } from "react-router-dom";

const Error= () => {
  const error = useRouteError();
  console.error(error); // Logs the error to the console (optional)

  return (
    <div className="error-container">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/" className="go-home">Go Back Home</a>
    </div>
  );
};

export default Error;
