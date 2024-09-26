import { Footer, Navbar } from "@/components";
import { About, Explore, Feedback, GetStarted, Hero, Insight, WhatsNew, World } from "@/sections";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <GetStarted/>
      <WhatsNew/>
      <World/>
      <Insight/>
      <Feedback/>
      <Footer />
    </div>
  );
}
