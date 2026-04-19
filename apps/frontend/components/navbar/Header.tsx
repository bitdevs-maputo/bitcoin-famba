import { HiMenuAlt3 } from "react-icons/hi";

export default function Header() {
    return (
        <header className="sticky top-0 flex w-full    z-[1000]">
            
                <div className="hidden lg:flex items-center justify-around border-b border-gray-500 p-6 w-full  backdrop-blur-[1rem]">

                    <div className="flex justify-end items-center ">
                        <div className="flex gap-2 items-center relative">
                            <a className="text-grey-black font-normal text-base leading-[1.5rem] font-poppins cursor-pointer hover:font-semibold hover:text-active-white" target="_blank" href="https://devday.btrust.tech">Bitcoin Famba</a>
                        </div>
                    </div>
                    
                    <div className="flex justify-end items-center gap-10">
                        <div className="flex gap-2 items-center relative">
                            <a className="text-grey-black font-normal text-base leading-[1.5rem] font-poppins cursor-pointer hover:font-semibold hover:text-active-white" target="_blank" href="https://devday.btrust.tech">Dev Day</a>
                        </div>
                        <div className="flex gap-2 items-center relative">
                            <a className="text-grey-black font-normal text-base leading-[1.5rem] font-poppins cursor-pointer hover:font-semibold hover:text-active-white" target="_blank" href="https://devday.btrust.tech">Dev Day</a>
                        </div>
                        <div className="flex gap-2 items-center relative">
                            <a className="text-grey-black font-normal text-base leading-[1.5rem] font-poppins cursor-pointer hover:font-semibold hover:text-active-white" target="_blank" href="https://devday.btrust.tech">Dev Day</a>
                        </div>
                        <div className="flex gap-2 items-center relative">
                            <a className="text-grey-black font-normal text-base leading-[1.5rem] font-poppins cursor-pointer hover:font-semibold hover:text-active-white" target="_blank" href="https://devday.btrust.tech">Dev Day</a>
                        </div>
                    </div>

                     
                </div>
                <div className="flex flex-col w-full relative lg:hidden backdrop-blur-[0.625rem]">
                    <div className="lg:hidden flex justify-between items-center border-t-[0.6px] border-t-[#333] border-b-[0.6px] border-b-[#333] px-[1.5rem] w-full py-[0.75rem]">
                        <div className="flex items-center justify-center">
                            <h1>Bitcoin Famba</h1>
                        </div>
                        <div className="flex h-[3rem] w-[3rem] items-center justify-center p-[0.5rem] rounded-[0.4375rem] border-[0.6px] border-[#272727] bg-mobile-bg">
                            <HiMenuAlt3 size={25} /> 
                        </div>
                    </div>
                </div>
        
        </header>
    );
}