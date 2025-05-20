import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, useLocation} from "react-router-dom";

function NoMatch() {
  let location = useLocation();

  return (
    <div>
        <h1>Oops!</h1>
        <h3>Sorry, an unexpected error has occurred.</h3>
        <h5>Does not exist: {location.pathname}</h5>
    </div>
  );
}

export { NoMatch };
