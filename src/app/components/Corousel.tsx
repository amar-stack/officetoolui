// app/components/Carousel.tsx
"use client"
import { useState } from 'react'

const Carousel = () => {
  const [index, setIndex] = useState(0)
  const images = [
    '/carousel-2.avif',
    '/carousel-3.jpg',
    '/carousel-4.webp',
    '/image1.jpeg',
    '/carousel-1.jpg'
  ]
  
  const nextImage = () => setIndex((index + 1) % images.length)
  const prevImage = () => setIndex((index - 1 + images.length) % images.length)

  return (
    <div className="relative">
      <img src={images[index]} alt="carousel" className="w-full h-96 object-cover" />
      <button onClick={prevImage} className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full">Prev</button>
      <button onClick={nextImage} className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full">Next</button>
    </div>
  )
}

export default Carousel
