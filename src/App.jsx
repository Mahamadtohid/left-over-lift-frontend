import './App.css'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from  './components/SignUp.jsx'
import UserRole from './components/UserRole.jsx'
import Contact from './components/Contact.jsx'
import AppContext from './context/AppContext.jsx'
import AdminDashBoard from './admin/AdminDashBoard.jsx'
import BusinessDashBoard  from './businessHolder/BusinessDashboard.jsx'
import UserDashBoard  from './user/UserDashBoard.jsx'
import AuthForm from './components/AuthForm.jsx'


import{Link , Routes , Route} from 'react-router-dom'
import SignUpConsumer from './components/SingUpConsumer.jsx'

function App() {

  return (
    <div className='w-full h-screen'>

      <NavBar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/select-role" element={<UserRole />} />
        <Route path="/sign-up" element={<SignUp/>}/>


        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/user/:userId"/>


        <Route path="/user/:userId" element={<UserDashBoard />} />
        <Route path="/business/:userId" element={<BusinessDashBoard />} />
        <Route path="/admin/:userId" element={<AdminDashBoard />} />


        <Route path="/sign-up/business" element={<SignUp/>}/>
        <Route path="/sign-up/consumer" element={<SignUpConsumer/>}/>
        <Route path="*"  element={<div>Oops Something Went Wrond</div>}/>
      </Routes>
      
      
    </div>
  )
}

export default App
