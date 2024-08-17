import { useState } from 'react'
import './App.css'
import  Navbar  from './componentes/Navbar'
import Header from './componentes/Header'
import Home from './componentes/Home'
import RegisterPage from './componentes/RegisterPage'
import LoginPage from './componentes/LoginPage'
import Footer from './componentes/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Header></Header>
    {/* <Home></Home> */}
       <RegisterPage></RegisterPage> 
      {/*<LoginPage></LoginPage>*/}
      <Footer></Footer>
    </>
  )
}

export default App
