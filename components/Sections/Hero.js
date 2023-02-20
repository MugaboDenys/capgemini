import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video className="-z-10 absolute w-full" src="/davos.mp4" autoPlay loop></video>
      <div className=" opacity-80 bg-gradient2 rounded-xl absolute bottom-0 left-10">
        <div className="w-[43rem] h-72 flex items-center justify-center">
            <h3 className="uppercase cursor-pointer text-4xl font-semibold group relative ">Technovision 2023<span className="-z-10 h-10 left-0 absolute w-0 transition-all bg-lightblue group-hover:w-full duration-300"></span></h3>
            
        </div>
        <div className="flex justify-end mr-6 mb-5 "><Link href={'/'} className="group px-4 py-2  border-black rounded-full border-2 relative overflow-clip">Read more <span className="-z-10 h-10 top-0 left-0 absolute w-0 transition-all group-hover:bg-lightblue bg-transparent group-hover:w-full rounded-full border-2 border-transparent duration-300"></span></Link></div>
      </div>
    </div>
  );
};

export default Hero;
