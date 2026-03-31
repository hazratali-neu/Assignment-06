import React from 'react';
import Card from '../../../ui/card/Card';

const Products = ({ datas,sum,setSum,selectedPlayers,setSelectedPlayers }) => {

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[1200px] mx-auto'>
            {
                datas.map(data =><Card setSum={setSum} sum={sum} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} key={data.id} data={data}></Card>)
            
            }
            
        </div>

    );
};

export default Products;