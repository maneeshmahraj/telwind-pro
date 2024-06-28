
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./components/Footer";
import Registration from "./components/Registration";
import Admin from "./components/Admin";
import Cart from "./Cart";


const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="registration" element={<Registration/>}/>
      <Route path="admin" element={<Admin/>}/>
      <Route path="wishlist" element={<Cart/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}
export default App;