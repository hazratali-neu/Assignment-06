import React from 'react';
import { toast } from 'react-toastify';

const SelectedPlayer = ({selectedPlayers,sum,setSum, selectedPlayer,setSelectedPlayers }) => {

    const handleRemove=(selectedPlayer)=>{
      const filteredArray= selectedPlayers.filter(singlePlayer=>singlePlayer.name!==selectedPlayer.name)
      setSelectedPlayers(filteredArray)
      toast.error("Wow card removed!")
      setSum(sum-selectedPlayer.price)
    }
  return (
    <div className='max-w-[1200px] mb-5 mx-auto'>

      <div className='flex justify-between bg-[#F9FAFC] p-4 rounded-lg'>
        <div className='flex gap-3 items-center'>
          <img 
            src={selectedPlayer.icon} 
            alt={selectedPlayer.name}
            className='w-16 h-16 object-cover rounded' 
          />
          <div>
            <h1 className='text-[#101727] font-semibold text-xl'>{selectedPlayer.name}</h1>
            <p className='font-medium text-left text-[#627382]'>${selectedPlayer.price}</p>
          </div>
        </div>

        <div className='flex flex-col justify-center'>
          <button onClick={()=>handleRemove(selectedPlayer)} className='text-[#FF3980]'>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default SelectedPlayer;