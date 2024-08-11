import React, {useState} from "react";

import Player from "../Player";

import './index.css'


const MusicControls = ({allSongs,soloSong}) =>{
    const [isPlaying,setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    
    const currentSong = allSongs[currentSongIndex];

    const togglePlayPause = () => {
        const audio = document.getElementById('audio-player');

        if(isPlaying) {
            audio.pause();
        } else{
            audio.play();
        }

        setIsPlaying(!isPlaying);
    }

    const handlePrevious = () =>{
        setCurrentSongIndex((prevIndex) => (prevIndex === 0 ? allSongs.length - 1 : prevIndex - 1));
        setIsPlaying(false);
        
    }

    const handleNext = () =>{
        setCurrentSongIndex((prevIndex) => (prevIndex === allSongs.length - 1 ? 0 : prevIndex + 1));
        setIsPlaying(false);
    
    }


    return (
        <div className="buttons-con">  
            <div className="song-info">
                <Player currentSong={currentSong}/>
            </div>
            <div className="handles-con">
                <button className="prev-btn" onClick={handlePrevious}>
                    <img className="button-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCb5_irOaYHP87yL2X_yPJeRs6pymY-v0ohQ&s" alt="previous"/>
                </button>
                <audio id="audio-player" src={currentSong.url} />
                <button className="button-in-con" onClick={togglePlayPause}>
                {isPlaying ? <img className="button" alt="pause" src="https://cdn1.vectorstock.com/i/1000x1000/04/75/pause-button-icon-design-vector-22050475.jpg"/> :
                  <img className="button" alt="play" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSJt2OcLwV-5HSGU1Ux_6hsZ58BuXR1aIbBQ&s"/>}
                </button>
                <button className="nxt-btn" onClick={handleNext}>
                    <img className="button-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9Xw-bmg7rdYYBy-HEpeGZbqNJck-xTPPcw&s" alt="next"/>
                </button>
            </div>
        </div>
    )
}


export default MusicControls