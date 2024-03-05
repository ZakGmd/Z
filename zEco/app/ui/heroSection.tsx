"use client"
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import SelectUi from "./selectUi";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother} from "gsap-trial/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger);

export default function Hero(){
    const idk = `  bg-clip-text py-2 text-transparent bg-gradient-to-r from-slate-50 to-slate-600 font-bold text-7xl  ` ;
    const container = useRef(null) ;
    console.log(container)
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.animateLines' ,
                scrub: 2.5 ,
                pin: container.current ,
                start: "top 10%" ,
            }
        }) ;
        ScrollTrigger.create({
            trigger: '.animateLines' ,
            start: 'top top' ,
            endTrigger: ".sfag" ,
            end: "bottom bottom" ,
            markers: true ,
        }) ;
        tl.fromTo(".animateLines",{
            y: -10 ,
            autoAlpha: 1, 
            duration: 0.02 ,
        },{
            y: -150 ,
            duration: 2 ,
            autoAlpha: 0 ,
        }).fromTo(".animateSecondLines",{
            autoAlpha:1 ,
        },{
            autoAlpha:0 ,
        }).fromTo(".texts",{opacity: 1},{
            y : -100 ,
            duration: 2 ,
            autoAlpha: 0 ,
        }).fromTo(".text-hidden-2",{opacity: 1},{
            y : -70 ,
            autoAlpha: 0 ,
            duration: 2 ,
        }).fromTo(".animateButton",{
            autoAlpha: 1 ,
        },{
            y : -40 ,
            autoAlpha: 0 ,
            duration: 2 ,
        }).fromTo(".forSVG",{    
            opacity: 1 ,
            scaleY:   1 ,
        },{
            scaleY: 0 ,
            autoAlpha: 0 ,
        }) ;
        

    },{scope: container});

    return(
        <>
        <div className="my-auto max-w-[1443px] mx-auto flex flex-col mb-20 overflow overflow-hidden " ref={container}   >
            <div className="relative mt-[180px]" >
               <div className="animateLines line absolute w-[1px] left-[340px] top-[-100px] h-[182px] bg-gradient-to-b from-transparent to-slate-700"></div>
            <div className="animateLines line absolute w-[1px] right-[360px] top-[-100px] h-[182px] bg-gradient-to-b from-transparent to-slate-700"></div>
            <div className="leftLine animateSecondLines absolute h-[1px] left-[100px] bottom-[120px] w-[200px] bg-gradient-to-r from-transparent to-slate-700">
            <div className=" absolute right-[-0.6px] bottom-[-1.82px] rounded-full w-[4.3px] h-[4.7px] bg-slate-700"></div>
            </div>
            <div className="rightLine animateSecondLines absolute h-[1px] right-[100px] bottom-[120px] w-[200px] bg-gradient-to-l from-transparent to-slate-700">
            <div className=" absolute left-[-0.9px] bottom-[-1.85px] rounded-full w-[4.3px] h-[4.7px] bg-slate-700"></div>
            </div>
            <div className="flex flex-col gap-8 items-center justify-center relative">
                <div className="flex flex-col gap-2 items-center ">
                    <span className=" font-bold text-7xl py-2 texts "  >Easy Budgeting,</span>
                    <span className={`${idk} texts secondTextAnim`}>Zero Stress</span>
                </div>
                <div className=" font-normal text-slate-400 text-hidden-2 thirdTextAnimate">Smart financial assistant that takes care of your personal finances.</div>
                <Link href="/" className="flex px-3 py-2 mt-5 gap-1 items-center  rounded-3xl animateButton ">
                    <Image src="/apple.svg" alt="Apple Logo" height={24} width={24} />
                    <div className="flex flex-col items-start z-10 ">
                        <div className=" font-light text-[10px] leading-3  ">Download on the</div>
                        <div className=" font-semibold leading-5 ">APP STORE</div>
                    </div>
                </Link>
                <svg width="878" height="220px" className="absolute top-[415px] z-0  " viewBox="0 0 878 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1_2)" className="forSVG" >
                <path d="M3 109C265.304 -36.6171 620.373 -27.9836 875 109"  fill="black"  stroke="url(#paint0_linear_1_2)"/>
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
            <div className="grid-cols-10  grid items-center  pt-[278px] my-20 secondSectionAnimat">
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
                    <div className="iphoneContainer relative bg-[#666] p-[7px] w-[340px] h-[600px] rounded-[50px]">
                       <div className="inner">
                          <div className="popup absolute top-5 w-[90px] h-[25px] rounded-[20px] bg-slate-900 z-10"></div>
                          <div className="absolute animate-pulse top-[-1.5px] ">
                        <Image src="foIphn1.svg" alt={""} width={340} height={600} className="pr-[-4px]" />
                       </div>
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
            <div className=" mt-5 mb-20 flex items-start bg-gradient-to-b from-slate-950 from-8% to-black rounded-2xl border-l-[1.8px] border-t-2 border-t-white/10 border-l-white/10  overflow-hidden ">
              <div className="p-20 flex-1 flex flex-col max-w-[880px] gap-6 items-start ">
                <div className="text-start flex flex-col gap-3 ">
                    <div className="bg-clip-text py-2 text-transparent bg-gradient-to-b from-slate-50 from-1% to-slate-400 font-bold text-6xl">6 Months free of Zero Premium</div>
                    <div className=" font-medium text-gray-300 ">Try Zero Premium free for 6 months , no credit card required.</div>
                </div>
                <div className="flex flex-col gap-5 items-start">
                    <div className="flex flex-col gap-3 ">
                    <div className=" font-normal text-gray-400 text-xl "><span className="font-bold text-slate-100 text-4xl pr-3">Free</span>$9,99<span className=" text-sm "> / per month</span></div>
                    <div className="flex max-w-[239.69px] items-center">
                        <div className=" w-1/2 h-[1px] bg-gradient-to-r from-black from-12% to-slate-600 "></div>
                        <div className=" w-1/2 h-[1px] bg-gradient-to-l from-black from-12% to-slate-600 "></div>
                    </div>
                    </div>
                    <Link href={"/"} className="px-20 py-4 bg-blue-600 text-slate-50 font-normal text-base text-center rounded-2xl">Get 6 months for free</Link>
                </div>  
              </div>
              <div className="max-w-[563px] w-full h-[400px] flex flex-col gap-8 bg-bottom bg-cover pl-[72px] py-[120px] " style={{ backgroundImage: 'url(bg.svg)' }}>
                <div className="flex items-center gap-2">
                    <Image src="check.svg" alt={"checkSvg"} width={24} height={24} />
                    <div className="font-semibold text-lg tracking-tight ">Manual budget input</div>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="check.svg" alt={"checkSvg"} width={24} height={24} />
                    <div className="font-semibold text-lg tracking-tight ">Wallet features</div>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="check.svg" alt={"checkSvg"} width={24} height={24} />
                    <div className="font-semibold text-lg tracking-tight ">Automatic expenses tracking </div>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="check.svg" alt={"checkSvg"} width={24} height={24} />
                    <div className="font-semibold text-lg tracking-tight ">Full Plaid features</div>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="check.svg" alt={"checkSvg"} width={24} height={24} />
                    <div className="font-semibold text-lg tracking-tight ">Limited paid features</div>
                </div>
              </div>
            </div>
            <div className="h-[800px] rounded-2xl flex py-20  flex-col gap-8 bg-center bg-cover items-center  border-l-2  border-r-2 border-t-[1.5px] border-t-cyan-700 border-r-cyan-700/25 border-l-cyan-700/25  " style={{ backgroundImage: 'url(bg.svg)' }}>
                <div className="flex flex-col gap-4 ">
                    <div className="text-6xl tracking-tight font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-50 from-1% to-slate-400 ">Sign up and get<br></br>6 months Premium</div>
                    <div className=" text-center font-medium text-gray-400  ">Ready to get started?</div>
                </div>
                <form action="" className="flex flex-col gap-6 items-start max-w-[601.2px] w-full">
                    <div className="flex gap-4 items-center w-full ">
                        <input type="text" placeholder="First Name" className=" w-1/2 outline-none py-[10px] px-4 items-start relative rounded-xl bg-transparent border border-slate-400 backdrop-filter backdrop-blur-[1.3px] "  />
                        <input type="text" placeholder="Last Name" className=" w-1/2 outline-none py-[10px] px-4 items-start relative rounded-xl bg-transparent border border-slate-400 backdrop-filter backdrop-blur-[1.3px] " />
                    </div>
                    <input type="text" placeholder="Date of Birth " className=" w-full outline-none  py-[10px] px-4 items-start relative rounded-xl bg-transparent border border-slate-400 backdrop-filter backdrop-blur-[1.3px] "  />
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Your phone number" className=" w-full outline-none  py-[10px] px-4 items-start relative rounded-xl bg-transparent border border-slate-400 backdrop-filter backdrop-blur-[1.3px] "  />
                    <input type="email" id="email" placeholder="E-Mail" pattern=".+@example\.com" className=" w-full outline-none  py-[10px] px-4 items-start relative rounded-xl bg-transparent border border-slate-400 backdrop-filter backdrop-blur-[1.3px] "  />
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Account number" className=" w-full outline-none  py-[10px] px-4 items-start relative rounded-xl bg-transparent border border-slate-400 backdrop-filter backdrop-blur-[1.3px] "  />
                    <input type="text" placeholder="Account balance" className=" w-full outline-none  py-[10px] px-4 items-start relative rounded-xl bg-transparent border border-slate-400 backdrop-filter backdrop-blur-[1.3px] "  />
                    <div className="flex items-center justify-between w-full ">
                        <div className="flex items-center gap-1 ">
                            <SelectUi/>
                            <div className="max-w-[250px] text-xs text-gray-400 ">By continuing you agree to Freede<br></br> Zero's <span className=" underline text-cyan-400 ">Terms of Service</span> & <span className=" underline text-cyan-400 ">Privacy Policy</span></div>
                        </div>
                        <button type="submit" className="px-4 py-3 rounded-xl text-center bg-blue-600 ">Get started for Free</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="w-full bg-slate-100 h-full py-28 items-center">
            <div className="flex flex-col gap-3">
              <div className="text-center text-8xl font-semibold tracking-tight text-gray-900">Start your journey<br></br>with ZERO app</div>
              <div className="text-center text-gray-900 bg-transparent font-medium">Download the mobile app and start managing your finances today.</div>
              <div className="items-center flex justify-center pt-3 mb-5 ">
              <Link href={'/'} className="flex gap-3 items-center px-6 py-2 justify-center border border-gray-300 rounded-full bg-gradient-to-r from-slate-100 to-slate-300">
                <Image src={"appleDark.svg"} alt={"appleDarkLogo"} height={24} width={24}/>
                <div className="flex flex-col items-start">
                    <div className=" text-xs text-gray-950 tracking-tighter font-medium ">Download on the</div>
                    <div className="text-gray-950 font-bold text-lg">App Store</div>
                </div>
              </Link>
              </div>
              
            </div>
            <div className="w-full h-96 flex items-center overflow-hidden my-6 justify-center">
                <div className="relative  max-w-[1043px]  overflow-y-hidden w-full h-[400px] rounded-3xl bg-slate-200/65">
                    <div className="absolute flex flex-col items-start ml-10 gap-4 animate-infinite-y-move z-[-10px]">
                        <Image src="forCard1.svg" className="ml-[60px]" alt={"perspectiveCard"} height={516.4} width={239.26}/>
                        <Image src="forCard1.svg" className="ml-[-60px]" alt={"perspectiveCard"} height={516.4} width={239.26}/>
                       
                    </div>
                </div>
            </div>
        </div>
        
        </>
        
    )
}