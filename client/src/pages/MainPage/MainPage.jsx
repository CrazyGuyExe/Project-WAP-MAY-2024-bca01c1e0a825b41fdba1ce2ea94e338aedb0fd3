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
    return (
        <div className="bg-stone-700 h-screen" >
            <header className="bg-gray-50 shadow-sm">
                <div className="container mx-auto flex items-center justify-between p-4">
                    <nav className="flex space-x-4">
                    <h2 className="">
                    KnowPedia
                </h2>
                        <Link
                            to="/createarticle"
                            className="relative mr-1 inline-block rounded-md border border-transparent bg-gray-200 px-3 py-1 shadow-sm transition-colors duration-300 hover:bg-gray-600 hover:text-white"
                        >
                            Create Article
                        </Link>
                        <Link
                            to="/articles"
                            className="relative mr-1 inline-block rounded-md border border-transparent bg-gray-200 px-3 py-1 shadow-sm transition-colors duration-300 hover:bg-gray-600 hover:text-white"
                        >
                            Articles
                        </Link>
                        <Link
                            to="/search"
                            className="relative mr-1 inline-block rounded-md border border-transparent bg-gray-200 px-3 py-1 shadow-sm transition-colors duration-300 hover:bg-gray-600 hover:text-white"
                        >
                            Search Articles
                        </Link>
                    </nav>
                </div>
            </header>

            <div className="mx-auto mt-3 max-w-4xl rounded-md bg-gray-50 p-8">
             
               

                {randomArticle && (
                    <div className="p rounded-lg bg-gray-200 p-6 shadow-md">
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
                <footer className="mt-16 border-t border-gray-300 pt-4 font-medium">
                    <div className="flex justify-between text-gray-600">
                        <div>
                            <p className="text-2xl font-semibold  p-8 ml-44">
                                Our Free Encyclopedia
                            </p>
                        </div>
                        <div className="font-medium">
                            <div>
                                <p>Matěj Landa</p>
                                <p>Marek Kubelka</p>
                            </div>
                            <div>
                                <p>Dominick Correia</p>
                                <p>Vojta Vlček</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
   
}
