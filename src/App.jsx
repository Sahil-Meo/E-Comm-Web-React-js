import Navbar from './Components/Nabar/Navbar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ContextProvider } from './Components/ContextApi/CartContext'


function App() {

  return (
    <>
    <ContextProvider>
      <Navbar />
      <Outlet />
      <Footer />
      </ContextProvider>
    </>
  )
}

export default App
