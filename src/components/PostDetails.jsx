import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa6";

export default function PostDetails() {
  return (
    <section className="bg-white text-gray-900 px-6 sm:px-10 md:px-20 py-12">
      {/* Title */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug">
          Why the Next Era of Branding Belongs to Those Who Show Up
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Opinions expressed by Entrepreneur contributors are their own.
        </p>

        {/* Key Takeaways */}
        <div className="bg-[#F5F6F8] border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="font-bold mb-3 text-lg">Key Takeaways</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Purpose</strong> is no longer a differentiator. Every
              brand has a “why.”
            </li>
            <li>Community is the new currency.</li>
            <li>
              The future belongs to brands that are felt, not just seen.
            </li>
          </ul>
        </div>

        {/* Post content */}
        <div className="text-gray-800 space-y-4 leading-relaxed mb-12">
          <p>
            For years, <em>purpose</em> was the sacred word in business.
            “Start with why” became a movement. Every brand raced to define its
            mission and plaster it across a sleek landing page.
          </p>
          <p>
            But in 2025, that purpose-driven playbook has lost its magic.
            <strong> Purpose</strong> is still necessary, but no longer
            <em> sufficient</em>.
          </p>
        </div>

        {/* Subscription box */}
        <div className="bg-[#FFFBEA] border border-yellow-300 rounded-lg p-6 mb-16 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-3 sm:mb-0">
            <p className="text-gray-900 font-medium">
              The rest of this article is locked.
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Join Entrepreneur+</strong> today for access.
            </p>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md">
            Subscribe Now
          </button>
        </div>

        {/* Author Section */}
        <div className="border-t border-gray-300 pt-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Author"
              className="rounded-full w-24 h-24 object-cover"
            />
            <div>
              <h3 className="text-lg font-bold">John Emery</h3>
              <p className="text-gray-600 text-sm mb-2">
                Founder of Emery.com – an Awakening Company™ at Emery.com
              </p>
              <p className="text-xs text-gray-500 mb-3">
                <span className="font-semibold">
                  Entrepreneur Leadership Network® Contributor
                </span>
              </p>

              <div className="flex gap-4 text-gray-600 text-lg mb-4">
                <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
                <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                <FaYoutube className="hover:text-red-500 cursor-pointer" />
                <FaGlobe className="hover:text-gray-800 cursor-pointer" />
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                Former pastor turned entrepreneur, John is renowned for his
                soul-centered approach to brand consulting. In recent years he
                has emerged as a beloved guide for cultural figures and Fortune
                100 companies. His goal is to:{" "}
                <em>“Grow fruit on other people’s trees.”</em>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Content */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-lg font-bold mb-6 border-b border-gray-300 pb-2">
          Related Content
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title:
                "From Memes to Millions — How This Man Turned NBA Fans Into a Billion-Impression Powerhouse",
              tag: "Online Presence",
            },
            {
              title:
                "3 Ways Entrepreneurs Can Turn Economic Uncertainty Into Their Biggest Opportunity",
              tag: "Building a Business",
            },
            {
              title:
                "Take These 6 Steps to Scale Your Business Without Losing Your Sanity",
              tag: "Building a Business",
            },
            {
              title:
                "We Need to Rethink Our Approach to Customer Data and Identity Verification. Here’s Where to Start.",
              tag: "Business Operations & Logistics",
            },
            {
              title:
                "He Lost His Job and Quickly Started a Side Hustle — Now This ‘Queer Eye’ Star Heads Up a Major Brand",
              tag: "Thought Leaders",
            },
            {
              title:
                "AI Can Now Help Entrepreneurs Grow a Following on TikTok",
              tag: "Online Presence",
            },
          ].map((post, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
            >
              <img
                src={`https://via.placeholder.com/600x350?text=Image+${i + 1}`}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="uppercase text-xs text-blue-600 font-semibold mb-2">
                  {post.tag}
                </p>
                <h3 className="font-bold text-base leading-snug text-gray-900">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
