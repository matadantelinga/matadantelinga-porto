"use client"
import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query"
import { getData } from "@/lib/services";
import ErrorNetwork from "@/components/errorNetwork";
import Skeleton from "@/components/Skeleton";


const settings = {
    arrow: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
};

function ItemSlide({ link, image }: { link?: string, image: string }) {
    return (
        <div className="w-full h-[calc(100vh-89px)] relative">
            <Link href={link ? link : "/"}>
                <Image
                    src={`${image}`}
                    fill
                    objectFit="cover"
                    alt="image"
                />
            </Link>
        </div>
    )
}

export default function MainSlider() {
    const getQuery = async () => {
        return await getData("/main-banners?populate=*")
    }
    const query = useQuery({
        queryKey: ["qMainBanner"],
        queryFn: getQuery
    })

    if (query.isLoading) {
        return (
            <div className=" relative flex justify-center ">
                <div className="animate-pulse w-full">
                    <div className="rounded-sm bg-slate-200 h-[calc(100vh-89px)] w-full flex justify-center items-center ">
                        <Image src="/images/loading.svg" width={100} height={100} alt="loading" />
                    </div>
                </div>
            </div>
        )
    }

    if (query.isError) {
        return (
            <ErrorNetwork />
        )
    }

    const dataContent = query?.data?.data.data

    return (
        <div className="mainslider relative overflow-hidden">
            <Slider {...settings}>
                {
                    dataContent ? dataContent.map((item: any) => {
                        return (
                            <ItemSlide
                                key={item.id}
                                link="/"
                                image={`${process.env.URL_MEDIA + item.attributes.image.data.attributes.url}`}
                            />
                        )
                    }) : null
                }
            </Slider>
        </div>
    )
}
