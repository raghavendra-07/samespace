import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import SongList from './components/SongList';
//import Player from './components/Player';
import MusicControls from './components/MusicControls';

import './App.css';

class App extends Component {

  state = { 
    songs: [], 
    filteredSongs : [], 
    currentSong:null,
  }

  componentDidMount () {
    fetch('https://cms.samespace.com/items/songs')
      .then(response => response.json())
      .then(data => this.setState({ songs: data.data, filteredSongs: data.data }));
  }

  playsong = (song) =>{
    this.setState({currentSong: song});
  }

  filterSongs = (query) => {
    const filteredSongs = this.state.songs.filter(song => 
      song.name.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({filteredSongs});
  };

  render(){

    return(
      
      <div  className='app'>
        <div className='main-con'> 
          <div className='logo-container'>
            <div className='logo-inner-container'>
              <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0LG2D3wccR5muqgi16cvnvX9IigghVE6eQ&s" alt="logo"/>
              <h1 className='logo-name'>Spotify</h1>
            </div>
            <img className='person-picture' src="https://i.pinimg.com/564x/5e/c9/d9/5ec9d90cf558c385cd631b60b1a51540.jpg" alt='person'/>
          </div>
        <div>
          <SearchBar onSearch={this.filterSongs} />
          <SongList songs={this.state.filteredSongs} onSelectSong={this.playsong}/>
        </div>
        </div>
        <div> 
          {this.state.currentSong ? (
            <MusicControls allSongs={this.state.filteredSongs} soloSong={this.state.currentSong} />
          ) : (<img src="https://i.ibb.co/hXKZ0Dk/Player.png" alt="Player" className='cover-img' border="0" />)}
        </div>
      </div>
    )
  }
}

export default App;
