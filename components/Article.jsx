import React from "react";
import styles from "@/styles/Article.module.css";

const article = () => {
  const dateStyle = { color: "grey", fontSize: "small" };
  const imgStyle = { borderRadius: "10px" };

  return (
    <>
      <div className={styles.ArticleContainer}>
        <div style={imgStyle}>
          <img src="/blank.png" alt="Illustration" />
        </div>
        <div>
          <p>
            Subject <span style={dateStyle}>Date</span>
          </p>
        </div>
        <h2>Title</h2>
        <h4>Hook Sentence</h4>
        <p className={styles.Article}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
        <h3>Author</h3>
      </div>
    </>
  );
};

export default article;
