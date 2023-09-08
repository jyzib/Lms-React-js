import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Landingpage from './component/Landingpage'
import Navbar from './component/Navbar'
import Login from './component/Login'
import Allcourse from './component/Allcourse'
import Coursebody from './component/Coursebody'
function App() {


  return (
<>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/'  />
  <Route index element={<Landingpage/>} />
  <Route path='/course' element={<Coursebody/>} >
    <Route  index element={<Allcourse/>} />
    <Route path='learning-plan' element={"j"} />
    <Route  path=':id' element={"singlecourse"} />
 </Route>
  <Route path='/about' element={'about'} />
  <Route path='/login' element={<Login/>} />

</Routes>
</BrowserRouter>
</>
  )
}

export default App
