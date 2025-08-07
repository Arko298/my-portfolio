// lib/sanity.types.ts
export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  images: {
    src: string; asset: { _ref: string }; alt: string 
}[];
  projectUrl?: string;
  githubUrl?: string;
  startDate?: string;
  endDate?: string;
  technologies?: Skill[];
}

export interface About {
  _id: string;
  title: string;
  bio: any[];
  profileImage?: { asset: { _ref: string }; alt: string };
  resume?: { asset: { _ref: string } };
}

export interface Skill {
  _id: string;
  name: string;
  proficiency: number;
  icon?: { asset: { _ref: string } };
}

export interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
  submittedAt: string;
}