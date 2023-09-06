import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Landingpage from './component/Landingpage'
import Navbar from './component/Navbar'
import Login from './component/Login'
import Allcourse from './component/Allcourse'
function App() {


  return (
<>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/'  />
  <Route index element={<Landingpage/>} />
  <Route path='/course' element={<Allcourse/>} />
    <Route  path='/course/:id' element={"singlecourse"} />
 
  <Route path='/about' element={'about'} />
  <Route path='/login' element={<Login/>} />

</Routes>
</BrowserRouter>
</>
  )
}

export default App
