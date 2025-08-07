import { sanityClient, urlFor } from '../lib/sanity';
import { About } from '../lib/sanity.types';
import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';
import { TiArrowRight } from 'react-icons/ti';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { MapPin, ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export default async function Hero() {
  let about: About | null = null;

  try {
    about = await sanityClient.fetch<About>(
      `*[_type == "about"][0] {
        _id,
        title,
        bio,
        profileImage
      }`
    );
  } catch (error) {
    console.error('Error fetching about:', error);
    return <div className="text-center text-red-400">Failed to load hero data</div>;
  }

  return (
    // <div className="flex flex-col items-center justify-center lg:flex-row">
    //   {about?.profileImage && (
    //     <div className="w-60 h-60 rounded-full border-8 border-blue-400 shadow-xl">
    //       <Image
    //         src={urlFor(about.profileImage).width(240).height(180).url()}
    //         width={240}
    //         height={180}
    //         className="rounded-full"
    //         alt={about.profileImage.alt || 'Profile'}
    //       />
    //     </div>
    //   )}
      // <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
      //   <div className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
      //     Hello Everyone! I am Sayantan
      //   </div>
      //   <div className="text-left text-white mt-4 prose">
      //     <PortableText value={about?.bio || []} />
      //   </div>
      //   <div className="flex mt-8">
      //     <div className="pt-4 flex gap-5">
      //       <div className="flex gap-3">
      //         <CiLocationOn size={16} />
      //         <div className="text-white text-sm">Kolkata, India</div>
      //         <div>
      //       <Link href="/about">
      //         <button className="flex items-end  gap-2 text-blue-400 hover:text-blue-300">
      //           Know More <TiArrowRight />
      //         </button>
      //       </Link>
      //     </div>
      //       </div>
      //     </div>
          
      //   </div>
      // </div>
    // </div>
    
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="text-center space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Available for work</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="block text-gray-300 mb-2">Hello, I&apos;m</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
                Sayantan
              </span>
            </h1>
          </div>

          {/* Bio */}
          <div className="max-w-2xl mx-auto">
            <div className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              <PortableText value={about?.bio || []} />
            </div>
          </div>

          {/* Location and CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Kolkata, India</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="/about">
                <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105">
                  Know More 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              
              <button className="flex items-center gap-2 px-6 py-3 border border-gray-600 rounded-full font-medium transition-all duration-300 hover:bg-gray-800 hover:border-gray-500">
                <Download className="w-4 h-4" />
                Resume
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-12">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" },
            ].map((social) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  className="group p-3 rounded-full bg-gray-800/50 border border-gray-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:border-blue-500/50 hover:scale-110"
                  aria-label={social.label}
                >
                  <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </Link>
              );
            })}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}