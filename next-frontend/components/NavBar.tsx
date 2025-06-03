import sharedClasses from "../constants/constants";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <aside className="w-1/4 bg-card p-6 sticky top-0 h-screen overflow-y-auto bg-black">
      <div className="text-center text-white mb-4">
        <Image src="/images/profile.jpg" height={60} width={60} alt="Profile Picture" className="w-24 h-24 mx-auto mb-2 object-cover object-center rounded-full sm:w-12 sm:h-12" />
        <h3 className="text-lg font-bold">Sayantan</h3>
        <div className={sharedClasses.mutedForeground}>Web developer, DevOps Engineer</div>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/" className={`block py-2 ${sharedClasses.text} hover:text-green-600`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`block py-2 ${sharedClasses.primaryColor} hover:text-green-600`}>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className={`block py-2 ${sharedClasses.primaryColor} hover:text-green-600`}>
              Projects
            </Link>
          </li>
          {/* <li>
            <Link href="/stack" className={`block py-2 ${sharedClasses.primaryColor} hover:text-green-600`}>
              Stack
            </Link>
          </li> */}
          <li>
            <Link href="/contact" className={`block py-2 ${sharedClasses.primaryColor} hover:text-green-600`}>
              Connect
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default NavBar;