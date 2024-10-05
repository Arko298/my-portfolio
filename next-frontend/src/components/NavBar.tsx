
// // https://roco.framer.website/  https://framer.com/projects/Roco-copy--eaQqxoYNXmJsjBL3O6IR-cNztD?node=augiA20Il
import sharedClasses from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <aside className="w-1/4 bg-card p-6 sticky top-0 h-screen overflow-y-auto bg-black">
      <div className="text-center text-white mb-4">
        <Image src="/images/profile.jpg" height={60} width={60} alt="Profile Picture" className="w-24 h-24 mx-auto mb-2 object-cover object-center rounded-full" />
        <h3 className="text-lg font-bold">Sayantan</h3>
        <p className={sharedClasses.mutedForeground}>Web developer, DevOps Engineer</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/" className={`block py-2 ${sharedClasses.text} ${sharedClasses.primaryColorHover}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`block py-2 ${sharedClasses.primaryColor} ${sharedClasses.primaryColorHover}`}>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className={`block py-2 ${sharedClasses.primaryColor} ${sharedClasses.primaryColorHover}`}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/stack" className={`block py-2 ${sharedClasses.primaryColor} ${sharedClasses.primaryColorHover}`}>
              Stack
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`block py-2 ${sharedClasses.primaryColor} ${sharedClasses.primaryColorHover}`}>
              Connect
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default NavBar;