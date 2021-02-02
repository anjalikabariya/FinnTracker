import React from 'react';
import './styles.scss';

function SearchForm({submitHandler}) {
    //pass value from search bar input to submitHandler function
    const searchRes = (e) => { 
        e.preventDefault();
        let searchQuery = e.target.title.value;
        submitHandler(searchQuery);
      }
    return (
        <form onSubmit={searchRes} className="search">
            <input className="search__input" type="text" placeholder="Search e.g. APPLE, MSFT" name="title" >
            </input>
            <button className="search__button" type="submit">SEARCH</button>
        </form>
    )
}
    
export default SearchForm;