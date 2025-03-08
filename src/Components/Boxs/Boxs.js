import React from 'react';

import './Boxs.css'


// کامپوننت باکس
const Box = ({ title, icon: Icon }) => {
  return (
    <div className='boxes'>
      <div className='box'>
        {Icon && <Icon  style={{ fontSize: '5rem', marginRight: '8px', color: '#ffc451' }} />}
        <span className='box-title'>{title}</span>
      </div>
    </div>
  );
};


export default Box;