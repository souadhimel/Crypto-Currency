import React from 'react';
import { Bounce } from 'react-reveal';

const BDcontact = () => {
    return (
        <div style={{margin:'200px 0'}} className='border p-8 bg-blue-100 w-full'>
      <div className='flex justify-between items-center'>
        <div>
          <h1>Street: 17/4 Dhanmondi.</h1>
          <h1>City: Dhaka</h1>
          <h1>Phone: +8801622222456</h1>
          <h1>Email: contact.bd@cc.com</h1>
        </div>
        <div>
          <Bounce><h1 className='text-2xl'>BANGLADESH OFFICE</h1></Bounce>
        </div>
      </div>
    </div>
    );
};

export default BDcontact;