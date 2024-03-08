import Alert from "./components/Alert"
import Artworks from "./components/Artworks"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Loader from "./components/Loader"

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient">
      <Header/>   
       <Hero/>
       <Artworks/>
       <Footer/>
       <Alert/>
       <Loader/>
      </div>
     </div>
  )
}

export default App
