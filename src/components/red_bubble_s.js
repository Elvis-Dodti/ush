import React from "react";
import './red_bubble_s.css'

function SmallRedBubble(props) {
    return ( 
        <div id="rbs" style={props.pos}></div>
    );
}

export default SmallRedBubble