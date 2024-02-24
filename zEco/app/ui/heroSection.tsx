import Link from "next/link";
import Image from "next/image";


export default function Hero(){
    const idk = `bg-clip-text py-2 text-transparent bg-gradient-to-r from-slate-50 to-slate-600 font-bold ` ;
    const pathData = 'M 4.561 219.034 L 42.594833333333334 214.6475 C 80.62866666666667 210.261 156.69633333333334 201.48799999999997 238.60733333333334 200.88816666666665 C 320.5183333333334 200.28833333333333 408.2726666666667 207.86166666666668 452.14983333333333 211.6483333333333 L 496.027 215.435';
    const className = 'fill-current stroke-black stroke-2';
    return(
        <div className="my-auto max-w-[1443px] mx-auto flex flex-col ">
            <div className="relative mt-20">
               <div className="absolute w-[0.8px] left-[156px] bottom-[240px] h-[182px] bg-gradient-to-b from-transparent to-slate-700"></div>
            <div className="absolute w-[0.8px] right-[156px] bottom-[240px] h-[182px] bg-gradient-to-b from-transparent to-slate-700"></div>
            <div className="absolute h-[0.8px] left-[100px] bottom-[120px] w-[200px] bg-gradient-to-r from-transparent to-slate-700">
            <div className="absolute right-[-0.6px] bottom-[-1.4px] rounded-full w-[4.3px] h-[4.6px] bg-slate-700"></div>
            </div>
            <div className="absolute h-[0.8px] right-[100px] bottom-[120px] w-[200px] bg-gradient-to-l from-transparent to-slate-700">
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
            <div className="grid-cols-10  grid items-center  pt-[178px] mb-20 ">
                <div className="col-span-3 flex flex-col h-[680px] items-start justify-between  ">
                  <div className="flex items-start max-w-[350px]">
                    <div className="flex px-4 py-5 items-start border-[1.7px] max-w-[350px] border-white/65 bg-gradient-to-b from-white/15 from-8%  via-gray-900 via-50%  to-black  backdrop-filter blur-[0.3px] rounded-xl ">
                        <div className="flex flex-col items-start gap-5 ">
                            <div className="flex flex-col gap-5">
                                <div className="p-2 items-center justify-center flex border border-sky-100 max-w-[50px] rounded-xl">
                                    <Image src="/graph.svg" alt={""} width={28} height={28}/>
                                </div>
                                <div className=" font-semibold text-2xl leading-[28px] ">Rule-based budget and spending management</div>
                            </div>
                            <div className="h-[1.5px] bg-gradient-to-l from-transparent to-slate-500 w-full"></div>
                            <div className=" font-light text-gray-300 ">You can use ZERO to help control your spending and build a realistic budget to stay on track!</div>
                        </div>
                        <div className="flex flex-col h-[237px] w-[40px] justify-between items-end">
                            <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                            <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                        </div>
                    </div>     
                  </div>
                 <div className="flex items-start">
                    <div className="flex px-4 py-5 items-start border-[1.7px] max-w-[350px] border-white/65 bg-gradient-to-b from-white/15 from-8%  via-gray-900 via-50%  to-black  backdrop-filter blur-[0.3px] rounded-xl ">
                        <div className="flex flex-col items-start gap-5 ">
                            <div className="flex flex-col gap-5">
                                <div className="p-2 items-center justify-center flex border border-sky-100 max-w-[50px] rounded-xl">
                                    <Image src="/wallet.svg" alt={""} width={28} height={28}/>
                                </div>
                                <div className=" font-semibold text-2xl leading-[28px] ">Rule-based budget and spending management</div>
                            </div>
                            <div className="h-[1.5px] bg-gradient-to-l from-transparent to-slate-500 w-full"></div>
                            <div className=" font-light text-gray-300 ">You can use ZERO to help control your spending and build a realistic budget to stay on track!</div>
                        </div>
                        <div className="flex flex-col h-[237px] w-[40px] justify-between items-end">
                            <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                            <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                        </div>
                    </div>
                 </div>
                </div>
                <div className="col-span-4 flex h-[600px] items-start gap-20">
                    <div className="flex flex-col h-full justify-between ">
                    <div className="p-2 flex items-center justify-center border border-sky-200 rounded-2xl">
                        <div className=" p-2  items-center justify-center  border border-sky-100 rounded-xl">
                            <Image src="/graph.svg" alt={"graphSvg Logo"} width={28} height={28} />
                        </div>
                    </div>
                    <div className="p-2 flex items-center justify-center border border-sky-200 rounded-2xl">
                        <div className=" p-2  items-center justify-center  border border-sky-100 rounded-xl">
                            <Image src="/graph.svg" alt={"graphSvg Logo"} width={28} height={28} />
                        </div>
                    </div>
                    </div>
                    <div className="iphoneContainer relative bg-[#666] w-[340px] h-[600px] rounded-[50px]">
                       <div className="inner">
                          <div className="popup absolute top-5 w-[90px] h-[25px] rounded-[20px] bg-slate-100"></div>
                       </div>
                       <i className="btn btn1"></i>
                       <i className="btn btn2"></i>
                       <i className="btn btn3"></i>
                       <i className="rightBtn"></i>
                    </div>
                    <div className="flex flex-col h-full justify-between ">
                      <div className="p-2 flex items-center justify-center border border-sky-200 rounded-2xl">
                        <div className=" p-2  items-center justify-center  border border-sky-100 rounded-xl">
                            <Image src="/graph.svg" alt={"graphSvg Logo"} width={28} height={28} />
                        </div>
                       </div>
                       <div className="p-2 flex items-center justify-center border border-sky-200 rounded-2xl">
                        <div className=" p-2  items-center justify-center  border border-sky-100 rounded-xl">
                            <Image src="/graph.svg" alt={"graphSvg Logo"} width={28} height={28} />
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-span-3 flex flex-col h-[680px] pl-[82px] items-start justify-between">
                  <div className="flex items-start gap-7 w-full">
                    <div className="flex px-4 py-5 items-start border-[1.7px] max-w-[350px] border-white/65 bg-gradient-to-b from-white/15 from-8%  via-gray-900 via-50%  to-black  backdrop-filter blur-[0.3px] rounded-xl ">
                        <div className="flex flex-col items-start gap-5 ">
                            <div className="flex flex-col gap-5">
                                <div className="p-2 items-center justify-center flex border border-sky-100 max-w-[50px] rounded-xl">
                                    <Image src="/graph.svg" alt={""} width={28} height={28}/>
                                </div>
                                <div className=" font-semibold text-2xl leading-[28px] ">Rule-based budget and spending management</div>
                            </div>
                            <div className="h-[1.5px] bg-gradient-to-l from-transparent to-slate-500 w-full"></div>
                            <div className=" font-light text-gray-300 ">You can use ZERO to help control your spending and build a realistic budget to stay on track!</div>
                        </div>
                        <div className="flex flex-col h-[237px] w-[40px] justify-between items-end">
                            <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                            <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                        </div>
                    </div>     
                  </div>
                 <div className="flex items-start gap-7 w-full">
                    <div className="flex px-4 py-5 items-start border-[1.7px] max-w-[350px] border-white/65 bg-gradient-to-b from-white/15 from-8%  via-gray-900 via-50%  to-black  backdrop-filter blur-[0.3px] rounded-xl ">
                        <div className="flex flex-col items-start gap-5 ">
                            <div className="flex flex-col gap-5">
                                <div className="p-2 items-center justify-center flex border border-sky-100 max-w-[50px] rounded-xl">
                                    <Image src="/wallet.svg" alt={""} width={28} height={28}/>
                                </div>
                                <div className=" font-semibold text-2xl leading-[28px] ">Rule-based budget and spending management</div>
                            </div>
                            <div className="h-[1.5px] bg-gradient-to-l from-transparent to-slate-500 w-full"></div>
                            <div className=" font-light text-gray-300 ">You can use ZERO to help control your spending and build a realistic budget to stay on track!</div>
                        </div>
                        <div className="flex flex-col h-[237px] w-[40px] justify-between items-end">
                            <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                            <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                        </div>
                    </div>
                 </div>
                </div>
            </div>
            
        </div>
    )
}