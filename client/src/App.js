import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Getstarted from './Components/getstarted';
import Login from './Components/login';
import Signup from './Components/signup';
import React, { useState,useEffect } from 'react'
import Splash from './Components/splash';
// import Single_product from './Components/single_p'
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
   <>
     <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Getstarted/>
        </Route>
      </Switch> 
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch> 
      <Switch>
        <Route path="/signup">
          <Signup/>
        </Route>
      </Switch> 
      {/* <Switch> */}
        {/* <Route path="/SINGLE">
          <Single_product/>
        </Route> */}
      {/* </Switch>  */}
    </BrowserRouter>
   </>
  );
}
export default App;
