"use client"
import { Fragment } from 'react';
import Image from 'next/image'
import { CarProps, KeyTranslations, ValueTransforms } from '@/types';
import { Dialog, Transition } from '@headlessui/react'
import { IoCloseSharp } from 'react-icons/io5'
import { generateCarImageUrl } from '@/utils';

interface carDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const keyTranslations: KeyTranslations = {
    combination_mpg: '평균 연비',
    class: '타입',
    drive: '구동 방식',
    fuel_type: '연료',
    make: '제조사',
    model: '모델',
    transmission: '기어 변속',
    year: '연식',
}

const valueTransforms: ValueTransforms = {
    combination_mpg: (value) => `${(value * 0.425144).toFixed(1)} km/ℓ`,
    transmission: (value) => value === 'a' ? '오토' : '수동',
    year: (value) => `${value}년식`,
};


const CarDetails = ({ isOpen, closeModal, car }: carDetailsProps) => {

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0'>
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>
                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='ease-in duration-200' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
                                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col p-6 gap-5">
                                    <button type="button" onClick={closeModal}>
                                        <div className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'>
                                            <IoCloseSharp />
                                        </div>
                                    </button>
                                    <div className='flex flex-1 flex-col gap-3'>
                                        <div className='relative w-full h-40 rounded-lg'>
                                            <Image src={generateCarImageUrl(car)} alt="car model" fill priority className='object-contain' />
                                        </div>
                                        <div className='flex gap-3'>
                                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                                <Image src={generateCarImageUrl(car, '29')} alt="car model" fill priority className='object-contain' />
                                            </div>
                                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                                <Image src={generateCarImageUrl(car, '33')} alt="car model" fill priority className='object-contain' />
                                            </div>
                                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                                <Image src={generateCarImageUrl(car, '13')} alt="car model" fill priority className='object-contain' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-1 flex-col gap-2'>
                                        <h2 className='font-semibold text-xl capitalize'>{car.make} {car.model}</h2>
                                        <div className='mt-3 flex flex-wrap gap-4'>
                                            {Object.entries(car).map(([key, value]) => {
                                                if (keyTranslations.hasOwnProperty(key)) {
                                                    return (
                                                        <div className='flex justify-between gap-5 w-full text-right' key={key}>
                                                            <h4 className='text-grey'>{keyTranslations[key]}</h4>
                                                            <p className='text-black-100 font-semibold'>
                                                                {valueTransforms[key] ? valueTransforms[key](value) : value}
                                                            </p>
                                                        </div>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default CarDetails
