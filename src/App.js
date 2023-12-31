import react from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Main from "./pages/main"
import Community from "./pages/community"
import Mypage from "./pages/mypage"
import Modal from "./components/changemodal"
import Login from "./pages/login"
import Search from './pages/search'
import './App.css'



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/community/' element={<Community/>}/>
          <Route path='/mypage/' element={<Mypage/>}/>
          <Route path='/login/' element={<Login/>}/>
          <Route path='/search/' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
