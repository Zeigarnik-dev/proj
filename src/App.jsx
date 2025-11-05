import Main from "./pages/Main"
import Catalog from './pages/Catalog/Catalog'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Route, Routes } from "react-router"
import OneP from "./pages/OneP/OneP"
import Cart from "./pages/Cart/Cart"
import { useEffect, useState } from "react"
function App() {
  const [cart, setCart] = useState([])
  useEffect(() => {
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')))
    } else {
      setCart([])
    }
  }, [])
  return (
    <>
      <div className="wrapper">
        <Header cart={cart}/>
        <main>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/catalog/:id" element={<OneP cart={cart} setCart={setCart}/>}></Route>
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
