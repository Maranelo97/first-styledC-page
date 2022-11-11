import React from "react";
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


//pages
import Home from "./pages/Home";
import SingupPage from "./pages/SingupPage";
import PricingPage from "./pages/PricingPage";





function App() {
  return <Router>
      <GlobalStyle />
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/singup' element={<SingupPage/>} />
        <Route path='/pricing' element={<PricingPage/>} />
      </Routes>
  </Router>
}

export default App;
