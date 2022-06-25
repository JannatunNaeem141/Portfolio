import React from 'react';
import './DetailsModal.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper";
import './Slider.css';

const DetailsModal = ({ details }) => {
    const { name, img1, img2, img3, img4, description } = details;
    return (
        <div>
            <input type="checkbox" id="details-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box modal-bg">
                    <label for="details-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <>
                        <Swiper
                            effect={"flip"}
                            grabCursor={true}
                            pagination={true}
                            navigation={true}
                            modules={[EffectFlip, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={img1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img3} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img4} />
                            </SwiperSlide>
                        </Swiper>
                    </>
                    <h3 class="font-bold text-lg modal-head text-secondary">{name}</h3>
                    <p class="py-4">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;