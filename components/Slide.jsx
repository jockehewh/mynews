import React from 'react'
import style from '@/styles/Slide.module.css'
export default function Slide(props) {
  return (
    <a className={style.slide} href={props.article.url} target="_blank">
      <img src={props.article.urlToImage} alt={props.article.title} />
      <div className={style.details}> 
        <p>Published the <span>{new Intl.DateTimeFormat("us-US", {dateStyle: "medium"}).format(new Date(props.article.publishedAt))}</span></p>
        <h1>{props.article.title}</h1>
        <p>{props.article.content.split("[+")[0]}</p>
        <p>Author: {props.article.author}</p>
      </div>
    </a>
  )
}
