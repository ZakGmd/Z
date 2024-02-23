import Link from "next/link";
import Image from "next/image";


export default function Hero(){
    const idk = `bg-clip-text py-2 text-transparent bg-gradient-to-r from-slate-50 to-slate-600 font-bold ` ;
    const pathData = 'M 4.561 219.034 L 42.594833333333334 214.6475 C 80.62866666666667 210.261 156.69633333333334 201.48799999999997 238.60733333333334 200.88816666666665 C 320.5183333333334 200.28833333333333 408.2726666666667 207.86166666666668 452.14983333333333 211.6483333333333 L 496.027 215.435';
    const className = 'fill-current stroke-black stroke-2';
    return(
        <div className="w-full relative mt-20">
            <div className="absolute w-[0.8px] left-[330px] bottom-[200px] h-[182px] bg-gradient-to-b from-transparent to-slate-700"></div>
            <div className="absolute w-[0.8px] right-[330px] bottom-[200px] h-[182px] bg-gradient-to-b from-transparent to-slate-700"></div>
            <div className="absolute h-[0.8px] left-[230px] bottom-[120px] w-[200px] bg-gradient-to-r from-transparent to-slate-700">
            <div className="absolute right-[-0.6px] bottom-[-1.4px] rounded-full w-[4.3px] h-[4.6px] bg-slate-700"></div>
            </div>
            <div className="absolute h-[0.8px] right-[230px] bottom-[120px] w-[200px] bg-gradient-to-l from-transparent to-slate-700">
            <div className="absolute left-[-0.6px] bottom-[-1.4px] rounded-full w-[4.3px] h-[4.6px] bg-slate-700"></div>
            </div>
            <div className="flex flex-col gap- items-center justify-center relative">
                <div className="flex flex-col gap-2 items-center text-7xl">
                    <span className={`${idk}`}>Easy Budgeting,</span>
                    <span className={`${idk}`}>Zero Stress</span>
                </div>
                <div className=" font-normal text-slate-400">Smart financial assistant that takes care of your personal finances.</div>
                <Link href="/" className="flex px-3 py-2 mt-5 gap-1 items-center border border-l-indigo-50 rounded-3xl  ">
                    <Image src="/apple.svg" alt="Apple Logo" height={24} width={24} />
                    <div className="flex flex-col items-start z-10 ">
                        <div className=" font-light text-[10px] leading-3  ">Download on the</div>
                        <div className=" font-semibold leading-5 ">APP STORE</div>
                    </div>
                </Link>
                <svg width="878" height="220px" className="absolute top-[260px] z-0  " viewBox="0 0 878 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1_2)" >
                <path d="M3 109C265.304 -36.6171 620.373 -27.9836 875 109"  fill="black"  filter="drop-shadow(rgba(57, 133, 210, 0.42) 0px -33px 40px)" stroke="url(#paint0_linear_1_2)"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_1_2" x1="439" y1="3" x2="439" y2="109" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F8FAFC"/>
                <stop offset="0.515" stopColor="#1875D2" stopOpacity="0.89"/>
                <stop offset="1" stopColor="#F8FAFC" stopOpacity="0"/>
                </linearGradient>
                </defs>
                </svg>
            </div>  
        </div>
    )
}