"use client"
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => {

    }
    return (
        <div className='hero'>
            <div className='flex-1 pt-36 xl:pt-0 padding-x'>
                <h1 className='hero__title'>
                    빠르고 간편하게 - 카플러스에서 렌트하고 여행가자!
                </h1>
                <p className='hero__subtitle'>
                    내 손에 렌터카, 신차부터 저렴하고 다양한 차종 보유
                </p>
                <CustomButton title="자세히 보기" btnType="button" containerStyles="bg-primary-blue text-white rounded-full mt-10" handleClick={handleScroll} />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src='/hero1.png' alt="hero" fill className='object-contain' />
                </div>
            </div>

        </div>
    )
}

export default Hero
