import React from 'react'
import avatar from '../assets/owner.jpg'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { setAlert, setGlobalState, setLoadingMsg, useGlobalState } from '../store'
import { payToMint } from '../Minting'
import { truncate } from '../store';


const Hero = () => {
    const [nfts] =useGlobalState('nfts')
    const onMint = async() =>{
        setGlobalState('loading',{
            show:true,
            msg: 'Minting New Nft to your account'
        })

        await payToMint()
        .then(()=> setAlert('Minting successfull...', 'green'))
        .catch(() => setGlobalState('loading' ,{show:false,msg:''}))
    }
    const [connectedAccount] = useGlobalState('connectedAccount')

    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={30} /> LinkedIn
                </>
            ),
            href: "https://linkedin.com",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={30} /> GitHub
                </>
            ),
            href: "https://github.com/raj23jarwa",
        },
        {
            id: 3,
            child: (
                <>
                    <HiOutlineMail size={30} /> Mail
                </>
            ),
            href: "mailto:raj23jarwa@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    <FaTwitter size={30} /> Twitter
                </>
            ),
            href: "https://twitter.com/raj_singh_23",
        },
    ];

    return (
        <div className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_960_720.png')] bg-no-repeat bg-cover">
            <div className='flex flex-col justify-center items-center mx-auto py-16'>
                <div className='text-white  font-bold text-center'>
                    <h1 className='text-5xl'>AI Arts <br />
                        <span className='text-gradient'> Nfts </span>
                        <span className=''>Collection</span>
                    </h1>
                    <p className='text-sm mt-3 shadow-xl font-semibold'>Mint and collect the hottest Nfts</p>
                    <button 
                    className='shadow-xl mt-2  shadow-black bg-[#e32970] hover:bg-[#bd255f] text-white text-sm rounded-lg space-x-2 p-2'
                    onClick={onMint}>
                        Mint Now 
                    </button>
                    <a
                        href="https://github.com/raj23jarwa"
                        className='flex justify-center items-center space-x-2 bg-[#000000ad] rounded-full my-4 pr-3 cursor-pointer'
                        target="_blank">
                        <img
                            className='w-11 h-11 object-contain rounded-full'
                            src={avatar}
                            alt="owner" />
                        <div className='flex flex-col font-semibold text-sm text-white'>
                            {/* <span> 0x5f...146a</span> */}
                            <span>{truncate(connectedAccount,4,4,11)}</span>
                            <span className='text-[#e32970]'>rajkumar</span>
                        </div>
                    </a>
                    <p className='text-sm font-medium text-center text-gray-200'>
                        Experience the future of digital art ownership with our innovative minting platform. <br/>Seamlessly create,
                         buy, and sell unique digital assets. Join our vibrant community of <br/>
                        artists and collectors shaping the NFT landscape. Start minting your digital masterpieces today!
                    </p>
                    <ul className="flex justify-center space-x-4 mt-3 items-center">
                        {links.map(({ id, child, href, style }) => (
                            <li
                                key={id}
                                className={"cursor-pointer text-white hover:text-[#e32970] " + style}
                            >
                                <a href={href} target="_blank" rel="noopener noreferrer">
                                    {child}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className='shadow-xl flex justify-center items-center w-10 h-10 rounded-full bg-white 
                                   cursor-pointer p-3 ml-[50%] mt-2 text-black hover:bg-[#bd255f] 
                                    hover:text-white transition-all duration-75 delay-100'>
                        <span className='text-sm font-bold '>
                           {nfts.length}/99
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
