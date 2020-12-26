import React from 'react'
  // https://live.staticflickr.com/65535/50718986528_326dbd9808.jpg
  //https://live.staticflickr.com/${server-id}/${id}_${secret}.jpg


const NoImages = () => {
    
    return (
        <ul>
            <li className="not-found">
                <h3>No Results Found</h3>
                <p>You search did not return any results. Please try again.</p>
            </li>

        </ul>
    )
}
export default NoImages