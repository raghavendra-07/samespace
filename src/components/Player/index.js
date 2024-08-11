import React from "react";
import './index.css'

const Player = ({currentSong}) =>{
    if (!currentSong) return null;

    return (
        <div className="player-container">
            <h2 className="player-name">{currentSong.name}</h2>
            <p className="player-artist">{currentSong.artist}</p>
            <img className="player-cover" src={`https://cms.samespace.com/assets/${currentSong.cover}`} alt="cover" />
        </div>
    )
}

export default Player