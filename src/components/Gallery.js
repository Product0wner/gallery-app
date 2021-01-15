import React, {Component} from 'react';
import NotFound from './NotFound';
import Image from './Image';

export default class Gallery extends Component{
    render(){
    const results = this.props.images;
    let images;
    
    // if response has images
    if(results.length > 0){
        images = results.map( image => 
            <Image  
                server={image.server}
                id={image.id}
                secret={image.secret}
                title={image.title}
                key={image.id.toString()}
                /> 
            );
    } else {  images = <NotFound />; }
    
    //Show images if loading is finshed
    return  (
        <div className="photo-container">
            <h2>{window.location.pathname.slice(8)}</h2>
            {!this.props.loading ? '' : <h1>Loading...</h1> }
            {this.props.loading ? '' : <ul>{images}</ul>   }
        </div>
        );
    }  
} 