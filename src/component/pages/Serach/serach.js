import React, { useState, useEffect }from "react";


const Search = ({onSearch}) =>{

    const[ search, setSearch] = useState("");

    const onInputChange = ( value ) =>{
        setSearch(value);
        onSearch(value);
    }
    return (
        <input
          type="text"
          className="form-control"
          style={{width: "660px", marginRight: "-350px"}}
          placeholder="Search"
          value={search}
          onChange={(e) => onInputChange( e.target.value)}
          />
    )
}

export default Search;