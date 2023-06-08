import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage'
import SigninPage from './Pages/SigninPage'
import SignoutPage from './Pages/SignoutPage'
import OrderPage from './Pages/OrderPage'
import MenuPage from './Pages/MenuPage'
import AboutPage from './Pages/AboutPage'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/Contact' element={<ContactPage />}/>
        <Route path='/About' element={<AboutPage />}/>
        <Route path='/Menu' element={<MenuPage />}/>
        <Route path='/Order' element={<OrderPage />}/>
        <Route path='/Signin' element={<SigninPage />}/>
        <Route path='/Signout' element={<SignoutPage />}/>
      </Routes>
    </BrowserRouter>
    </>
  )

}
   

export default App
