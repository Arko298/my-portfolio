import Image from "next/image";

import LetsConnect from "@/components/letsConnect/LetsConnect"



export default function Home() {
  return (
    <>
    
      {/** a navbar then from atom i will use lets connect part then I'm a all that typed text to be arriving like I am a web developer after sometimes it will be like I am a App dev etc like this it will be a multipage website */}
      <div className="flex flex-col items-center justify-center lg:flex-row ">
      <div className=" w-60 h-60 rounded-full border-8 border-purple-500 shadow-xl">
        <Image
          src="/images/profile.jpg"
          width={240}
          height={180}
          className=" rounded-full sm:h-56"
          alt="profile"
        />
      </div>
      <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
        <h2
          className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl"
        >
          {/**  eslint-disable-next-line react/no-unescaped-entities*/}
          Hello Sayantan Here!!
        </h2>
        <LetsConnect/>
        </div>
        </div>
       
      
    
    </>
  );
}
