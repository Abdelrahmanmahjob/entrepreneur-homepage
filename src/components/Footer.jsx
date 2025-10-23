import {
    FaFacebookF,
    FaXTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaInstagram,
    FaTiktok,
    FaRss,
} from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-[#07101C] text-white px-[1rem] sm:px-[2rem] max-w-7xl py-12 text-sm">
            <div className="max-w-6xl grid grid-col-1 lg:grid-cols-2 gap-4 mx-auto border-b-2 border-dotted border-white pb-10">
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-3">Sign up for our free daily newsletter</h2>
                    <p className="text-gray-300 max-w-3xl mb-6 leading-relaxed">
                        We’ll be in your inbox every morning Monday–Saturday with all the
                        day’s top business news, inspiring stories, best advice and exclusive
                        reporting from Entrepreneur.
                    </p>
                </div>

                <div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-3xl">
                        <input
                            type="email"
                            placeholder="Enter email address*"
                            className="flex-1 bg-white px-4 py-3 rounded-md text-black outline-none"
                        />
                        <button className="bg-[#2563EB] hover:bg-[#1E50C1] px-6 py-3 rounded-md font-semibold">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-gray-400 mt-4 text-xs sm:text-sm">
                        I understand that the data I am submitting will be used to provide me
                        with the above-described products and/or services and communications
                        in connection therewith.
                        <br />
                        Read our{" "}
                        <a href="#" className="underline text-white">privacy policy</a>{" "}
                        for more information.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 border-b-2 border-dotted border-white py-10">
                <div className="space-y-3">
                    <h3 className="font-bold">White Papers</h3>
                    <p>Webinars</p>
                    <p>Videos</p>
                    <p>Podcasts</p>
                    <p>Magazine</p>
                    <p>Spotlight</p>
                </div>
                <div className="space-y-3">
                    <h3 className="font-bold">Join the Leadership Network</h3>
                    <p>Get Unlimited Access on Entrepreneur.com</p>
                    <p>Manage Magazine Subscription</p>
                    <p>Advertise with Entrepreneur</p>
                    <p>About Us</p>
                </div>
                <div className="space-y-3">
                    <h3 className="font-bold">Entrepreneur Authorities</h3>
                    <p>Entrepreneur Books Group</p>
                    <p>Entrepreneur Press</p>
                    <p>Ask an Expert</p>
                    <p>Daily Deals</p>
                </div>
                <div className="space-y-3">
                    <h3 className="font-bold">Terms of Use</h3>
                    <p>Privacy Policy</p>
                    <p>Cookies Policy</p>
                    <p>Accessibility Statement</p>
                    <p>Site Map</p>
                    <p>Contact Support</p>
                    <p>Cookie Management</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto py-10 border-b-2 border-dotted border-white">
                <div className="flex flex-col lg:flex-row justify-between gap-2">
                    <div className="flex flex-wrap justify-center lg:basis-[100%] sm:justify-start gap-6 text-2xl mb-6">
                        <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
                        <FaXTwitter className="hover:text-gray-400 cursor-pointer" />
                        <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
                        <FaYoutube className="hover:text-red-500 cursor-pointer" />
                        <FaInstagram className="hover:text-pink-400 cursor-pointer" />
                        <FaTiktok className="hover:text-gray-200 cursor-pointer" />
                        <FaRss className="hover:text-orange-400 cursor-pointer" />
                    </div>

                    <p className="text-white text-center sm:text-left text-xs sm:text-sm">
                        Copyright © 2025 Entrepreneur Media, LLC All rights reserved.
                        Entrepreneur® and its related marks are registered trademarks of
                        Entrepreneur Media, LLC.
                    </p>
                </div>

                <p className="text-white mt-4 text-center text-xs sm:text-sm">
                    We are a proud American independent media company that has never taken
                    a dime of USAID taxpayer money.
                </p>
            </div>


            <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 sm:gap-6 pt-6 text-gray-300 text-sm">
                <a href="#" className="hover:text-white">United States</a>
                <span>|</span>
                <a href="#" className="hover:text-white">Spanish</a>
                <span>|</span>
                <a href="#" className="hover:text-white">Georgia</a>
                <span>|</span>
                <a href="#" className="hover:text-white">India</a>
                <span>|</span>
                <a href="#" className="hover:text-white">Asia Pacific</a>
                <span>|</span>
                <a href="#" className="hover:text-white">Middle East</a>
                <span>|</span>
                <a href="#" className="hover:text-white">United Kingdom</a>
                <span>|</span>
                <a href="#" className="hover:text-white">Europe</a>
            </div>
        </footer>
    );
}
