import React, { useEffect, useState } from "react";

export default function ImageSlider() {
  const images = [
    "../sliderImages/hero1.png",
    "../sliderImages/hero2.png",
    "../sliderImages/hero3.png",
    "../sliderImages/ADLM Training Teazer.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const intervalId = setInterval(nextImage, 20000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="w-[400px] items-center h-full rounded-lg md:h-[725px] md:w-[680px]">
      <img
        src={images[currentIndex]}
        alt="Slider Image"
        className="object-cover"
      />
    </div>
  );
}
