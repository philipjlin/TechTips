import React from 'react';

/**
 * Search
 * Component search bar
 * 
 * 
 * @param {searchTerms, setSearchTerms} props
 * @returns Search bar with input field for user text queries and clear button
 */
function Search(props){

    /*
     * Handler for change event (user types in text field)
     */
    function handleChange(event){

        props.setSearchTerms(event.target.value);
    }



    /*
     * Handler for button click
     */
    function handleClick(event){

        props.setSearchTerms(event.target.value);
    }



    return (
        
        <div id='search'>                    
            <input className="search-bar" onChange={handleChange} value={props.searchTerms} type="text" placeholder="Search Title..." />
            <button className="search-btn" type="submit" onClick={handleClick} value={""}> Clear </button>
        </div>
    );
}

export default Search;