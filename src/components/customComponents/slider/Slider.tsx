'use client'

import React from 'react'
import SliderLib from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export interface SliderProps {
  children: React.ReactNode
  slidesToShow?: number
  slidesToScroll?: number
  autoplay?: boolean
  autoplaySpeed?: number
  infinite?: boolean
  dots?: boolean
  arrows?: boolean
  speed?: number
  pauseOnHover?: boolean
  responsive?: Array<{
    breakpoint: number
    settings: {
      slidesToShow?: number
      slidesToScroll?: number
      dots?: boolean
      arrows?: boolean
      infinite?: boolean
    }
  }>
  className?: string
}

const CustomSlider: React.FC<SliderProps> = ({
  children,
  slidesToShow = 4,
  slidesToScroll = 1,
  autoplay = true,
  autoplaySpeed = 3000,
  infinite = true,
  dots = false,
  arrows = true,
  speed = 500,
  pauseOnHover = true,
  responsive = [],
  className = '',
}) => {
  const settings = {
    slidesToShow,
    slidesToScroll,
    autoplay,
    autoplaySpeed,
    infinite,
    dots,
    arrows,
    speed,
    pauseOnHover,
    responsive: responsive.length > 0 ? responsive : [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  }

  return (
    <div className={className}>
      <SliderLib {...settings} className="h-full">
        {children}
      </SliderLib>
    </div>
  )
}

export default CustomSlider

