import React from "react";
import styles from "@/styles/Article.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../reducers/news";
import Link from "next/link";

const Article = (props) => {
  console.log("===========", props);
  const dateStyle = { color: "grey", fontSize: "small" };
  const imgStyle = { width: "100%", height: "100%", borderRadius: "10px" };
  const bookmarkStyle = { width: "15px", height: "15px" };
  const buttonStyle = { width: "100%" };
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.ArticleContainer}>
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
            <span style={dateStyle}> Date : {props.article.publishedAt}</span>
          </p>

          <h2>{props.article.title}</h2>
        </div>
        <p className={styles.Article}>{props.article.description}</p>
        <button
          style={buttonStyle}
          // onClick={dispatch(setFavorites(props.article))}
        >
          <img src="/bookmark.png" style={bookmarkStyle} />
        </button>
      </div>
    </>
  );
};

export default Article;
