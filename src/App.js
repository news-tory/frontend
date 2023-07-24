import react from 'react'
import {BrouseRouter, Routes, Route, BrowserRouter} from 'react-router-dom'
import Main from "./pages/main"
import Community from "./pages/community"
import Mypage from "./pages/Mypage"



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/community/' element={<Community/>}></Route>
          <Route path='/mypage/' element={<Mypage/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
