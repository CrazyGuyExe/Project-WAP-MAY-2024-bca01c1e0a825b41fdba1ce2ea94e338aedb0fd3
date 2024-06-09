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
        <div className='bg-stone-700 h-screen pt-3'>
        <div className='mx-auto max-w-4xl  bg-gray-50  rounded-md '>
            <h1 className="text-center p-8 border-b border-black w-5/6 mx-auto">Article list</h1>
            <div className="flex justify-center">
                <div className="p w-80 rounded-lg bg-gray-100 p-6 text-center shadow-md m-6">
                    {articles.map((article, index) => (
                        <>
                        <div className="rounded bg-gray-300 px-4 py-2 shadow-sm transition-colors duration-300 hover:bg-white"> <ArticleLink key={index} {...article} /></div>                       
                        <br></br>
                        </>
                    ))}
                </div>  
            </div>

            <Link to={'/'}>
                <div className="flex justify-center">
                    <p className=" text-slate-50 bg-gray-600 p top-5 relative mr-2 inline-block rounded-md border border-transparent px-3 py-1 shadow-sm transition-colors duration-300 hover:bg-red-500 hover:text-white">
                        Go back
                    </p>
                </div>
            </Link>
            <footer className="border-t border-gray-300 mt-16 pt-4 font-medium w-5/6 mx-auto">
                <div className="flex justify-between text-gray-600">
                    <div>
                        <p className="text-2xl font-semibold  p-6 ml-44">Our Free Encyclopedia</p>
                    </div>
                    <div className="font-medium pb-4">
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
