import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Component/Nav'
import ScrollToTop from './Logics/scrolltop'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import Contact from './Pages/Contact'

function App() {


  return (
    <>
      <BrowserRouter >
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          {/*<Route path="/dashboard" element={<UserDashboard />}></Route>
          <Route path="/how-to" element={<HowTo />}></Route>
          <Route path="/our-blogs" element={<Blog />}></Route>
          <Route path="/auth" element={<Auth />}></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
