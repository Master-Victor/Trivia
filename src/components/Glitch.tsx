import React from 'react'
import './CSS/glitch.scss'
import './CSS/cardStyle.css'
interface Gprops{
    children?: string
}


const Glitch = (props: Gprops) => {
    const {children} = props
    return (
        <h1 className="glitch pregunta" data-text={children}>{children}</h1>
    )
}

export default Glitch
