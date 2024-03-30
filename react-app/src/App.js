import './stylesheets/App.css';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import PostsList from "./components/posts-list";
import EditPost from "./components/edit-post";
import CreatePost from "./components/create-posts"
import CreateUser from "./components/create-user"
import Header from "./components/Header"
import Home from "./components/Home";
import PostPage from "./components/PostPage";

function App() {
  return (
      <div className='container'>
          <BrowserRouter>
              <Header></Header>
                  <div className='feed'>
                      <Routes>
                          <Route path="/" exact element={<><Home/><PostsList/></>}></Route>
                          <Route path="/edit/:id" element={<EditPost />}></Route>
                          <Route path="/create" element={<CreatePost />}></Route>
                          <Route path="/user" element={<CreateUser />}></Route>
                          <Route path="/post/:id" element={<PostPage />}></Route>
                      </Routes>
                  </div>
          </BrowserRouter>
      </div>
  );
}

export default App;
