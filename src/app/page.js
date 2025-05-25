import Header from "@/components/HeaderSection";
import HeroSection from "@/components/HeroSection";
import MessageSection from "@/components/MessageSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow overflow-y-auto">
        <HeroSection />
        <MessageSection />
        <TestimonialSlider />
        <Footer />
      </main>
    </div>
  );
}
