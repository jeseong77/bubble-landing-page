import handInHandImage from "@/assets/images/hand-in-hand.png";

export default function Hero() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-[60vh] bg-cover bg-center text-white text-center"
      style={{ backgroundImage: `url(${handInHandImage.src})` }}
    >
      {/* Overlay for better text readability on the background image */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      {/* Content container - positioned above the overlay */}
      <div className="relative z-10 p-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
          We spread love
        </h1>
        <p className="text-2xl sm:text-3xl font-semibold">Bubble</p>
      </div>
    </div>
  );
}
