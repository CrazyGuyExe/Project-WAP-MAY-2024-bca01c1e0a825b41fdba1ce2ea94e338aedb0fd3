import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import About from "./About/About";
import ArticleCreateForm from "./ArticleCreateForm/ArticleCreateForm";
import ArticleUpdateForm from "./ArticleUpdateForm/ArticleUpdateForm";
import ArticleView from "./ArticleView/ArticleView";
import ArticleList from "./ArticleList/ArticleList";
import CreatedArticle from "./ArticleCreateForm/CreatedArticle";
import SearchByNameArticle from "./SearchByNameArticle/SearchByNameArticle";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/createarticle" element={<ArticleCreateForm />} />
          <Route path="/updatearticle/:id" element={<ArticleUpdateForm />} />
          <Route path="/article/:id" element={<ArticleView />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/createdarticle/:id" element={<CreatedArticle />} />
          <Route path="/search" element={<SearchByNameArticle />} /> {/* Přidáme cestu pro vyhledávání */}
        </Routes>
      </BrowserRouter>
    </>
  );
}