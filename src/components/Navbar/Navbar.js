import React from 'react'
import LInk from '../Link/LInk'

const Navbar = () => {
    const routes = [
        { id: 1, name: 'home', link: '/home' },
        { id: 2, name: 'shop', link: '/shop' },
        { id: 3, name: 'deals', link: '/deals' },
        { id: 4, name: 'coupons', link: '/coupons' },
        { id: 5, name: 'contact', link: '/contact' },
    ]
    return (
        <nav>
            <ul>
                {
                    routes.map(route => <LInk key={route.id} route={route}></LInk>)
                }
            </ul>
        </nav>
    )
}

export default Navbar