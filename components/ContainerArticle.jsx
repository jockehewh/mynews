import React, { useEffect, useState } from "react";
import Article from "./Article";
import styles from "@/styles/ContainerArticle.module.css";
import { useSelector } from "react-redux";

export default function ContainerArticle() {
  const containerStyle = { display: "flex", flexWrap: "wrap" };

  const data = useSelector((state) => state.news.value.mainArticles);

  let [allArticles, setallArticles] = useState([]);
  let [displayArticles, setdisplayArticles] = useState([]);
  let [firstArticle, setFirstArticle] = useState(0);
  let [lastArticle, setLastArticle] = useState(10);

  return (
    <div className={styles.container}>
      {data.map((el, i) => {
        return <Article article={el} key={i} />;
      })}
    </div>
  );
}
