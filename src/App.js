import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MembersPage from "./pages/MembersPage";
import HomePage from "./pages/HomePage";
import MakeStoryPage from "./pages/MakeStoryPage";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import AllStoriesPage from "./pages/AllStoriesPage";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/admin/users" component={MembersPage} />
        <Route path="/admin/makestory" component={MakeStoryPage} />
        <Route path="/admin/allstories" component={AllStoriesPage} />
      </Switch>
    </div>
  );
}

export default App;
