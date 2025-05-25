import { FaInstagram, FaTiktok } from 'react-icons/fa'; // Example icons

export default function Footer() {
    return (
        <footer className="bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300">
            {/* Upper section: Brand, Email Signup, Links */}
            {/* This container gets increased padding to make the upper part taller */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10 md:gap-y-0"> {/* Adjusted gaps */}

                    {/* Left Side: Brand & Email Signup (Desktop: more columns for better spacing) */}
                    <div className="md:col-span-6 lg:col-span-5 space-y-4">
                        <h3 className="text-3xl font-bold text-black dark:text-white">Bubble</h3>
                        <p className="text-sm">
                            Stay connected and get the latest updates from Bubble.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow px-4 py-2.5 border border-neutral-300 dark:border-neutral-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 text-sm"
                                aria-label="Email address"
                            />
                            <button
                                type="submit"
                                className="px-5 py-2.5 bg-black text-white rounded-md font-semibold hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors whitespace-nowrap text-sm"
                            >
                                Keep in touch
                            </button>
                        </form>
                    </div>

                    {/* Spacer for desktop - can be adjusted or removed based on how links align */}
                    <div className="hidden md:block md:col-span-1 lg:col-span-2"></div>

                    {/* Right Side: Links (Desktop: remaining columns) */}
                    <div className="md:col-span-5 lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6 text-sm"> {/* Adjusted gap-y */}
                        <div>
                            <h4 className="font-semibold text-black dark:text-white mb-3">Company</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-black dark:text-white mb-3">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Cookie Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-black dark:text-white mb-3">Connect</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors flex items-center"><FaInstagram className="mr-2 text-base" /> Instagram</a></li>
                                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors flex items-center"><FaTiktok className="mr-2 text-base" /> TikTok</a></li>
                                {/* Add more social media links as needed */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full-width divider and Copyright section */}
            <div className="border-t border-neutral-300 dark:border-neutral-700">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-xs">
                    <p>&copy; 2025 Bubble. All rights reserved.</p>
                    <p className="mt-1">Designed with love for better connections.</p>
                </div>
            </div>
        </footer>
    );
}