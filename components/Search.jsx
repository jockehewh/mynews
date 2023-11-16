import React from 'react';
import styles from '../styles/Navbar.module.css';

const Search = () => {
    return (
        <div className={styles.search}>
            <form onsubmit="event.preventDefault();" role="search">
                <input id="search" type="search" placeholder="Search..." autofocus required />
            </form>
        </div>
    )
}

export default Search;