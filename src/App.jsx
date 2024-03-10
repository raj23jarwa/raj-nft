import Alert from "./components/Alert"
import Artworks from "./components/Artworks"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Loader from "./components/Loader"
import { useEffect } from "react"
import { isWallectConnected, loadNfts } from "./Minting"

const App = () => {
  useEffect(async() => {
  await isWallectConnected().then(()=>console.log("Blockchain is loaded"))
  await loadNfts()
  }, [])
  
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
