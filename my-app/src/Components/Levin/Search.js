import React, {useState} from "react";

const Search = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSearch(){
        onSearch(searchTerm);
    };

return (
    <div>
        <input
        type="text"
        placeholder="Search for a recipe..."
        value={searchTerm}
        onChange={(event)=> setSearchTerm(event.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
    </div>
)
}   

export default Search;