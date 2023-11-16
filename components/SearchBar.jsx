import React, { useState } from 'react'
import { useSelector } from 'react-redux' 

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
      <input list="search" type="text" onChange={searchArticles}/>
      <datalist id="search">
        {found.map((art, i)=>{
          return <option value={art.title}>{art.title}</option>
        })}
      </datalist>
    </div>
  )
}
