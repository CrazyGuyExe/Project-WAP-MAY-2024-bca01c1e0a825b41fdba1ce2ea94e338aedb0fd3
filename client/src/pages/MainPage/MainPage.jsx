import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getRandomArticle } from '../../models/Article'
import ArticleLink from '../ArticleList/ArticleLink'

export default function MainPage() {
    const [randomArticle, setRandomArticle] = useState(null)

    useEffect(() => {
        async function fetchRandomArticle() {
            const result = await getRandomArticle()
            if (result.status === 200) {
                setRandomArticle(result.payload)
            }
        }

        fetchRandomArticle()
    }, [])

    const shorterText = (body, length = 100) => {
        if (body.length <= length) return body
        else return body.substring(0, length) + '...'
    }
    return (//gray box
        <div className=" mx-auto max-w-4xl p-8">  
            <h1 className="mb-8 text-center text-4xl font-bold">Lidl Pedia</h1>
            <div className="mb-8 flex justify-center space-x-4">
              
                <Link
                    to="/createarticle"
                    className="relative mr-2 inline-block rounded-md border border-transparent px-3 py-1 shadow-sm transition-colors duration-300 hover:bg-gray-400 hover:text-white"
                >
                    Create article
                </Link>
                <Link
                    to="/articles"
                    className="relative mr-2 inline-block rounded-md border border-transparent px-3 py-1 shadow-sm transition-colors duration-300 hover:bg-gray-400 hover:text-white"
                >
                    Articles
                </Link>
                <Link
                    to="/search"
                    className="relative mr-2 inline-block rounded-md border border-transparent px-3 py-1 shadow-sm transition-colors duration-300 hover:bg-gray-400 hover:text-white"
                >
                    Search Articles
                </Link>
            </div>

            {randomArticle && (
                <div className="rounded-lg bg-gray-100 p-6 shadow-md p ">
                    <h2 className="mb-4 text-2xl font-semibold">
                        Recommendation:
                    </h2>
                    <h3 className="mb-2 text-xl font-medium">
                        <ArticleLink {...randomArticle} />
                    </h3>
                    <p className="text-gray-700">
                        {shorterText(randomArticle.body)}
                    </p>
                </div>
            )}
        </div>
    )
}
