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
import UsersPostDetails from './Components/UserProfilePage/UsersPostDetails/UsersPostDetails';
import EditPost from './Components/UserProfilePage/EditPost/EditPost';
import Users from './Components/AllUsersPage/Users/Users';
import AllUserInfo from './Components/AllUsersPage/AllUserInfo/AllUserInfo';
import UserPosts from './Components/UserProfilePage/UserPosts/UserPosts';
import Login from './Components/Shared/Login/Login';

export const PostsContext = createContext();

function App() {
  const [globalPosts, setGlobalPosts] = useState([]);
  // const [allGlobalUsers, setAllGlobalUsers] = useState([]);
  return (
    <PostsContext.Provider value={[globalPosts, setGlobalPosts]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/usersPostDetails/:postID">
            <UsersPostDetails />
          </Route>
          <Route path="/loadMore">
            <LoadMore/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/editPost/:postEditId">
            <EditPost/>
          </Route>
          <Route path="/allUserInfo/:id">
            <AllUserInfo/>
          </Route>
          <Route path="/userPosts">
            <UserPosts/>
          </Route>
          <Route path="/login">
            <Login/>
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
