"use client"
import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import Link from "next/link";


const settings = {
    arrow: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
};

function ItemSlide({ link, image }: { link?: string, image: string }) {
    return (
        <div className="w-full h-[calc(100vh-89px)] relative">
            <Link href={link ? link : "/"}>
                <Image
                    src={image}
                    fill
                    objectFit="cover"
                    alt="image"
                />
            </Link>
        </div>
    )
}

export default function MainSlider() {
    return (
        <div className="mainslider relative overflow-hidden">
            <Slider {...settings}>
                <ItemSlide link="/" image="/images/dummy/slide1.jpg" />
                <ItemSlide link="/" image="/images/dummy/slide2.jpg" />
                <ItemSlide link="/" image="/images/dummy/slide3.jpg" />
            </Slider>
        </div>
    )
}
