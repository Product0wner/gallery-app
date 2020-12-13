import React, { Component } from 'react';
import logo from './logo.svg';
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

  performSearch = (query = 'cat') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=&format=json`)
      .then(res => {
        this.setState({ 
          gifs: res.data.data,
          loading: false
        });
      })  
      .catch(error => {
        console.log('Error when trying to fetch data', error)
      })
  }
  
  render() {
    console.log("dulli")
    console.log(this.state.images)
    return (
      <div class="container">
      <SearchForm/>
      <MainNav/>
      <PhotoList/>
    </div>
    ) 
  } 
}
export default App;