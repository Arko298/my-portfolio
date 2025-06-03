// components/LetsConnect.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { sanityClient } from '../lib/sanity';

interface SocialLink {
  _id: string;
  platform: string;
  url: string;
}

export default function LetsConnect() {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    sanityClient
      .fetch<SocialLink[]>('*[_type == "socialLinks"] { _id, platform, url }')
      .then((data) => setSocialLinks(data))
      .catch((error) => console.error('Error fetching social links:', error));
  }, []);

  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <Link key={link._id} href={link.url} className="text-blue-400 hover:underline">
          {link.platform}
        </Link>
      ))}
    </div>
  );
}