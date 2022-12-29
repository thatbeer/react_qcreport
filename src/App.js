import React from 'react'
import { Routes , Route } from 'react-router-dom'
import GlobalHeader from './components/GlobalHeader'
import DetailPage from './page/DetailPage'
import LoginPage from './page/Login'
import Mainpage from './page/MainPage'
import ProjectPage from './page/ProjectPage'
// import SidePage from './page/SidePage'
import Protected from './utils/protected'


function App() {
  return (
    <Routes>
      <Route path='/' element={<div className=' w-screen'>
        <GlobalHeader />
        </div>} >
        <Route index element={<Mainpage/>} />
        <Route path="/project" exact element={<ProjectPage/>} />
        <Route path="/project/:report" element={<DetailPage/>} />
        {/* <Route path="/side" element={<SidePage/>} /> */}
      </Route>
      <Route element={<h1>error 404</h1>} path="*" />
      <Route path='/auth' element={<LoginPage/>} />
    </Routes>
  )
}

export default App
