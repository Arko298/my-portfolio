// import sharedClasses from "../constants/constants";
// import Image from "next/image";
// import Link from "next/link";

// const NavBar = () => {
//   return (
//     <aside className="w-1/4 bg-card p-6 sticky top-0 h-screen overflow-y-auto bg-black">
//       <div className="text-center text-white mb-4">
//         <Image src="/images/profile.jpg" height={840} width={60} alt="Profile Picture" className="w-24 h-100 mx-auto mb-2 object-cover object-center rounded-xl sm:w-12 sm:h-12" />
//         <h3 className="text-lg font-bold">Sayantan</h3>
//         <div className={sharedClasses.mutedForeground}>Web developer, DevOps Engineer</div>
//       </div>
//       <nav>
//         <ul>
//           <li>
//             <Link href="/" className={`block py-2 ${sharedClasses.text} hover:text-green-600`}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/about" className={`block py-2 ${sharedClasses.primaryColor} hover:text-green-600`}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link href="/projects" className={`block py-2 ${sharedClasses.primaryColor} hover:text-green-600`}>
//               Projects
//             </Link>
//           </li>
//           {/* <li>
//             <Link href="/stack" className={`block py-2 ${sharedClasses.primaryColor} hover:text-green-600`}>
//               Stack
//             </Link>
//           </li> */}
//           <li>
//             <Link href="/contact" className={`block py-2 ${sharedClasses.primaryColor} hover:text-green-600`}>
//               Connect
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default NavBar;


import sharedClasses from "../constants/constants";
import Image from "next/image";
import Link from "next/link";
import { Home, User, Briefcase, Mail } from 'lucide-react';

const NavBar = () => {
  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/projects", label: "Projects", icon: Briefcase },
    { href: "/contact", label: "Connect", icon: Mail },
  ];

  return (
    <aside className="w-80 bg-gradient-to-b from-gray-900 via-gray-800 to-black p-8 sticky top-0 h-screen overflow-y-auto border-r border-gray-700/50 backdrop-blur-sm">
      <div className="text-center mb-12">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse" />
          <Image 
            src="/images/profile2.jpeg?height=120&width=120" 
            height={120} 
            width={120} 
            alt="Profile Picture" 
            className="relative w-28 h-28 mx-auto object-cover rounded-xl border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-2xl transition-transform hover:scale-105" 
          />
        </div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
          Sayantan
        </h3>
        <div className="text-gray-300 text-sm leading-relaxed">
          Web Developer & DevOps Engineer
        </div>
        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <Link 
              key={item.href}
              href={item.href} 
              className="group flex items-center gap-4 py-4 px-6 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:shadow-lg hover:shadow-blue-500/10 border border-transparent hover:border-blue-500/30"
            >
              <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
                {item.label}
              </span>
              <div className="ml-auto w-2 h-2 rounded-full bg-transparent group-hover:bg-blue-400 transition-all duration-300" />
            </Link>
          );
        })}
      </nav>
      
      <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20">
        <div className="text-sm text-gray-300 mb-2">Let&apos;s connect!</div>
        <div className="text-xs text-gray-400">
          Available for freelance projects and collaborations
        </div>
      </div>
    </aside>
  );
};

export default NavBar;
