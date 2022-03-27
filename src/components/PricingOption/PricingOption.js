import React from 'react'

const PricingOption = ({ option }) => {
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded text-xl font-bold'>{option.name}</h2>
            <p>
                <span className='text-5xl font-bold'>{option.price}</span>
                <span className='text-xl font-bold text-gray-500'>/Month</span>
            </p>
        </div>
    )
}

export default PricingOption