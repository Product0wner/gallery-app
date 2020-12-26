import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import SearchForm from './components/SearchForm'
import MainNav from './components/MainNav'
import PhotoList from './components/PhotoList'
import apiKey from './config'

class App extends Component {
  state = {
    images: []
  };

  performSearch = (query) => {
    console.log(query);
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({ 
          images: res.data.photos.photo,
          loading: false
        });
      })  
      .catch(error => {
        console.log('Error when trying to fetch data', error)
      })
  }
  
  render() {
    return (
      <div className="container">
      <SearchForm onSearch={this.performSearch}/>  
      <MainNav/>
      <PhotoList data = {this.state.images}/>
    </div>
    ) 
  } 
}
export default App;