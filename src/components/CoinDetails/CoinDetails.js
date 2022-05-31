import React, { useEffect, useState } from 'react';
import { Rotate, Zoom } from 'react-reveal';
import { Link, useParams } from 'react-router-dom';

const CoinDetails = () => {
    const {id}=useParams()
    const [coin, setCoin]=useState({})
    useEffect(() =>{
        const url=`https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setCoin(data)
            console.log(data)
        
        })

    },[id])
    return (
        <>
       <div style={{textAlign: 'center',marginTop:'10px',}}> <Link  to="/coins"><button style={{color: 'black', backgroundColor: 'pink', width: '40%', padding: '10px',  borderRadius:'10px'}}>See more</button></Link></div>
        <div className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
            <div  className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 md:justify-items-around content-center'>
                <div>
                <h1 className='text-3xl'>General Info:</h1>
              <hr />
              <h1>Coin Name: {coin.name}</h1>
              <h1>Market Cap Rank: {coin.market_cap_rank}</h1>
              <h1>
                Origin:{' '}
                {coin.country_origin ? coin.country_origin : 'Not Available'}
              </h1>
              <h1>Contract Address: {coin.contract_address}</h1>
              <h1>Hashing Algorithm: {coin.hashing_algorithm}</h1>
              <h1>Genesis Date: {coin.genesis_date}</h1>
              <h1>Last Updated: {coin.last_updated}</h1>

              <h1 className='text-3xl mt-4'>Scores:</h1>
              <hr />
              <h1>Community Score: {coin.community_score}</h1>
              <h1>Developer Score: {coin.developer_score}</h1>
              <h1>Liquidity Score: {coin.liquidity_score}</h1>
              <h1>Public Interest Score: {coin.public_interest_score}</h1>
                </div>
                <div className='flex order-1 md:order-2 justify-center items-center'>
                <Zoom><Rotate><img style={{borderRadius:'50%', border:'2px dotted red'}} src={coin.image?.large} alt='coinImg' /></Rotate>
                </Zoom>           
                </div>
            </div>
        </div>
        </>
    );
};

export default CoinDetails;