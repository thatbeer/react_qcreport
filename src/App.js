import React, { useEffect } from 'react'
import { Routes , Route, useNavigate } from 'react-router-dom'
import GlobalHeader from './components/GlobalHeader'
import DetailPage from './page/DetailPage'
import LoginPage from './page/Login'
import Mainpage from './page/MainPage'
import ProjectPage from './page/ProjectPage'
import SidePage from './page/SidePage'
import Protected from './utils/protected'


const token = true

function App() {
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken")

  useEffect( () => {
    if (!token) {
      navigate('/auth')
    } 
  },[token])

  // if (!token) {
  //   return <LoginPage />
  // }
  


  return (
    <Routes>
      <Route path='/' 
        element={<GlobalHeader />}>
        <Route index element={<Mainpage/>} />
        <Route path="/:project" exact element={<ProjectPage/>} />
        <Route path="/project/:report" element={<DetailPage/>} />
        <Route path="/side" element={<SidePage/>} />
      </Route>
      <Route element={<h1>error 404</h1>} path="*" />
      <Route path='/auth' element={<LoginPage/>} />
    </Routes>
  )
}

export default App
