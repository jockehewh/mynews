import React, {useState} from 'react';
import styles from '../styles/Navbar.module.css';
import { useSelector } from 'react-redux'

const Search = () => {
    const articles = useSelector(state => state.news.value.mainArticles)
    const [found, setFound] = useState([])
    function searchArticles(e) {
        let search = e.currentTarget.value
        console.log(search, articles)
        let found = []
        articles.forEach(article => {
            if (article.title.includes(search)) {
                found.push(article)
            }
        })
        found.length = 5
        console.log(found)
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