import react from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Main from "./pages/main"
import Community from "./pages/community"
import Mypage from "./pages/mypage"
import Signup from "./pages/signup"
import Modal from "./components/changemodal"



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/community/' element={<Community/>}/>
          <Route path='/mypage/' element={<Mypage/>}/>
          <Route path='/signup/' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
