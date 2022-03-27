import React from 'react'
import PricingOption from '../PricingOption/PricingOption'

const Pricing = () => {
    const pricingOption = [
        { id: 1, name: 'free', price: 0 },
        { id: 2, name: 'regular', price: 99.9 },
        { id: 3, name: 'premium', price: 999.9 },
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deal Of The Town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque a ea cum necessitatibus soluta neque nobis rem illum quaerat aspernatur.</p>

            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOption.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    )
}

export default Pricing