"use client";
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import "./Reviews.css";

import Image from "next/image";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { ReviewsProps } from "./@types";

export function Reviews({ reviews }: ReviewsProps) {
    return (
        <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            navigation={true}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
        >
            {reviews.map((review, index) => (
                <SwiperSlide key={`review-${index}`} className="review-card">
                    <div className="review-info-container">
                        <Image
                            width={120}
                            height={120}
                            src={review.avatar}
                            alt={`${review.name}'s avatar`}
                            className="review-avatar"
                        />
                        <div className="review-info">
                            <h2 className="review-name">
                                {review.name} <span className="review-rating">{"★".repeat(review.rating)}</span>
                            </h2>
                            <p className="review-location">{review.location}</p>
                        </div>
                    </div>
                    <div className="review-content">
                        <p className="review-comment">{review.comment}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
