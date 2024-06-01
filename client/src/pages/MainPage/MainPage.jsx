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
          <ArticleLink {...randomArticle} />
        </div>
      )}
    </div>
  );
}
