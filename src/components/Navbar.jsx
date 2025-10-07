import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className = "bg-green-600">
            <div className = "h-20 items-center flex justify-between">
                {/* Logo */}
                <div className="text-3xl text-white font-bold px-4">Logo</div>
                    {/* buttons desktop */}
                    {/* Assim que o width da tela for maior que small, a div aparece. */}
                    <div className="hidden sm:block"> 
                        <a href=""  className="text-white text-lg px-4">Link 1</a>
                        <a href=""  className="text-white text-lg px-4">Link 2</a>
                        <a href=""  className="text-white text-lg px-4">Link 3</a>
                        <a href=""  className="text-white text-lg px-4">Link 4</a>
                    </div>
                    <button onClick ={() => {
                        setIsOpen(!isOpen)
                    }} 
                    className = "block sm:hidden px-4"
                    ><FiMenu className="text-white text-3xl"/></button>
                </div>
                {/* buttons mobile */}
                 <div className={`${
                    isOpen ? "block" : "hidden"
                    }
                    block sm:hidden bg-gray-100 space-y-2 pb-3`}> 
                        <a href=""  className="text-gray-600 text-lg px-4 py-1 block">Link 1</a>
                        <a href=""  className="text-gray-600 text-lg px-4 py-1 block">Link 2</a>
                        <a href=""  className="text-gray-600 text-lg px-4 py-1 block">Link 3</a>
                        <a href=""  className="text-gray-600 text-lg px-4 py-1 block">Link 4</a>
                    </div>
        </nav>
    )
}