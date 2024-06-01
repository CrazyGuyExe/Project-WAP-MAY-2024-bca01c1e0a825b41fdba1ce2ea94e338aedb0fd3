import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomArticle } from "../../models/Article";
import ArticleLink from "../ArticleList/ArticleLink";

export default function MainPage() {
  const [randomArticle, setRandomArticle] = useState(null);

  useEffect(() => {
    async function fetchRandomArticle() {
      const result = await getRandomArticle();
      if (result.status === 200) {
        setRandomArticle(result.payload);
      }
    }

    fetchRandomArticle();
  }, []);

  const shorterText = (body, length = 100) => {
    if (body.length <= length) return body;
    else return body.substring(0, length) + "...";
  };
  return (
    <div className="mainPage">
      <h1>Main page</h1>
      <Link to={"/createarticle"}>
        <p>Create article</p>
      </Link>
      <Link to={"/articles"}>
        <p>Articles</p>
      </Link>
      <Link to="/search">Search Articles</Link>

      {randomArticle && (
        <div className="randomArticle">
          <h2>Recommendation:</h2>
          <h3>
            <ArticleLink {...randomArticle} />
          </h3>
          <p>{shorterText(randomArticle.body)}</p>
        </div>
      )}
    </div>
  );
}
