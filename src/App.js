import React from "react";
import * as ROUTES from "./components/constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";
import { IsUserRedirect } from "./helpers/routes";
import { useAuthListner } from "./hooks";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const { user } = useAuthListner();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/browse"
          element={
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
              path={ROUTES.SIGN_UP}
            />
          }
        >
          <Route path="/browse" element={<Browse />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
