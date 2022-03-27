import React from 'react'

const LInk = (props) => {
    const { name, link } = props.route
    return (
        <li>
            <a href={link}>{name}</a>

        </li>
    )
}

export default LInk