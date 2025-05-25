import handInHandImage from '@/assets/images/hand-in-hand.png'; // Reusing the hero image

export default function MessageGrid() {
    // Define content blocks for clarity
    const image1 = (
        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg shadow-md">
            <img
                src={handInHandImage.src}
                alt="People connecting in a group"
                className="object-cover w-full h-full"
            />
        </div>
    );

    const message1 = (
        <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-white mb-3">
                Beyond Pairs: Embrace the Group Vibe
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
                Step away from endless swiping for one. Bubble introduces a fresh way to meet, chat, and vibe with multiple people at once.
                More personalities, less pressure, and a richer dating experience await.
            </p>
            <button className="self-start px-5 py-2 bg-black text-white rounded-md font-semibold hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors">
                Discover Group Chats
            </button>
        </div>
    );

    const image2 = (
        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg shadow-md">
            <img
                src={handInHandImage.src} // Using the same image for dev purposes
                alt="Vibrant group discussion"
                className="object-cover w-full h-full"
            />
        </div>
    );

    const message2 = (
        <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-white mb-3">
                Connections, Multiplied
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
                Why limit your social circle? With n-to-n interactions, you can find friends, dates, or simply engaging conversations.
                Our platform makes it easy to join or create groups based on shared interests.
            </p>
            <button className="self-start px-5 py-2 bg-black text-white rounded-md font-semibold hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors">
                Find Your Squad
            </button>
        </div>
    );

    return (
        <div className="py-12 md:py-16 lg:py-20 bg-neutral-50 dark:bg-neutral-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Mobile Order: Image 1 (S1) */}
                    {/* Desktop Order: Top Left (Visual 1) */}
                    <div className="md:order-1">{image1}</div>

                    {/* Mobile Order: Message 1 (S2) */}
                    {/* Desktop Order: Top Right (Visual 2) */}
                    <div className="md:order-2">{message1}</div>

                    {/* Mobile Order: Image 2 (S3) */}
                    {/* Desktop Order: Bottom Right (Visual 4) */}
                    <div className="md:order-4">{image2}</div>

                    {/* Mobile Order: Message 2 (S4) */}
                    {/* Desktop Order: Bottom Left (Visual 3) */}
                    <div className="md:order-3">{message2}</div>
                </div>
            </div>
        </div>
    );
}