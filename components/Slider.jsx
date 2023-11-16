import React from 'react'
import styles from '@/styles/Slider.module.css'
import Slide from "./Slide"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector } from 'react-redux';
export default function Slider(props) {
  const trending = useSelector(state => state.news.value.trendingArticles)
  return (
    <div className = {styles.trending} >
      <h1 style={{margin: "20px 0"}}>Trending</h1>
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        className={styles.mySwiper}
      >
        {trending.map((art, i) => {
          return <Slide key={i} article={art} />
        })}
      </Carousel>
      
  </div>)
}
