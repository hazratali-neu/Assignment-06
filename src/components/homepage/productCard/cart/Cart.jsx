import React from 'react';
import SelectedPlayer from '../../../ui/selectedPlayer/SelectedPlayer';
import img from '../../../../assets/products/shopping-cart.png'
import { toast } from 'react-toastify';
const Cart = ({ selectedPlayers,sum,setSum, setSelectedPlayers }) => {
    const handleClear = () => {
        setSelectedPlayers([]);
        toast.error("Wow card clear!");
    }

    return (
        <div className='max-w-[1200px] mx-auto'>
            {selectedPlayers.length === 0 ? (
                <div className='text-center bg-gray-300 rounded-2xl py-10'>
                    <h2 className='text-2xl text-[#101727] font-bold mb-4'>Your Cart is Empty</h2>
                    <div className='flex justify-center'>
                        <img className='w-[70px] h-[70px]' src={img} alt="" />
                    </div>
                </div>
            ) : (
                <div className='space-y-2'>
                    <h2 className='text-2xl text-[#101727] text-left font-bold mb-4'>Your Cart</h2>
                    {selectedPlayers.map((selectedPlayer, index) => (
                        <SelectedPlayer sum={sum} setSum={setSum} key={index} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}  selectedPlayer={selectedPlayer} />
                    ))}
                    <div className='flex justify-between mt-4'>
                        <p className='text-[#627382]'>Total:</p>
                        <p className='text-[#101727] text-2xl font-bold'>${sum}</p>
                    </div>
                    <button 
                        onClick={handleClear} 
                        className='btn w-full text-[#FFFFFF] font-bold rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-4'
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;