"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import handInHandImage from '@/assets/images/hand-in-hand.png'; // For mock avatars

const mockReviews = [
    {
        id: 1,
        emoji: '✨',
        quote: "We never would have crossed paths otherwise! This app made it so easy to connect. Our first group hangout was unforgettable, and now we're planning our future together, all thanks to finding our amazing crew here.",
        avatarSrc: handInHandImage.src,
        names: "ALEX & JAMIE",
    },
    {
        id: 2,
        emoji: '💖',
        quote: "Initially, I was a bit hesitant, but this platform felt different. Everyone was so genuine. Finding someone who shares my love for spontaneous road trips and late-night talks? Priceless! So happy we connected.",
        avatarSrc: handInHandImage.src,
        names: "SAM & CASEY",
    },
    {
        id: 3,
        emoji: '🥂',
        quote: "The connection was instant! From our first chat about shared hobbies to our amazing first date, everything felt so natural and fun. We're so grateful to have found each other on here. Cheers to new beginnings!",
        avatarSrc: handInHandImage.src,
        names: "MORGAN & RILEY",
    },
    {
        id: 4,
        emoji: '🌟',
        quote: "We bonded over our quirky sense of humor and a love for old movies. It's amazing how an app can lead to such a deep and meaningful connection. Truly recommend giving it a try; you never know who you'll meet!",
        avatarSrc: handInHandImage.src,
        names: "JORDAN & TAYLOR",
    },
];

const swipeAnimationVariants = {
    enter: (direction) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] }, // Smooth ease
    },
    exit: (direction) => ({
        x: direction < 0 ? '100%' : '-100%', // Swipes out to the right
        opacity: 0,
        transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
    }),
};


export default function TestimonialSlider() {
    const [[currentIndex, direction], setCurrentIndexAndDirection] = useState([0, 0]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndexAndDirection(([prevIndex]) => [(prevIndex + 1) % mockReviews.length, 1]);
        }, 8000);

        return () => clearTimeout(timer); // Cleanup timer
    }, [currentIndex]);

    const currentReview = mockReviews[currentIndex];

    return (
        <div className="bg-sky-50 dark:bg-neutral-800 py-16 sm:py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex} // Important for AnimatePresence to detect changes
                        custom={direction}
                        variants={swipeAnimationVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="w-full" // Ensure motion.div takes width for positioning
                    >
                        <div className="mb-6 text-4xl sm:text-5xl">
                            {currentReview.emoji}
                        </div>
                        <blockquote className="text-lg sm:text-xl leading-relaxed text-neutral-700 dark:text-neutral-300 mb-8 italic">
                            <p>"{currentReview.quote}"</p>
                        </blockquote>
                        <img
                            src={currentReview.avatarSrc}
                            alt={`${currentReview.names} avatar`}
                            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mx-auto mb-4 shadow-lg border-2 border-white dark:border-neutral-700"
                        />
                        <p className="text-sm font-semibold tracking-wider text-neutral-800 dark:text-white">
                            {currentReview.names}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}