import Link from "next/link";


const Header = ()=>{
    return (
        <header className='py-6 px-4 container mx-auto text-xl flex flex-nowrap  items-center justify-between'>
            <div className='flex items-center w-full md:2/3'>
                <Link href="/" className=" text-white ">
                    Sayantan
                </Link>
                 
            </div>

            <ul className='flex items-center justify-between w-full md:w-1/3 mt-4 gap-4'>
                <li className=' text-blue-500 hover:-translate-y-2 duration-500 transition-all hover:text-cyan-400'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='text-blue-500 hover:-translate-y-2 duration-500 transition-all hover:text-cyan-400'>
                    <Link href="/about">About</Link>
                </li>
                <li className='text-blue-500 hover:-translate-y-2 duration-500 transition-all hover:text-cyan-400'>
                    <Link href='/projects'>Portfolio</Link>
                </li>
                <li className='text-blue-500 hover:-translate-y-2 duration-500 transition-all hover:text-cyan-400'>
                    <Link href='/blog'>Blog</Link>
                </li>
                <li className='text-blue-500 hover:-translate-y-2 duration-500 transition-all hover:text-cyan-400'>
                    <Link href='/'>Contact</Link>
                </li>

            </ul>
        </header>
    );
};
export default Header;