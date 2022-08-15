import React, { useEffect } from "react";
import "./App.css";
import "./styles/global-styles.css";
import "./styles/reset.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MembersPage from "./pages/MembersPage";
import HomePage from "./pages/HomePage";
import MakeStoryPage from "./pages/MakeStoryPage";
import WelcomePage from "./pages/WelcomePage";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import AllStoriesPage from "./pages/AllStoriesPage";
import StoryDetailPage from "./pages/StoryDetailPage";
import { selectUser } from "./store/user/selectors";

function App() {
  const userData = useSelector(selectUser);
  const dispatch = useDispatch();

  const protectedRoutes = (Component, routerProps) => {
    const isAdmin = userData.isAdmin === true;
    return isAdmin ? <Component {...routerProps} /> : <Redirect to="/login" />;
  };

  const normalProtectedRoutes = (Component, routerProps) => {
    const token = userData.token;
    return token ? <Component {...routerProps} /> : <Redirect to="/login" />;
  };

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
        <Route exact path="/" component={WelcomePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route
          exact
          path="/HomePage"
          render={(routerProps) => normalProtectedRoutes(HomePage, routerProps)}
        />
        <Route path="/storydetails/:id" component={StoryDetailPage} />
        <Route
          path="/admin/users"
          render={(routerProps) => protectedRoutes(MembersPage, routerProps)}
        />
        <Route
          path="/admin/makestory"
          render={(routerProps) => protectedRoutes(MakeStoryPage, routerProps)}
        />
        <Route
          path="/admin/allstories"
          render={(routerProps) => protectedRoutes(AllStoriesPage, routerProps)}
        />
      </Switch>
    </div>
  );
}

export default App;
