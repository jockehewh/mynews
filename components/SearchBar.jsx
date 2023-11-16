import React, { useState } from 'react'
import { useSelector } from 'react-redux' 
import styles from "@/styles/Navbar.module.css"

export default function SearchBar() {
  const articles = useSelector(state => state.news.value.mainArticles)
  const [found, setFound] = useState([])
  function searchArticles(e){
    let search = e.currentTarget.value
    console.log(search, articles)
    let found = []
    articles.forEach(article =>{
      if(article.title.includes(search)){
        found.push(article)
      }
    })
    found.length = 5
    console.log(found)
    setFound(found)
  }
  return (
    <div>
      <input list="search" type="text" className={styles.mysearch} onChange={searchArticles}/>
      <datalist id="search">
        {found.map((art, i)=>{
          return <a href={art.url} target='_blank'><option value={art.title}>{art.title}</option></a> 
        })}
      </datalist>
    </div>
  )
}
