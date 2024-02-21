

export default function Hero(){
    const idk = `bg-clip-text py-2 text-transparent bg-gradient-to-r from-slate-50 to-slate-600 font-bold `
    return(
        <div className="w-full relative mt-20">
            <div className="absolute w-[0.8px] left-[330px] bottom-[200px] h-[182px] bg-gradient-to-b from-transparent to-slate-700"></div>
            <div className="absolute w-[0.8px] right-[330px] bottom-[200px] h-[182px] bg-gradient-to-b from-transparent to-slate-700"></div>
            <div className="absolute h-[0.8px] left-[230px] bottom-[0px] w-[200px] bg-gradient-to-r from-transparent to-slate-700">
            <div className="absolute right-[-0.6px] bottom-[-1.4px] rounded-full w-[4.3px] h-[4.6px] bg-slate-700"></div>
            </div>
            <div className="absolute h-[0.8px] right-[230px] bottom-[0px] w-[200px] bg-gradient-to-l from-transparent to-slate-700">
            <div className="absolute left-[-0.6px] bottom-[-1.4px] rounded-full w-[4.3px] h-[4.6px] bg-slate-700"></div>
            </div>
            <div className="flex flex-col gap-7 items-center text-7xl">
                <span className={`${idk}`}>Easy Budgeting,</span>
                <span className={`${idk}`}>Zero Stress</span>
            </div>
        </div>
    )
}