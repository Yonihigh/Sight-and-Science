"use client";

import { useState } from "react";
import Navbar from "../components/Navbar"; // ✅ Import Navbar

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  content: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "A.I in EyeCare",
    excerpt: "As A.I. continues to play an increasingly significant role in the vision care industry...",
    image: "/blog3.jpg",
    content: `As A.I. continues to play an increasingly significant role in the vision care industry, Jobson has introduced the A.I. IN EYE CARE eJournal for optometrists, ophthalmologists, opticians and other eyecare professionals to stay up to date on the latest artificial intelligence technologies and news. The eJournal’s launch follows Jobson’s successful A.I. presentation during Vision Expo West 2024, titled “The Artificial Intelligence Revolution: Practical Applications in Eye Care Today.” Both the program and the eJournal launch were supported by founding sponsors Advancing Eyecare, Alcon, EssilorLuxottica and Topcon Healthcare. Supporting sponsors are Barti, CSI Dry Eye Software, Dr. Contact Lens and Neurolens.

A.I. in Eye Care will post new content weekly at aiineyecare.com, with subscribers regularly receiving email updates sharing original feature articles, news announcements, A.I. tools for eyecare, resources for further reference and more. Curated by two leading practitioners in the field—optometrist Dr. Scot Morris, OD, and ophthalmologist Dr. Rehan Ahmed, MD, the eJournal was developed to ensure that eyecare professionals have access to the latest news, resources, technologies and education available about A.I. as it relates directly to the health care profession overall and their eyecare practices specifically`,
    date: "February 12, 2025"
  },
  {
    title: "Are Blue Light Glasses Worth It?",
    excerpt: "A deep dive into blue light protection and whether you really need it...",
    image: "/blog2.jpg",
    content: `Many people spend hours in front of screens daily. Blue light glasses claim 
    to reduce eye strain and improve sleep quality. But do they really work? Studies show 
    mixed results. Some experts recommend taking frequent screen breaks instead of relying 
    solely on glasses.`,
    date: "March 5, 2025",
  },
  {
    title: "Luxury Eyewear Trends in 2025",
    excerpt: "From designer frames to high-tech lenses, here’s what’s trending...",
    image: "/blog3.jpg",
    content: `Luxury eyewear is evolving with the latest fashion and technology. 
    From lightweight titanium frames to AI-powered lenses that adjust to lighting conditions, 
    high-end eyewear brands are pushing boundaries. Find out what’s trending in 2025!`,
    date: "March 1, 2025",
  },
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <Navbar /> {/* ✅ Navbar at the top */}

      <div className="max-w-6xl mx-auto py-12 px-6">
        <h1 className="text-5xl font-extrabold text-center text-gray-800">Our Blog</h1>
        <p className="text-lg text-center text-gray-600 mt-4">
          Stay updated with the latest in eyewear trends, vision technology, and more.
        </p>

        {/* ✅ If a post is selected, show full article */}
        {selectedPost ? (
          <div className="mt-10 bg-white p-6 shadow-lg rounded-lg">
            <button
              onClick={() => setSelectedPost(null)}
              className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
            >
              ← Back to Blog
            </button>
            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-64 object-cover rounded-lg" />
            <h2 className="text-4xl font-bold text-gray-900 mt-6">{selectedPost.title}</h2>
            <p className="text-gray-500 text-sm mt-2">{selectedPost.date}</p>
            <p className="text-lg leading-relaxed mt-4 whitespace-pre-line">{selectedPost.content}</p>
          </div>
        ) : (
          /* ✅ Show blog list if no post is selected */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                onClick={() => setSelectedPost(post)} // ✅ Clicking opens the full article
                className="cursor-pointer block bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                <div className="p-5">
                  <h2 className="text-2xl font-bold text-gray-900">{post.title}</h2>
                  <p className="text-gray-500 text-sm mt-1">{post.date}</p>
                  <p className="text-gray-700 mt-2">{post.excerpt}</p>
                  <p className="mt-3 text-blue-500 font-semibold">Read More →</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
