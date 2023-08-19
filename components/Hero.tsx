"use client"

import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => {

    }
    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    빠르고 간편하게 카플러스에서 <br />렌트하고 여행가자!
                </h1>
                <p className='hero__subtitle'>
                    내 손에 렌트카, 신차부터 저렴하고 다양한 차종 보유
                </p>
                <CustomButton title="Explore cars" containerStyles="bg-[#0366f5] text-white rounded-full mt-10" handleClick={handleScroll} />

                <div className='hero__image-container'>
                    <div className='hero__image'>
                        <Image src="/hero.png" alt="hero" fill className='object-contain' />
                        <div className='hero__image-overlay'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
