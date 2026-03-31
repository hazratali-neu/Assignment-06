import React from 'react';

const Base = () => {
    return (
        <div className='flex justify-center mb-28 py-14 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='flex justify-around w-[1100px] gap-9 border-2' >
                <div>
                    <h1 className='text-[#FFFFFF] text-6xl font-extrabold'>50K+</h1>
                    <p className='text-[#FFFFFF] text-2xl font-medium'>Active Users</p>
                </div>
                <div>
                    <h1 className='text-[#FFFFFF] text-6xl font-extrabold'>200+</h1>
                    <p className='text-[#FFFFFF] text-2xl font-medium'>Premium Tools</p>
                </div>
                <div>
                    <h1 className='text-[#FFFFFF] text-6xl font-extrabold'>4.9</h1>
                    <p className='text-[#FFFFFF] text-2xl font-medium'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Base;