import { Hero } from "../components/Hero";
import { ChatInterface } from "../components/ChatInterface";
import { FeaturedDestinations } from "../components/FeaturedDestinations";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-light">
      <Hero />
      <div className="relative z-10 -mt-32 mb-16">
        <ChatInterface />
      </div>
      <FeaturedDestinations />
    </div>
  );
};

export default Index;