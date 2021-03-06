import React, { useEffect, useState } from 'react';
import { Bounce } from 'react-reveal';
import CoinCard from '../CoinCard/CoinCard';

const Coins = () => {
    const [coins,setCoins]=useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false")
.then(res=>res.json())
.then(data=>{setCoins(data) 
    console.log(data)})
    },[])
    return (

<>
{ loading? 
(<button type="button" class="bg-indigo-500 ..." disabled>
<svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
</svg>
Processing...
</button>)
:

      (<div className=" px-4 pt-10 pb-24 mx-auto max-w-7xl md:px-2" >

      <Bounce bottom cascade><h1  className="text-center text-4xl font-bold text-gray mb-12 ">Available Crypto Currencies </h1></Bounce>
      <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
      {coins.map((coin)=>(
      <CoinCard key={coin.id}
      coin={coin}
      >
      </CoinCard>
      ))}
      </div>
  </div>)
  }
        </>     
    )
};

export default Coins;