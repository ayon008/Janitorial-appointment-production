'use client'
import { data } from '@/js/states';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';
import ReviewItems from './ReviewItems';

const Reviews = () => {
    return (
        <div className='my-10'>
            <div className='md:grid md:grid-cols-3 md:gap-3 hidden'>
                {
                    data?.map((d, i) => {
                        return (
                            <ReviewItems key={i} d={d} />
                        )
                    })
                }
            </div>
            <div className='block md:hidden'>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper w-[80%] mx-auto"
                    initialSlide={3}
                >
                    {
                        data.map((d, i) => {
                            return (
                                <SwiperSlide key={i} className='bg-green-100'>
                                    <ReviewItems d={d} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;