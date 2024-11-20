import { motion } from "framer-motion";

const destinations = [
  {
    title: "Santorini, Greece",
    description: "Experience stunning sunsets and white-washed architecture",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
  },
  {
    title: "Kyoto, Japan",
    description: "Immerse yourself in traditional Japanese culture",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
  },
  {
    title: "Maui, Hawaii",
    description: "Discover paradise with pristine beaches and lush landscapes",
    image: "https://images.unsplash.com/photo-1542259009477-d625272157b7",
  },
];

export const FeaturedDestinations = () => {
  return (
    <div className="py-16 px-4 md:px-6 bg-neutral-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium">Curated Selection</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Destinations</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/5]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${destination.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
                  <p className="text-sm text-white/90">{destination.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};