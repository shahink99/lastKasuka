import React from 'react'


import './SectionHeader.css'

function SectionHeader({title , subTitle}) {
    return (
        <div className="sectioHader">
            <div className="few-title-wrapper">
                <span className='few-title-text'>{subTitle}</span>
                <p className="few-title-line"></p>
            </div>
            <h3 className="sectionHader-title">
                {title}
            </h3>
        </div>
    )
}

export default SectionHeader
