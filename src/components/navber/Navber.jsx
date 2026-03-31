import React from 'react';
import cart from '../../assets/products/shopping-cart.png';
const Navber = ({selectedPlayers}) => {
    return (
        <div className='max-w-[1200px] mx-auto mb-14'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 items-center">
                        <li className='text-[16px] font-semibold text-[#101727]'><a>Products</a></li>
                        <li className='text-[16px] font-semibold text-[#101727]'><a>Features</a></li>
                        <li className='text-[16px] font-semibold text-[#101727]'><a>Pricing</a></li>
                        <li className='text-[16px] font-semibold text-[#101727]'><a>Testimonials</a></li>
                        <li className='text-[16px] font-semibold text-[#101727]'><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <div className='relative'>
                        <img className='w-[25px] h-[25px]' src={cart} alt="" />
                        {selectedPlayers.length>0?
                        (<div className="badge absolute -top-3 left-1 badge-sm rounded-full bg-red-500">{selectedPlayers.length}</div>)
                        :('')
                        }
                    </div>
                    <p  className='text-[16px] font-semibold text-[#101727]'>Login</p>
                    <a className="btn text-[#FFFFFF] bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;