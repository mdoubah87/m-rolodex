import React from "react"

import "./search-box.styles.css"

export const SearchBox = ({place, handleChange}) => (
    <input 
        className='search-box'
        type='search'
        placeholder={place}
        onChange={handleChange}
        autoFocus={true}
    />
);
