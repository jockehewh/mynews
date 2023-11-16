import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '@/reducers/news';
import FavArticle from "./FavArticle"

export default function Favorites() {
  const dispatch = useDispatch()
  const trending = useSelector(state => state.news.value.favorites)
  const [trendy, setTrendy] = useState([])
  return (
    <div>{trending.map((fav, i)=>{
      return <FavArticle key={i} favoris={fav}/>
    })}</div>
  )
}
