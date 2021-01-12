import React, { Component } from 'react';
import axios from 'axios';

import Gallery from './Gallery';
import apiKey from '../config';


export default class RouteHandling extends Component {
  
    state = {
      images: [],
      query: this.props.match.params.query,
      loading: true
  }
  
  componentDidMount() {
    this.performSearch(this.props.match.params.query);
  }

  componentDidUpdate(prevProps) {
    let prevQuery = prevProps.match.params.query;
    let query  = this.props.match.params.query;
    if(prevQuery !== query){
      this.performSearch(query);
    }
  }

  //Can be set to default
  performSearch(query){
    this.setState(
      { loading: true }
    )
    let URL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

    axios.get(URL)
    .then((response) => {
      this.setState({
          query,
          images: response.data.photos.photo,
          loading: false
      })
    })
  }     
    render() {
      return (
          <Gallery
            query ={this.state.query}
            images= {this.state.images}
            loading={this.state.loading}/>
        )
    }
}