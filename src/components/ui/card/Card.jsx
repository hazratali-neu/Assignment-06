import React, { useState } from 'react';
import { toast } from 'react-toastify';
const Card = ({ data,sum,setSum ,selectedPlayers,setSelectedPlayers}) => {
    
  const [btnSelect,setbtnSelect]=useState(false)
  const handleClickCart=()=>{
     setSum(sum+=data.price)
     const Existing=selectedPlayers.find(player=>player.name===data.name)
     if(Existing){
        toast.error("sorry card is already added!")
        return;
     }
    
     setSelectedPlayers([...selectedPlayers,data])
     setbtnSelect(!btnSelect)
     toast.success("Wow card added!")
  }
    return (
        <div>
            <div className="bg-base-100 p-6 shadow-sm">
                <div className='space-y-4'>
                    <div className='flex justify-end mb-2'>
                        <div className={`badge py-1.5 px-3 rounded-full ${data.tag === 'Popular' ? 'bg-[#E1E7FF] text-[#4F39F6]' :
                                data.tag === 'New' ? 'bg-[#DBFCE7] text-[#0A883E]':'bg-[#FEF3C6] text-[#BB4D00]'
                            }`}>
                            {data.tagType}
                        </div>
                    </div>

                   <div>
                     <img src={data.icon} alt="" />
                   </div>

                    <h2 className='font-bold text-2xl text-left text-[#101727]'>{data.name}</h2>
                    <p className='text-[#627382] text-left'>{data.description}</p>
                    <div className="flex justify-between">
                        <span className="text-xl">${data.price}<span className='text-[#627382]'>/{data.period}</span></span>
                    </div>
                    <ul className="mt-6 flex text-left flex-col gap-2 text-xs">

                        {
                            data.features.map((feature, idx) => (
                                <li key={idx}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className='text-[#627382] font-medium'>{feature}</span>
                                </li>
                            ))
                        }

                    </ul>
                    <div className="mt-6">
                        <button onClick={handleClickCart} className={`btn rounded-full btn-block ${btnSelect===false?'btn-primary':'bg-green-500 text-white'}`}>{btnSelect===false?'Buy Now':'Added to Cart'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

