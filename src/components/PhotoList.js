import React from 'react'
import Images from './Images'
import NoImages from './NoImages'

const PhotoList = (props) => {

    const results = props.data;
    const images = [];
    const imagesPerRow = 4;

    if(results.length > 0) {
        let i = 0
        while(i < results.length) {
            let groupOfImages = results.slice(i, i + imagesPerRow);
            images.push(<Images data = {groupOfImages}/>);
            i = i + imagesPerRow;
        }
    } else {
        images.push(<NoImages/>)
    }
    return(
        <div className="photo-container">
            <h2>Search Results</h2>
            {images}
        </div>
    )
}

export default PhotoList;
