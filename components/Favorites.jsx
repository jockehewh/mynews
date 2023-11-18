import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FavArticle from "./FavArticle"

export default function Favorites() {
  const dispatch = useDispatch()
  const trending = useSelector(state => state.news.value.favorites)
  const [trendy, setTrendy] = useState([])
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>{trending.map((fav, i)=>{
      return <FavArticle key={i} favoris={fav}/>
    })}</div>
  )
}
