import React from 'react';
import './price.scss'

export default function Price({modal}) {
  
  return (<>
  <div className='wrapper' style={{display: modal ? 'flex': 'none'}}>
    <div className="priceDiv">
    <span  className="close">&times;</span>
    </div>
  </div>
  </>
)}
