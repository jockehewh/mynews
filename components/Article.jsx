import React from "react";
import styles from "@/styles/Article.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../reducers/news";
import Link from "next/link";
import { FaHeart } from 'react-icons/fa';

const Article = (props) => {
  const dateStyle = { color: "grey", fontSize: "small" };
  const imgStyle = { width: "100%", height: "100%", borderRadius: "10px" };
  const bookmarkStyle = { width: "15px", height: "15px" };
  const buttonStyle = { width: "100%" };
  const dispatch = useDispatch();

  function saveFavorite(e){
    dispatch(setFavorites(props.article))
    e.currentTarget.remove()
  }

  return (
    <>
      <div className={styles.ArticleContainer} style={{border: "solid 1px"}}>
        <div className={styles.imgStyle}>
          <Link href={props.article.url} target="_blank">
            <img
              src={props.article.urlToImage}
              alt="Illustration"
              style={imgStyle}
            />
          </Link>
        </div>
        <div className={styles.Info}>
          <p>
            Published by : {props.article.author}
            <span style={dateStyle}> Date : {new Intl.DateTimeFormat("us-US", { dateStyle: "medium" }).format(new Date(props.article.publishedAt))}</span>
          </p>

          <h2>{props.article.title}</h2>
        </div>
        <p className={styles.Article}>{props.article.description}</p>
        <FaHeart style={{ fontSize: "40px", cursor: "pointer", alignSelf: "center" }} onClick={saveFavorite} />
      </div>
    </>
  );
};

export default Article;
