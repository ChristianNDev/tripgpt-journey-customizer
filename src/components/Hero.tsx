import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1682687220742-aba13b6e50ba')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)",
        }}
      />
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-primary-foreground bg-primary/90 rounded-full">
            Personalized Travel Experiences
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Your Journey, Tailored by AI
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          Experience travel like never before with our AI-powered customization
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:scale-105">
            Start Planning
          </button>
        </motion.div>
      </div>
    </div>
  );
};