"use client"
import { useState, } from 'react';
import Image from 'next/image'
import { CarProps } from '@/types'
import CustomButton from './CustomButton'
import { calculateCarRent } from '@/utils'
import { GiGearStick, GiCartwheel } from 'react-icons/gi'
import { AiOutlineDashboard } from 'react-icons/ai'
import CarDetails from './CarDetails';

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    const [isOpen, setIsOpen] = useState(false)
    // 구조 분해 할당
    const { combination_mpg, make, model, year, transmission, drive } = car;

    // 렌트비 계산하기 위해서 함수 실행하기 위한 city_mpg, year 넘겨주기
    const carRent = calculateCarRent(combination_mpg, year);

    // 한국 기준으로 연비 바꾸기
    const mpgKr = combination_mpg * 0.425144

    return (
        <div className='car-card group'>
            <div className='car-card__content'>
                <h2 className='car-card__content-title'>{make} {model}</h2>
            </div>
            <p className='flex mt-6 text-[28px] text-bold font-second font-extrabold'>
                {parseInt(carRent).toLocaleString('ko-KR')}원
                <span className='self-end text-[14px] font-medium'>/24시간</span>
            </p>

            <div className='relative w-full h-40 my-3 object-contain'>
                <Image src='/hero.png' alt="car model" fill priority className='object-contain' />
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full text-gray justify-between'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <GiGearStick />
                        <p className='text-[14px]'>
                            {transmission === 'a' ? '오토' : '수동'}
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <GiCartwheel />
                        <p className='text-[14px]'>
                            {drive.toUpperCase()}
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <AiOutlineDashboard />
                        <p className='text-[14px]'>
                            {mpgKr.toFixed(1)} km/ℓ
                        </p>
                    </div>
                </div>
                <div className='car-card__btn-container'>
                    <CustomButton title="더보기" textStyles="text-white text-[14px] leading-[17px] font-bold" containerStyles='w-full py-[16px] rounded-full bg-primary-blue transition-all' handleClick={() => setIsOpen(true)} btnType='button' rightIcon />
                </div>
            </div>
            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    )
}

export default CarCard
