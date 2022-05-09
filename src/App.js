import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import {NavBar,FooterBar,Welcome,About,News,SignUp,} from "./components"

const App=()=>{
  return <>

  <Router>
  <NavBar/>

    <Routes>
    <Route path="/" element={<Welcome/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/news" element={<News/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    </Routes>

    <FooterBar></FooterBar>

  </Router>





  </>
}

export default App;