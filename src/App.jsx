import Alert from "./components/Alert"
import Artworks from "./components/Artworks"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Loader from "./components/Loader"
import { useEffect } from "react"
import { isWallectConnected, loadNfts } from "./Minting"
import { useGlobalState } from './store'


const App = () => {
  const [nfts] =useGlobalState('nfts');
  useEffect(() => {
    const fetchData = async () => {
      await isWallectConnected().then(() => console.log("Blockchain is loaded"));
      await loadNfts();
    };
    
    fetchData();
  }, []);
  
  
  return (
    <div className="min-h-screen">
      <div className="gradient">
      <Header/>   
       <Hero/>
       <Artworks  artworks={nfts}/>
       <Footer/>
       <Loader/>
       <Alert/>
      </div>
     </div>
  )
}

export default App
