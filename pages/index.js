import Slider from '@/components/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { setTrendingArticles, setMainArticles } from '@/reducers/news';
import { useEffect, useState } from 'react';
import Article  from "../components/Article"
import Navbar  from "../components/Navbar"
export default function Home() {
  const [trendings, setTrendings] = useState([])
  const dispatch = useDispatch()
  useEffect(()=>{
    fetch("https://newsapi.org/v2/everything?q=tech&apiKey=57e20f764388443d9513de7fb3d03539")
      .then(res => res.json())
      .then(data => data.articles)
      .then(articles => {
        let trending = []
        trending.push(articles.shift())
        trending.push(articles.shift())
        trending.push(articles.shift())
        trending.push(articles.shift())
        dispatch(setTrendingArticles(trending))
        dispatch(setMainArticles(articles))
        setTrendings([...trending])
      })
  }, [])
  return (
    <>
    <Navbar/>
    <Slider/>
    <Article/>
    </>
  )
}
