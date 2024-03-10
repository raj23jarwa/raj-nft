import ethlogo from '../assets/ethlogo.png'
// import image1 from '../assets/imagee1.jpg'
// import image2 from '../assets/imagee2.jpg'
// import image3 from '../assets/imagee3.jpg'
// import image4 from '../assets/rabbit.jpg'
// import image5 from '../assets/little_don.jpg'
// import { useGlobalState } from '../store'
import { useEffect, useState } from 'react'

const Artworks = ({artworks}) => {
    // const imageUrls = [
    //     image1,
    //     image2,
    //     image3,
    //     image4,
    //     image5
    // ];
    const [end,setEnd] =useState(4)
    const [count] =useState(4);
    const[nfts,setNfts] =useState([])
    console.log(artworks);
     const getNfts= () =>{
        return artworks.slice(0,end)
     }

     useEffect(() => {
      setNfts(getNfts())
     }, [artworks,end])
     


    return (
        <div className="bg-[#131835] py-10">
            <div className="w-4/5 mx-auto">
                <h4 className="text-gradient uppercase text-2xl">Artworks</h4>

                <div className="flex flex-wrap justify-center items-center mt-4 gap-6 md:flex-wrap lg:flex-wrap">
                    {nfts.map((nft,index) => (
                        <a
                            key={index}
                            href={nft.url}
                            target='_blank'
                            className={`relative shadow-xl shadow-black p-3 bg-white rounded-lg item w-64 h-80 object-contain  bg-no-repeat bg-cover overflow-hidden mr-2 mb-2 cursor-pointer transition-all duration-75 delay-100 hover:shadow-[#bd255f]`}
                            style={{ backgroundImage: 'url(' + nft.imageURL + ')' }}
                            >
                            <div className='absolute bottom-0 left-0 right-0 flex justify-between w-full 
                            items-center label-gradient p-2 text-white text-sm'>
                                <p>Raj NFT #{nft.id}</p>
                                <div className='flex justify-center items-center space-x-2'>
                                    <img 
                                    className='w-5 cursor-pointer'
                                    src={ethlogo} alt="" />
                                    {nft.cost}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                {artworks.length>0 && artworks.length>nfts.length ?(
                <div className='flex justify-center items-center mx-auto mt-4'>
                   
                      <button 
                      className='bg-[#e32790] shadow-black shadow-xl text-white rounded-lg p-2 cursor-pointer'
                      onClick={()=>setEnd(end+count)}
                      >Load More</button>   
                </div>
                  ):null }  
            </div>
        </div>
    );
};

export default Artworks