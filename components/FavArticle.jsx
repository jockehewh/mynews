import React from "react";
import styles from "@/styles/Article.module.css";
import { deleteFavorites } from "@/reducers/news";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { FaHeart, FaTrash } from 'react-icons/fa';

const FavArticle = (props) => {
  const dispatch = useDispatch()
  const dateStyle = { color: "grey", fontSize: "small" };
  const imgStyle = { width: "100%", height: "100%", borderRadius: "10px" };

function deleteFav(e){
  //CREER LE BOUTON EN SUIVANT LE MODEL DE ADAM
  dispatch(deleteFavorites(props.favoris.title))
}
  return (
    <>
      <div className={styles.ArticleContainer} style={{border: "solid 1px"}}>
        <div>
          <Link href={props.favoris.url} target="_blank">
          <img style={imgStyle} src={props.favoris.urlToImage} alt="Illustration" />
          </Link>
        </div>
        <div className={styles.Info}>
          <p>
            Published by : {props.favoris.author}
            <span style={dateStyle}> Date : {new Intl.DateTimeFormat("us-US", { dateStyle: "medium" }).format(new Date(props.favoris.publishedAt))}</span>
          </p>
        </div>
        <h2>{props.favoris.title}</h2>
        <p className={styles.Article}>
          {props.favoris.description}
        </p>
        <FaTrash style={{ fontSize: "40px", cursor: "pointer", alignSelf: "center" }} onClick={deleteFav}/>
      </div>
    </>
  );
};

export default FavArticle;
