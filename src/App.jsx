import './App.css'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from  './components/SignUp.jsx'
import UserRole from './components/UserRole.jsx'
import Contact from './components/Contact.jsx'

import{Link , Routes , Route} from 'react-router-dom'

function App() {

  return (
    <div className='w-full h-screen'>

      <NavBar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/select-role" element={<UserRole />} />
        <Route path="/sign-up/business" element={<SignUp/>}/>
        <Route path="/sign-up/consumer" element={<SignUp/>}/>
        <Route path="*"  element={<div>Oops Something Went Wrond</div>}/>
      </Routes>
      
      
    </div>
  )
}

export default App
