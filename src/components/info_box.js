import React from 'react'
import './info_box.css'

function InfoBox(props) {
    return (
        <div className='info_box'>
            <p className='info_text'>{props.info}</p>
        </div>
      );
}

export default InfoBox;