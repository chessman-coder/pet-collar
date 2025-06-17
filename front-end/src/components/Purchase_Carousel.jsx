import { useState, useEffect } from "react";
import CorvetteC5 from "../assets/Corvette_C5.jpg";
import teleport from "../assets/teleport.jpg";
import kiss from "../assets/kiss.jpg";
import imy from "../assets/imy.jpg";
import missyou from "../assets/missyou.jpg";
import hi from "../assets/hi.jpg";

const Purchase_Carousel = () => {
  const images = [missyou, imy, teleport, CorvetteC5, hi];
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Big main image */}
      <div className="w-100 h-100 flex items-center justify-center border rounded-2xl overflow-hidden">
        <img
          src={images[selectedIndex]}
          alt="Selected product"
          className="w-full h-full object-contain animate-spin-slow"
        />
      </div>

      {/* Small thumbnails */}
      <div className="flex space-x-2 overflow-x-auto p-2 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`border-2 rounded-lg p-1 ${
              selectedIndex === index ? "" : "border-transparent"
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              className="w-20 h-20 object-cover rounded-lg"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Purchase_Carousel;
