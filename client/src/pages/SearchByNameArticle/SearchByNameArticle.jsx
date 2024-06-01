import React, { useState, useEffect } from "react";
import { searchArticlesByName } from "../../models/Article";
import ArticleLink from "../ArticleList/ArticleLink";
import { Link } from "react-router-dom";

export default function SearchByNameArticle() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await searchArticlesByName(searchTerm);
      if (response.status === 200) {
        const articles = response.payload.filter(
          (article) =>
            article.name &&
            article.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(articles);
        setLoaded(true);
      } else {
        console.error("Failed to fetch articles");
        setLoaded(null);
      }
    } catch (error) {
      console.error("Error while searching articles:", error);
      setLoaded(null);
    }
  };

  useEffect(() => {
    setSearchResults([]);
    setLoaded(false);
  }, [searchTerm]);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {isLoaded === null && <p>Articles not found</p>}
      {isLoaded && searchResults.length > 0 ? (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((article, index) => (
              <ArticleLink key={index} {...article} />
            ))}
          </ul>
        </div>
      ) : (
        isLoaded && <p>No results found</p>
      )}
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </div>
  );
}
