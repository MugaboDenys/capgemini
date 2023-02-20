import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo2 from "../../public/logo-white.svg";
import logo3 from "../../public/mobile-logo.svg"
import Globe from "../Icons/Globe";
import Logo1 from "../Icons/Logo1";
import Navlink from "../Navlink";

const Navbar = () => {
    const [animateNav, setAnimateNav] = useState(false);
    
    useEffect (()=>{
        const listen = ()=>{
            window.scrollY > 100 ? setAnimateNav(true) : setAnimateNav(false)
        }
        window.addEventListener('scroll', listen);
        return (window.addEventListener('scroll', listen))
    }, []);
    const menuLinks = [
        {title : "Insights", link : "https://www.capgemini.com/insights/", },
        {title : "Industries", link : "https://www.capgemini.com/insights/", },
        {title : "Services", link : "https://www.capgemini.com/insights/" },
        {title : "Careers", link : "https://www.capgemini.com/insights/" },
        {title : "News", link : "https://www.capgemini.com/insights/" },
        {title : "About us", link : "https://www.capgemini.com/insights/" }
    ]
    return ( 
        <div className={`bg-gradient1 hover:bg-nobg hover:text-black text-white w-full fixed z-10 hover:bg-white  duration-300 ${animateNav && "bg-white text-black bg-nobg py-1"}`}>
            <div className={`flex justify-end px-5 transition-transform gap-x-7 origin-right py-10 ${animateNav && "duration-500 scale-x-0 ease-in origin-right py-0"}`}>
                <Navlink link={'/'} name={"Contact us"} text={animateNav && "text-black"} />
                <Navlink link={'/'} name={"Investors"} text={animateNav && "text-black "} />
                <Navlink link={'/'} name={"Contact us"} text={animateNav && "text-black"} />
            </div>
            <div className="px-10 flex text-white">
               <Image src={animateNav ? logo3 : logo2} alt=""/> 
               <div className={`flex pl-20 gap-x-3 ${animateNav && "text-black"}`}>
                {menuLinks.map((item)=>(
                    <div key={item.title} className="">
                        <Link href={item.link} >{item.title}</Link>
                    </div> 
                ))}
                </div>     
            </div>
        </div>
     );
}
 
export default Navbar;