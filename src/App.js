import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import SearchForm from './components/SearchForm'
import MainNav from './components/MainNav'
import PhotoList from './components/PhotoList'

class App extends Component {
  state = {
    images: "Ballaman"
  };

  render() {
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