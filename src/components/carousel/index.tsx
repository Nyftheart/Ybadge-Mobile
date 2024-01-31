import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import IconButton from '@mui/material/IconButton'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export default function Carousel({ autoScroll = false, autoScrollInterval = 3000 } ) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const sliderItems = [
    {
      imageUrl: 'https://i.ibb.co/fDngH9G/carosel-1.png',
      catalog: 'Catalog 1',
      title: 'Minimal Interior',
    },
    {
      imageUrl: 'https://i.ibb.co/DWrGxX6/carosel-2.png',
      catalog: 'Catalog 2',
      title: 'Minimal Interior',
    },
    {
      imageUrl: 'https://i.ibb.co/fDngH9G/carosel-1.png',
      catalog: 'Catalog 1',
      title: 'Minimal Interior',
    },
    {
      imageUrl: 'https://i.ibb.co/DWrGxX6/carosel-2.png',
      catalog: 'Catalog 2',
      title: 'Minimal Interior',
    },
    {
      imageUrl: 'https://i.ibb.co/fDngH9G/carosel-1.png',
      catalog: 'Catalog 1',
      title: 'Minimal Interior',
    },
    {
      imageUrl: 'https://i.ibb.co/DWrGxX6/carosel-2.png',
      catalog: 'Catalog 2',
      title: 'Minimal Interior',
    },
    {
      imageUrl: 'https://i.ibb.co/fDngH9G/carosel-1.png',
      catalog: 'Catalog 1',
      title: 'Minimal Interior',
    },
    {
      imageUrl: 'https://i.ibb.co/DWrGxX6/carosel-2.png',
      catalog: 'Catalog 2',
      title: 'Minimal Interior',
    },
    // ... Add more items as needed
  ]

  const itemWidth = 265

  const goNext = () => {
    if (sliderRef.current) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length)
    }
  }

  const goPrev = () => {
    if (sliderRef.current) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? sliderItems.length - 1 : prevIndex - 1
      )
    }
  }
  useEffect(() => {
    if (autoScroll) {
      const intervalId = setInterval(goNext, autoScrollInterval)

      return () => clearInterval(intervalId)
    }
  }, [autoScroll, autoScrollInterval])

  useEffect(() => {
    const windowWidth = window.innerWidth
    if (sliderRef.current) {
      const newPosition =
        itemWidth -
        (windowWidth - (itemWidth + 40)) / 2 +
        (itemWidth + 20) * currentIndex

      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      })
    }
  }, [currentIndex])

  return (
    <div className="flex items-center justify-center w-screen h-full -mx-6">
      <div className="w-full relative flex items-center justify-center">
        <IconButton
          aria-label="slide backward"
          className="absolute z-30 left-0"
          onClick={goPrev}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <div
          className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden"
          ref={sliderRef}
        >
          <div className="w-full h-full flex gap-5 items-center justify-start py-2">
            {sliderItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-shrink-0 relative w-[265px] h-[145px] shadow-lg shadow-black-500/50"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={265}
                  height={145}
                  className="object-cover object-center w-full rounded"
                />
              </div>
            ))}
          </div>
        </div>
        <IconButton
          aria-label="slide forward"
          className="absolute z-30 right-0"
          onClick={goNext}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  )
}
