import React from 'react'
import ConcreteBox from './ConcreteBox'

const Hero = () => {
    return (
        <section className='pt-14 md:pt-[120px] mb-40 md:mb-[378px] w-full px-4'>
            <div className='max-w-[1300px] w-full mx-auto flex flex-col lmd:flex-row gap-10 md:gap-20'>
                <div className='w-full lmd:w-[60%]'>
                    <h1 className='text-black_900 text-center xmd:text-start f-anvenirnext-m text-5xl xsm:text-[65px] leading-[72px] xsm:leading-[97.5px]'>
                        Imagine a <h1 className='bg-[#E1FF22] inline-flex rounded-[20px] px-[10px] py-[2px] f-dmmono-r leading-[65px]'>clock</h1> that embodies <h1 className='bg-purple_700 inline-flex text-white rounded-[20px] px-[10px] py-[2px] f-dmmono-r leading-[65px]'>kindness</h1> . How does this timepiece alter the concept of time?</h1>
                </div>
                <div className='flex-1 w-full lmd:w-[40%] flex justify-center lmd:justify-end'>
                    <ConcreteBox />
                </div>
            </div>
        </section>
    )
}

export default Hero