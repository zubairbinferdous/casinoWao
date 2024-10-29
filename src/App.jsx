
import './App.css'
import Footer from './pages/Footer'
import Header from './pages/Header'
import Home from './pages/Home'

function App() {


  return (
    <>
          {/* <ul>
          <li><a href="/" ></a></li>
          <li><a href="/about">about</a></li>
          <li><a href="/home">home</a></li>
          
          <Link to={'/about'} > About us </Link>
        </ul> */}
      <div>
          <Header></Header>
          <Home></Home>
          <Footer></Footer>
      </div>
   
    </>
  )
}

export default App
