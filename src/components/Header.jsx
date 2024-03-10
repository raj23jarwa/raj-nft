import ethLogo from '../assets/ethlogo.png';
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { connectWallet } from '../Minting';
import { truncate, useGlobalState } from '../store';
const Header = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "Explore",
        },
        {
            id: 2,
            link: "Feature",
        },
        {
            id: 3,
            link: "Community",
        },
    ];
    const [connectedAccount] = useGlobalState('connectedAccount')

    return (
        <div className="flex justify-between items-center gradient w-full h-16 px-4 text-white fixed">
            <div className='flex items-center'>
                <div className="flex items-center">
                    <img src={ethLogo} alt="logo" className="w-8" />
                    <span className="text-2xl font-signature ml-2 whitespace-nowrap">Minting - Dapp</span>
                </div>
                <div className="hidden md:flex items-center gap-96 justify-end ml-96">
                    <ul className="hidden md:flex">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
                            >
                                <Link to={link} smooth duration={500}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* If my wallet is connected and vice versa */}
                    
                    {connectedAccount ? ( <button className="shadow-lg shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2 rounded-full cursor-pointer" onClick={connectWallet}>
                       {truncate(connectedAccount,4,4,11)}
                    </button>) : ( 
                        <button className="shadow-lg shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2 rounded-full cursor-pointer" onClick={connectWallet}>
                        Connect Wallet
                    </button>)}
                   
                </div>
            </div>
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-white md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <div>
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen gradient text-white">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className="px-4 cursor-pointer capitalize py-6 text-3xl"
                            >
                                <Link
                                    onClick={() => setNav(!nav)}
                                    to={link}
                                    smooth
                                    duration={500}
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                        <li className="px-4 cursor-pointer capitalize py-6 text-3xl">
                        {connectedAccount ? ( <button className="shadow-lg shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2 rounded-full cursor-pointer" onClick={connectWallet}>
                       {truncate(connectedAccount,4,4,11)}
                    </button>) : ( 
                        <button className="shadow-lg shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] md:text-3xl p-2 rounded-full cursor-pointer" onClick={connectWallet}>
                        Connect Wallet
                    </button>)}
                        </li>
                    </ul>
                </div>
            )}


        </div>
    );
};

export default Header;
