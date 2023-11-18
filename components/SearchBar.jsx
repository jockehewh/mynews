import React, { useState } from 'react'
import { useSelector } from 'react-redux' 
import styles from "@/styles/Navbar.module.css"

export default function SearchBar() {
  const articles = useSelector(state => state.news.value.mainArticles)
  const [found, setFound] = useState([])
  function searchArticles(e){
    let search = e.currentTarget.value
    let found = []
    articles.forEach(article =>{
      if(article.title.includes(search)){
        found.push(article)
      }
    })
    if(found.length > 5)
    found.length = 5
    setFound(found)
  }
  function navigate(url) {
     window.open(url, "_blank")
     }

  return (
    <div>
      <input list="search" type="text" className={styles.mysearch} placeholder='Search...' onChange={searchArticles} />
      <datalist id="search" role="listbox">
        {found.map((art, i) => {
          return <a href={art.url} target="_blank" key={i} onClick={() => { window.open(art.url, "_blank") }}>
            <option value={art.title}>{art.title}</option>
          </a> 
        })}
      </datalist>
    </div>
  )
}

/* 
https://newsapi.org/v2/everything?q=tech&searchIn=title&pageSize=10&sortBy=popularity&apiKey=57e20f764388443d9513de7fb3d03539
*/