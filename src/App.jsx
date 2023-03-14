// import { useState } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
// import reactLogo from './assets/react.svg'
import './assets/App.css'
import Navbar from './Navbar'
import Api from './Api'
function App() {
  return (  
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Api/>}/>
              <Route path='/api' element={<Api/>}/>
              <Route path='/*' element={<h1>Page Not found</h1>}/>
          </Routes>
      </BrowserRouter>
  )
}
export default App
