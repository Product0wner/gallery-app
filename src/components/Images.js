import React from 'react'
  // https://live.staticflickr.com/65535/50718986528_326dbd9808.jpg
  //https://live.staticflickr.com/${server-id}/${id}_${secret}.jpg


const Images = (props) => {
    console.log(props.data)
    console.log(props.data[0].server)
    let images = props.data
    
    return (
        <ul>
            <li>
                <img src= {`https://live.staticflickr.com/${images[0].server}/${images[0].id}_${images[0].secret}.jpg`} alt="" />
            </li>
            <li>
                <img src={`https://live.staticflickr.com/${images[1].server}/${images[1].id}_${images[1].secret}.jpg`} alt="" />
            </li>
            <li>
                <img src={`https://live.staticflickr.com/${images[2].server}/${images[2].id}_${images[2].secret}.jpg`} alt="" />
            </li>
            <li>
                <img src={`https://live.staticflickr.com/${images[3].server}/${images[3].id}_${images[3].secret}.jpg`} alt="" />
            </li>
        
        </ul>
    )
}
export default Images