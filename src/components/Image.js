import React from 'react';

const Image = (props) => {
    return(
        <li>
              <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt={props.title}></img>
        </li>
    );
}

export default Image;


