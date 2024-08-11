import React from "react";
import './index.css';

const SongList = ({songs, onSelectSong}) => {
    return(
        <div className="song-list-container">
            {songs.map(song => (
                <div key={song.id} onClick={ () =>onSelectSong(song)} className="song-list">
                    <img className="song-cover-image" src={`https://cms.samespace.com/assets/${song.cover}`} alt="cover"/>
                    <div className="name-artist-con">
                        <h3 className="name">{song.name}</h3>
                        <p className="artist">{song.artist}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SongList