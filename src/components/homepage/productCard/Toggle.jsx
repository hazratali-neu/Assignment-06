import React, { use, useState } from 'react';
import Products from './products/Products';
import Cart from './cart/Cart';

const Toggle = ({ promiseData,selectedPlayers,setSelectedPlayers}) => {
    const datas=use(promiseData);
    const [selected, setSelected] = useState("Products")
    
     const [sum,setSum]=useState(0)
    return (
        <div className='text-center space-y-5 mb-10'>
            <h1 className='text-[#101727] font-extrabold text-5xl'>Premium Digital Tools</h1>
            <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <div>
                <button onClick={() => setSelected('Products')} 
                className={`btn py-3.5 px-6 rounded-full ${selected === 'Products'?"bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white":""}`}>Products</button>
                <button onClick={() => setSelected('Cart')}
                 className={`btn py-3.5 px-6  rounded-full ${selected === 'Cart'?"bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white":""}`}>Cart({selectedPlayers.length})</button>
            </div>
            {
                selected==='Products'?
                <Products sum={sum} setSum={setSum} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} datas={datas}></Products>:
                <Cart sum={sum} setSum={setSum}  setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} ></Cart>
            }
        </div>
    );
};

export default Toggle;