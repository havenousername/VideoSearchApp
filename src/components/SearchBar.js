import React from "react";

class SearchBar extends React.Component{
    render() {
        return (
            <div>
                <label htmlFor={"search"}>Search</label>
                <input id={"search"} type={"text"}/>
            </div>
        )
    }
}

export default SearchBar;