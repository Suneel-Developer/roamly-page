import React, { useState, useEffect, useRef } from 'react'
import ArrowDown from "../assets/arrow-down.svg"
import ArrowDownWhite from "../assets/arrow-down-white.svg"
import DiceIcon from "../assets/dice-icon.svg"

const ConcreteBox = () => {
    const [selectedConcrete, setSelectedConcrete] = useState("Electronics");
    const [isConcreteOpen, setIsConcreteOpen] = useState(false);
    const [selectedAbstract, setSelectedAbstract] = useState("Emotions");
    const [isAbstractOpen, setIsAbstractOpen] = useState(false);


    const concreteRef = useRef(null);
    const abstractRef = useRef(null);

    const closeDropdowns = () => {
        setIsConcreteOpen(false);
        setIsAbstractOpen(false);
    };

    const handleDocumentClick = (event) => {
        if (
            concreteRef.current &&
            !concreteRef.current.contains(event.target) &&
            abstractRef.current &&
            !abstractRef.current.contains(event.target)
        ) {
            closeDropdowns();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleDocumentClick);
        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    const handleConcreteClick = () => {
        closeDropdowns();
        setIsConcreteOpen(!isConcreteOpen);
    };

    const handleConcreteItemClick = (item) => {
        setSelectedConcrete(item);
        setIsConcreteOpen(false);
    };

    const handleAbstractClick = () => {
        closeDropdowns();
        setIsAbstractOpen(!isAbstractOpen);
    };

    const handleAbstractItemClick = (item) => {
        setSelectedAbstract(item);
        setIsAbstractOpen(false);
    };

    return (
        <div className='border border-gray_900 bg-white rounded-2xl p-4 w-[310px] h-fit'>
            <h4 className='text-base text-black f-anvenirnext-m mb-4'>Concrete</h4>

            <div className='relative w-full' ref={concreteRef}>
                <button className='border-2 border-border_yellow bg-yellow_900 rounded-[10px] w-full h-[58px] py-[10px] px-4 flex items-center justify-between mb-7' onClick={handleConcreteClick}>
                    <span className='text-deep_gray f-dmmono-m text-base'>{selectedConcrete}</span>
                    <img src={ArrowDown} alt="Arrow Down" className={`${isConcreteOpen ? " rotate-180" : ""}`} />
                </button>

                {isConcreteOpen && (
                    <ul className='flex flex-col gap-1 z-40 bg-white border border-gray_900 px-4 py-2 rounded-[10px] absolute top-16 left-0 w-full'>
                        <li className='text-sm text-deep_gray f-dmmono-m cursor-pointer' onClick={() => handleConcreteItemClick("Electronics 1")}>Electronics 01</li>
                        <li className='text-sm text-deep_gray f-dmmono-m cursor-pointer' onClick={() => handleConcreteItemClick("Electronics 2")}>Electronics 02</li>
                        <li className='text-sm text-deep_gray f-dmmono-m cursor-pointer' onClick={() => handleConcreteItemClick("Electronics 3")}>Electronics 03</li>
                        <li className='text-sm text-deep_gray f-dmmono-m cursor-pointer' onClick={() => handleConcreteItemClick("Electronics 4")}>Electronics 04</li>
                    </ul>
                )}
            </div>

            <h4 className='text-base text-black f-anvenirnext-m mb-4'>Abstract</h4>

            <div className='relative w-full' ref={abstractRef}>
                <button className='border-2 border-border-purple bg-purple_700 rounded-[10px] w-full h-[58px] py-[10px] px-4 flex items-center justify-between mb-7' onClick={handleAbstractClick}>
                    <span className='text-white f-dmmono-m text-base'>{selectedAbstract}</span>
                    <img src={ArrowDownWhite} alt="Arrow Down" className={`${isAbstractOpen ? " rotate-180" : ""}`} />
                </button>

                {isAbstractOpen && (
                    <ul className='flex flex-col gap-1 z-40 bg-white border border-gray_900 px-4 py-2 rounded-[10px] absolute top-16 left-0 w-full'>
                        <li className='text-sm text-deep_gray f-dmmono-m cursor-pointer' onClick={() => handleAbstractItemClick("Emotions")}>Emotions</li>
                        <li className='text-sm text-deep_gray f-dmmono-m cursor-pointer' onClick={() => handleAbstractItemClick("Ethics")}>Ethics</li>
                        <li className='text-sm text-deep_gray f-dmmono-m cursor-pointer' onClick={() => handleAbstractItemClick("Philosophy")}>Philosophy</li>
                        <li className='text-sm text-deep_gray f-dmmono-m cursor-pointer' onClick={() => handleAbstractItemClick("Aesthetic")}>Aesthetic</li>
                        <li className='text-sm text-deep_gray f-dmmono-m cursor-pointer' onClick={() => handleAbstractItemClick("Relational")}>Relational</li>
                    </ul>
                )}
            </div>

            <div className='flex justify-between gap-2 items-center'>
                <button className='bg-black-700 rounded-[10px] w-full h-10 flex-1 px-4 flex items-center justify-center text-white text-base f-anvenirnext-m text-center'>Regenerate</button>
                <button className='bg-black_800 border-[.75px] border-white rounded-[10px] h-10 w-10 flex items-center justify-center'>
                    <img src={DiceIcon} alt="Arrow Circle Right" />
                </button>
            </div>
        </div>
    )
}

export default ConcreteBox