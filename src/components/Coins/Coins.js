import React, { useEffect, useState } from 'react';

const Coins = () => {
    const [coins,setCoins]=useState([])

    useEffect(()=>{
fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false")
.then(res=>res.json())
.then(data=>{setCoins(data) 
    console.log(data)})
    },[])
    return (
        <div>
            <h2>coins number={coins.length}</h2>
        </div>
    );
};

export default Coins;