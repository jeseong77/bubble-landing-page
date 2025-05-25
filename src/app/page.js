import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MessageGrid from "@/components/MessageGrid";
import TestimonialSlider from "@/components/TestimonialSlider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow overflow-y-auto">
        <Hero />
        <MessageGrid />
        <TestimonialSlider />
        <Footer />
      </main>
    </div>
  );
}
