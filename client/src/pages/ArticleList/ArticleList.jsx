import { Link } from "react-router-dom";
import ArticleLink from "./ArticleLink";
import { useState, useEffect } from "react";
import { getArticles } from "../../models/Article";

export default function ArticleList() {
  const [articles, setArticles] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getArticles();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setArticles(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Articles not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Articles are loading...</p>
      </>
    )
  }

  return (
    <>
      <h1>Article list</h1>
      {
        articles.map((article, index) => (
          <ArticleLink key={index} {...article} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
