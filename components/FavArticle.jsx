import React from "react";
import styles from "@/styles/Article.module.css";
import { deleteFavorites } from "@/reducers/news";
import { useDispatch } from "react-redux";

const FavArticle = (props) => {
  const dispatch = useDispatch()
  const dateStyle = { color: "grey", fontSize: "small" };
  const imgStyle = { borderRadius: "10px" };

function deleteFav(){
  //CREER LE BOUTON EN SUIVANT LE MODEL DE ADAM
  dispatch(deleteFavorites(props.favoris.title))
}
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
