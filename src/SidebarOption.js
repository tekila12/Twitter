import React from 'react'
import './SidebarOption.css'



function SidebarOption({ active, text, Icon }) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption__active'}`}>
            <Icon className='Icon' />
            
            <h2 className='h2'> {text}</h2>
            
        </div>
    )
}

export default SidebarOption
