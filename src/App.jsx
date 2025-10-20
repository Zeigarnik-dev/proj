import Main from "./pages/Main"
import Catalog from './pages/Catalog/Catalog'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Route, Routes } from "react-router"
function App() {

  return (
    <>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/catalog" element={<Catalog/>}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
