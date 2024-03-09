"use client"
import { useState } from "react" ;

export default function Dummy(){
    const [active,setActive] = useState(false) ;
    const [numbers, setNumbers] = useState({ number1: 0, number2: 0 });
  const [moyenne, setMoyenne] = useState(0); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNumbers((prevNumbers) => ({ ...prevNumbers, [name]: parseFloat(value) || 0 }));
  };
  const calculateMoyenne = () => {
    const { number1, number2 } = numbers;
    const newMoyenne = (number1 + number2) / 2;
    setMoyenne(newMoyenne);
  };
    const handleClick = () => {
        setActive(!active);
      };
    return(
       
        <div className="max-w-[1043px] mx-auto h-[1000px] my-auto flex flex-col items-center justify-center">
        <div className="flex flex-col gap-12 items-center justify-center mt-[5vh]">
            <button className="px-4 py-3 max-w-[180px] rounded-2xl bg-blue-500 text-center text-xl font-medium hover:bg-blue-600 transition-all text-white " onClick={handleClick} >Click Here</button>
            { active && <p className=" text-3xl leading-5 font-bold">Bonjour tout le monde</p>}
        </div>
        <div className="flex flex-col gap-10 rounded-3xl w-[670px] h-[600px] mt-[52px] border border-slate-500 px-4 py-4 bg-gradient-to-b from-slate-800 from-8% to-black items-center ">
            <div className="flex items-center justify-center gap-7">
                <input type="text" name="number1" id="" placeholder="Value 1"  value={numbers.number1} onChange={handleChange} className="outline-none  py-[10px] px-4 items-start relative rounded-xl bg-transparent border border-slate-400 backdrop-filter backdrop-blur-[1.3px]" />
                <input type="text" name="number2" id="" placeholder="Value 2" value={numbers.number2} onChange={handleChange} className="outline-none  py-[10px] px-4 items-start relative rounded-xl bg-transparent border border-slate-400 backdrop-filter backdrop-blur-[1.3px]" />
            </div>
            <button  className="px-4 py-3 max-w-[180px] rounded-2xl bg-blue-500 text-center text-xl font-medium hover:bg-blue-600 transition-all text-white " onClick={calculateMoyenne}>Click here</button>
            {moyenne && <p className=" text-3xl leading-5 font-bold"> {moyenne} </p> }
            
        </div>
        </div>
       
      
    )
}