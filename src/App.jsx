import './App.css'
import Welcomeview from './view/welcomeview/Welcomeview'
import Productview from './view/productview/Productview'
import Shopcart from './view/shopcart/Shopcart'
import Condicionview from './view/condicionview/Condicionview'
import Nbenterprise from './components/nbenterprise/Nbenterprise'
import Header from './components/header/Header'
import Mainnb from './components/mainnb/MainNb'
import Footer from './components/footer/Footer'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom"

function App() {

  return (
      <Router>
      <Nbenterprise/>
      <Header/>
      <Mainnb/>
      <Routes>
        <Route path="/welcomeview" element={<Welcomeview />} />
        <Route path="/productview" element={<Productview />} />
        <Route path="/shopcart" element={<Shopcart />} />
        <Route path="/condicionview" element={<Condicionview />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
