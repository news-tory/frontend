import react from 'react';
import {BrouseRouter as Routes, Route, Router} from 'react-router-dom';
import Main from "./pages/main";
import Community from "./pages/community";
import Mypage from "./pages/Mypage";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={`/`} element={<Main/>}></Route>
          <Route path={'/community/'} element={<Community/>}></Route>
          <Route path={'/mypage/'} element={<Mypage/>}></Route>
        </Routes>
      </Router>
      </div>
  );
}

export default App;
