import React from 'react'
import ConcreteBox from './ConcreteBox'

const Hero = () => {
    return (
        <section className='pt-14 md:pt-[120px] mb-40 md:mb-[378px] w-full px-4'>
            <div className='max-w-[1300px] w-full mx-auto flex flex-col lmd:flex-row gap-10 md:gap-20'>
                <div className='w-full lmd:w-[65%]'>
                    <h1 className='text-black_900 text-center md:text-start f-anvenirnext-m text-3xl md:text-[65px] leading-[50px] md:leading-[97.5px]'>Imagine a <span className='bg-[#E1FF22] rounded-2xl md:rounded-[20px] px-[10px] md:py-[2px] f-dmmono-r'>clock</span> that embodies <span className='bg-purple_700 text-white rounded-2xl md:rounded-[20px] px-[10px] md:py-[2px] f-dmmono-r'>kindness</span>. How does this timepiece alter the concept of time?</h1>
                </div>
                <div className='flex-1 w-full lmd:w-[40%] flex justify-center lmd:justify-end'>
                    <ConcreteBox />
                </div>
            </div>
        </section>
    )
}

export default Hero