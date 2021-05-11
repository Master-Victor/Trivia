import React from 'react'
import './CSS/glitch.scss'
import './CSS/cardStyle.css'
import './CSS/letter.css'
interface Gprops{
    children?: string
}


const Letter = (props: Gprops) => {
    const {children} = props
    return (
    <div>
        <div className="text text-1 pregunta">{children}</div>
    </div>
    )
}

export default Letter