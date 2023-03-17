import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { useState,useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import Splash from "./preloader/Splash";
import Aboutus from "./components/Aboutus/Aboutus";
import Done from "./preloader/done";
import Myorders from "./components/myorders/Myorders";
function App() {
        const [loading, setLoading] = useState(false);
        useEffect(()=>{
          setLoading(true)
          setTimeout(()=>{
            setLoading(false)
          },2500)
        },[])
    return (
        loading?
    <Splash></Splash>
    :
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<Aboutus/>} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/success" element={<Done/>}/>
                    <Route path="/myorder" element={<Myorders></Myorders>}/>
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
