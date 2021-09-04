import logo from './logo.svg';
import './App.css';
import Login from "./Pages/Login/Login";
import wokspaceForm from "./Pages/workspaceForm/ws";
import Register from "./Pages/Register/Register";
import SingleTask from './Pages/SingleTask/SingleTask';
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/home/home"
function App() {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/task">
        <SingleTask />
      </Route>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/workspaceForm">
        <WorkspaceForm/>
      </Route>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
