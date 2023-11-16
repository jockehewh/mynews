import React from "react";
import styles from "@/styles/Article.module.css";

const FavArticle = (props) => {
  const dateStyle = { color: "grey", fontSize: "small" };
  const imgStyle = { borderRadius: "10px" };

  return (
    <>
      <div className={styles.ArticleContainer}>
        <div style={imgStyle}>
          <img src={props.favoris.urlToImage} alt="Illustration" />
        </div>
        <div>
          <p>
            Tech <span style={dateStyle}>{new Intl.DateTimeFormat("us-US", { dateStyle: "medium" }).format(new Date(props.favoris.publishedAt))}</span>
          </p>
        </div>
        <h2>{props.favoris.title}</h2>
        <p className={styles.Article}>
          {props.favoris.content.split("[+")[0]}
        </p>
        <h3>Author: {props.favoris.author}</h3>
      </div>
    </>
  );
};

export default FavArticle;
