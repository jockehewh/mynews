import React, {useState} from 'react';
import styles from '../styles/Navbar.module.css';
import { useSelector } from 'react-redux'

const Search = () => {
    const articles = useSelector(state => state.news.value.mainArticles)
    const [found, setFound] = useState([])
    function searchArticles(e) {
        let search = e.currentTarget.value
        let found = []
        articles.forEach(article => {
            if (article.title.includes(search)) {
                found.push(article)
            }
        })
        if(found.length > 5)
        found.length = 5
        setFound(found)
    }
    return (
        <div className={""/* styles.search */}>
            <input type="text" list="search" placeholder="Search..." onChange={searchArticles} />
            <datalist id="search">
                {found.map((art, i) => {
                    return <option value={art.title}>{art.title}</option>
                })}
            </datalist>
        </div>
    )
}

export default Search;