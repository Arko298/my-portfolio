import { sanityClient, urlFor } from '../lib/sanity';
import { About } from '../lib/sanity.types';
import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';
import { TiArrowRight } from 'react-icons/ti';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

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
      <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
        <div className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
          Hello Everyone! I am Sayantan
        </div>
        <div className="text-left text-white mt-4 prose">
          <PortableText value={about?.bio || []} />
        </div>
        <div className="flex mt-8">
          <div className="pt-4 flex gap-5">
            <div className="flex gap-3">
              <CiLocationOn size={16} />
              <div className="text-white text-sm">Kolkata, India</div>
              <div>
            <Link href="/about">
              <button className="flex items-end  gap-2 text-blue-400 hover:text-blue-300">
                Know More <TiArrowRight />
              </button>
            </Link>
          </div>
            </div>
          </div>
          
        </div>
      </div>
    // </div>
  );
}