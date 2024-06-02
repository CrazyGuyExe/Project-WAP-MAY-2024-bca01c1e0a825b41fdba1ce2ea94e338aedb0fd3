import { Link } from 'react-router-dom'
import ArticleLink from './ArticleLink'
import { useState, useEffect } from 'react'
import { getArticles } from '../../models/Article'

export default function ArticleList() {
    const [articles, setArticles] = useState()
    const [isLoaded, setLoaded] = useState(false)

    const load = async () => {
        const data = await getArticles()
        if (data.status === 500 || data.status === 404) return setLoaded(null)
        if (data.status === 200) {
            setArticles(data.payload)
            setLoaded(true)
        }
    }

    useEffect(() => {
        load()
    }, [])

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
            <h1 className="text-center">Article list</h1>
            <div className="flex justify-center">
                <div className="p w-40 rounded-lg bg-gray-100 p-6 text-center shadow-md">
                    {articles.map((article, index) => (
                        <ArticleLink key={index} {...article} />
                    ))}
                </div>
            </div>

            <Link to={'/'}>
                <div className="flex justify-center">
                    <p className="p top-5 relative mr-2 inline-block rounded-md border border-transparent px-3 py-1 shadow-sm transition-colors duration-300 hover:bg-red-500 hover:text-white">
                        Go back
                    </p>
                </div>
            </Link>
        </>
    )
}
