const SearchInput = ({handleSearch, searchedName}) => {

    return(
        <div className="search-input-container">
                <input placeholder='Search by name' className="search-input" type="text" value={searchedName} onChange={(e) => handleSearch(e)}/>
        </div>
    )
}

export default SearchInput;