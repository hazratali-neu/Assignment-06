import React from 'react';
import bannerImg from '../../../assets/banner.png'
import playImg from '../../../assets/play.png'
const Banner = () => {
    return (
        <div className='flex gap-14 justify-between max-w-[1200px] mx-auto mb-14'>
            <div className='w-[640px] space-y-8 flex flex-col justify-center'>
                <div className='w-[294px] bg-[#e1e7ffee] rounded-full p-2'>
                    <div className="flex items-center gap-2  bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">
                        <span className="w-[18px] h-[18px] bg-[#7c3aed] rounded-full"></span>
                        <span className="text-[16px] font-medium">
                            New: AI-Powered Tools Available
                        </span>
                    </div>
                </div>
                <h2 className='text-6xl font-extrabold text-[#101727]'>Supercharge Your <br /> Digital Workflow</h2>
                <p className='text-lg text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />
                    Explore Products
                </p>
                <div className='flex gap-4'>
                    <button className="btn text-white  bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-4 rounded-full">Explore Products</button>
                    <button className="btn border border-[#9514FA] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent p-3.5 rounded-full"> <img src={playImg} alt="" />Watch Demo</button>
                </div>
            </div>
            <div className='rounded-2xl bg-linear-to-r from-[#969696] to-[#666666]'>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;