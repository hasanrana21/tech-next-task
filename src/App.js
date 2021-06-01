import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Shared/Navbar/Navbar';
import Home from './Components/HomePage/Home/Home';
import LoadMore from './Components/HomePage/LoadMore/LoadMore';
import Profile from './Components/UserProfilePage/Profile/Profile';

export const PostsContext = createContext();

function App() {
  const [globalPosts, setGlobalPosts] = useState([]);
  return (
    <PostsContext.Provider value={[globalPosts, setGlobalPosts]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/post">
            
          </Route>
          <Route path="/users">
            
          </Route>
          <Route path="/loadMore">
            <LoadMore/>
          </Route>
          <Route path="/profile">
            <Profile></Profile>
          </Route>

          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </PostsContext.Provider>
  );
}

export default App;
