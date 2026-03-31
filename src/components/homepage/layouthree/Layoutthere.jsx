import React from 'react';
import userImg from '../../../assets/user.png'
import packageImg from '../../../assets/package.png'
import rocketImg from '../../../assets/rocket.png'
const Layoutthere = () => {
    return (
        <div className='max-w-[1200px] space-y-4 mt-28 mt-28 mx-auto'>
            <h1 className='text-center text-5xl font-extrabold text-[#101727]'>Get Started in 3 Steps</h1>
            <p className='text-center'>Start using premium digital tools in minutes, not hours.</p>
            <div className='grid grid-cols-3 gap-7 mt-10'>
                <div className='bg-white shadow-lg rounded-2xl space-y-4 text-center'>
                    <div className='flex justify-end px-5 py-5'>
                        <div className='w-[30px] flex justify-center items-center text-white rounded-full h-[30px] bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                            01
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-[80px] h-[80px] bg-[#9514FA]/10 rounded-full mx-auto">
                        <img className="w-12 h-12 object-cover rounded-full" src={userImg} alt="" />
                    </div>

                    <h1 className='text-2xl font-bold text-[#101727]'>Create Accoun</h1>
                    <p className='text-[16px] mb-20 text-[#627382]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                </div>
                <div className='bg-white shadow-lg rounded-2xl space-y-4 text-center'>
                    <div className='flex justify-end px-5 py-5'>
                        <div className='w-[30px] flex justify-center items-center text-white rounded-full h-[30px] bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                            02
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-[80px] h-[80px] bg-[#9514FA]/10 rounded-full mx-auto">
                        <img className="w-12 h-12 object-cover rounded-full" src={packageImg} alt="" />
                    </div>

                    <h1 className='text-2xl font-bold text-[#101727]'>Choose Products</h1>
                    <p className='text-[16px] mb-20 text-[#627382]'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                </div>
                
                  <div className='bg-white shadow-lg rounded-2xl space-y-4 text-center'>
                    <div className='flex justify-end px-5 py-5'>
                        <div className='w-[30px] flex justify-center items-center text-white rounded-full h-[30px] bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                            03
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-[80px] h-[80px] bg-[#9514FA]/10 rounded-full mx-auto">
                        <img className="w-12 h-12 object-cover rounded-full" src={rocketImg} alt="" />
                    </div>

                    <h1 className='text-2xl font-bold text-[#101727]'>Start Creating</h1>
                    <p className='text-[16px] mb-20 text-[#627382]'>Download and start using your premium <br />  tools immediately.</p>
                </div>
                
            </div>
        </div>
    );
};

export default Layoutthere;