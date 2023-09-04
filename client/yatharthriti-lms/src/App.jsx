import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Landingpage from './component/Landingpage'
import Navbar from './component/Navbar'
function App() {


  return (
<>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/'  />
  <Route index element={<Landingpage/>} />
  <Route path='/course' element={"course"} />
  <Route path='/about' element={'about'} />
  <Route path='/login' element={'login'} />

</Routes>
</BrowserRouter>
</>
  )
}

export default App
