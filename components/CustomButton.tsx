"use client"
import { CustomButtonProps } from '@/types'
import Image from 'next/image'
import { AiOutlineRight } from 'react-icons/ai'

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon }: CustomButtonProps) => {
    return (
        <button disabled={false} type={btnType || 'button'} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
            <span className={`flex-1  ${textStyles}`}>{title}</span>
            {rightIcon && (
                <div className='relative text-white flex justify-center items-center'>
                    <AiOutlineRight />
                </div>
            )}
        </button>
    )
}

export default CustomButton
