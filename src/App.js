import react from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Main from "./pages/main"
import Community from "./pages/community"
import Mypage from "./pages/mypage"


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/community/' element={<Community/>}/>
          <Route path='/mypage/' element={<Mypage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
