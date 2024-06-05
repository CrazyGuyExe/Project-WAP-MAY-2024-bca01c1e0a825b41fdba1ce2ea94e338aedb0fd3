import React, { useState, useEffect } from 'react';
import { searchArticlesByName } from '../../models/Article';
import ArticleLink from '../ArticleList/ArticleLink';
import { Link } from 'react-router-dom';

export default function SearchByNameArticle() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    const removeWhitespaceAndDiacritics = (text) => {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '');
    };

    const fetchArticles = async (term) => {
        try {
            const trimmedSearchTerm = removeWhitespaceAndDiacritics(searchTerm.toLowerCase());
            const response = await searchArticlesByName(trimmedSearchTerm);
            if (response.status === 200) {
                const articles = response.payload.filter(
                    (article) =>
                        article.name &&
                        removeWhitespaceAndDiacritics(article.name.toLowerCase()).includes(trimmedSearchTerm)
                );
                setSearchResults(articles);
                setLoaded(true);
            } else {
                console.error('Failed to fetch articles');
                setLoaded(null);
            }
        } catch (error) {
            console.error('Error while searching articles:', error);
            setLoaded(null);
        }
    };

    useEffect(() => {
        if (searchTerm) {
            fetchArticles(searchTerm);
        } else {
            setSearchResults([]);
            setLoaded(false);
        }
    }, [searchTerm]);

    return (

            <div className="mx-auto max-w-4xl p-4 bg-zinc-400 mt-3 rounded-md">
                <h1 className="mb-4 text-center text-4xl font-bold">Lidl Pedia</h1>
                <form className="mb-4 flex" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-grow rounded-l-md border border-gray-200 px-4 py-2 text-gray-700 placeholder-gray-500 shadow-sm focus:border-green-600 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="rounded-r-md bg-white px-4 py-2 text-black shadow-sm duration-300 hover:bg-green-600 hover:text-white"
                    >
                        Search
                    </button>
                </form>
                {isLoaded === null && (
                    <p className="text-center text-red-500">Articles not found</p>
                )}
                {isLoaded && searchResults.length > 0 ? (
                    <div>
                        <h2 className="mb-4 text-center text-2xl font-semibold">
                            Search Results:
                        </h2>
                        <div className="flex justify-center">
                            <ul className="space-y-4 w-auto rounded-lg bg-gray-100 p-6 text-center shadow-md">
                                {searchResults.map((article, index) => (
                                    <ArticleLink key={index} {...article} />
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : (
                    isLoaded && (
                        <p className="text-center text-gray-500">
                            No results found
                        </p>
                    )
                )}
                <Link
                    to={'/'}
                    className="bg-slate-50 relative mr-2 inline-block rounded-md border border-transparent px-3 py-1 shadow-sm transition-colors duration-300 hover:bg-red-500 hover:text-white"
                >
                    <p>Go back</p>
                </Link>
            </div>
    );
}
