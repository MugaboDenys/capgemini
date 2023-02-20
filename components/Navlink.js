import Link from "next/link";

const Navlink = ({link,name, text}) => {
    return ( 
        <Link href={link} className={`group relative w-fit ${text} hover:text-blue-400 duration-200`}> {name} <span className="w-0 h-[2px] absolute bottom-0 left-0 bg-blue-600 transition-all duration-300 ease-in group-hover:w-full"/> </Link>
     );
}
 
export default Navlink;