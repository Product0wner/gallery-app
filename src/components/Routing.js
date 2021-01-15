import React, { Component } from 'react';
import axios from 'axios';

import Gallery from './Gallery';
import apiKey from '../config';


export default class RouteHandling extends Component {
    //set intial state of the app
    state = {
      images: [],
      query: this.props.match.params.query,
      loading: true
  }
  // perform search when loading on the query from the URL
  componentDidMount() {
    this.performSearch(this.props.match.params.query);
    console.log(this.props.match)
  }

  //compare current and previous search. Perform new search if they are not the same.
  componentDidUpdate(prevProps) {
    let prevSearch = prevProps.match.params.query;
    let query  = this.props.match.params.query;
    if(prevSearch !== query){
      this.performSearch(query);
    }
  }

  //Function that fetches the data and updates the state
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