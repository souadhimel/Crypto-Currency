import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({coin}) => {
    return (
        <div className="shadow-lg rounded-2xl w-[250px] bg-white p-4 m-3">

            <Link to="/coins">
            <div className="flex gap-4 justify-between items-center">
               <div className=" flex-shrink-0">
                   <img className="mx-auto object-cover rounded-full h-16 w-16" src={coin.image} alt="" />
               </div>
               <div className="flex flex-col justify-end">
                   <span className="text-gray-600 font-medium">{coin.name}</span>
                   <span className="text-gray-400 font-medium">{coin.symbol}</span>
               </div>
             </div>




            </Link>
            {/* <p>{coin.id}</p>
            <p>p> */}

        </div>
    );
};

export default CoinCard;