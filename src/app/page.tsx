import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/effects/ScrollReveal";
import Hero from "@/components/sections/Hero";
import ActivityCategories from "@/components/sections/ActivityCategories";
import About from "@/components/sections/About";
import Experiences from "@/components/sections/Experiences";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import Mission from "@/components/sections/Mission";

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <ActivityCategories />
      <About />
      <Experiences />
      <UpcomingEvents />
      <Mission />
      <Footer />
    </main>
  );
}
