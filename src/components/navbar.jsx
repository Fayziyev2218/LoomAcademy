import logo from "../assets/logo.svg"
import tel from '../assets/tel.png'
import menu from '../assets/minu.png'
import x from '../assets/x.svg'
import { useState } from "react"


export default function Navbar(){
    const [burger,setBurger] = useState(false)
    const handBurger = () =>{
        setBurger(!burger)
    }
    return(
        <div className="bg-[#141024] py-[30px] sticky top-0 z-40">
            <div className="mx-auto px-[100px] max-md:px-[20px]">
                <div className="flex items-center justify-between perspective-[1000px] group">
                    <a href="#home"><img className="max-[450px]:w-[136px]" src={logo} alt="logo" /></a>

                    <ul className="flex items-center gap-[40px] max-[840px]:hidden">
                        <li>
                            <a className="font-jost font-normal text-[20px] text-white duration-500 ease-in" href="#school">О школе</a>
                        </li>
                        <li>
                            <a className="font-jost font-normal text-[20px] text-white" href="#trener">Тренеры</a>
                        </li>
                        <li>
                            <a className="font-jost font-normal text-[20px] text-white" href="#cost">Стоимость</a>
                        </li>
                    </ul>

                    <a className="font-jost font-semibold text-[30px] text-white max-[1200px]:hidden" href="tel:+78000001122">+7 800 000 11 22</a>
                    <div className="flex gap-[10px]">
                        <a className="transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-360 hidden max-[1200px]:block" href="tel:78000001122"><img src={tel} alt="tel" /></a>
                        <button onClick={handBurger} className="hidden max-[840px]:block"><img src={menu} alt="menu" /></button>
                    </div>

                    
                </div>

                {/* burger minu */}
                <div className={`hidden max-[840px]:block w-full h-screen ml-auto bg-[#141024] z-20 p-0 fixed duration-500 ease-in top-[0%] right-0 ${burger ? "translate-x-0" : "translate-x-[200%]"}`}>
                       <button onClick={handBurger} className="absolute top-[30px] right-[17px] p-[16px] border border-gray-500 rounded-xl"><img src={x} alt="x" /></button>
                        
                        <ul className="flex items-center flex-col justify-center gap-[20px] mt-[50%]">
                            <li>
                                <a onClick={handBurger} className="font-jost font-semibold text-[30px] text-white" href="#school">О школе</a>
                            </li>
                            <li>
                                <a onClick={handBurger} className="font-jost font-semibold text-[30px] text-white" href="#trener">Тренеры</a>
                            </li>
                            <li>
                                <a onClick={handBurger} className="font-jost font-semibold text-[30px] text-white" href="#cost">Стоимость</a>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}