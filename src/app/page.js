import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow overflow-y-auto">
        <Hero />
      </main>
    </div>
  );
}
