import React from "react";
import './index.css'

const SearchBar = ({onSearch}) => {
    const handleChange = (event) => {
        onSearch(event.target.value);
    };

    return (
        <div className="search-container">
        <input 
        type="text" 
        className="input-element"
        placeholder="Search for a song..."
        onChange={handleChange}/>
        </div>

    )
}


export default SearchBar;