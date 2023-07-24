<<<<<<< HEAD
import react from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Main from "./pages/main"
import Community from "./pages/community"
import Mypage from "./pages/Mypage"
=======
import react from 'react';
import {BrouseRouter as Routes, Route, Router} from 'react-router-dom';
import Main from "./pages/main";
import Community from "./pages/community";
import Mypage from "./pages/Mypage";
>>>>>>> refs/remotes/origin/main



function App() {
  return (
    <div>
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route path='/' element={<Main/>}/>
          <Route path='/community/' element={<Community/>}/>
          <Route path='/mypage/' element={<Mypage/>}/>
=======
          <Route path={`/`} element={<Main/>}></Route>
          <Route path={'/community/'} element={<Community/>}></Route>
          <Route path={'/mypage/'} element={<Mypage/>}></Route>
>>>>>>> refs/remotes/origin/main
        </Routes>
      </Router>
      </div>
  );
}

export default App;
