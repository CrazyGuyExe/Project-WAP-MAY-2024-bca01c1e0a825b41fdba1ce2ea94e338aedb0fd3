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
        <div className='mx-auto max-w-4xl  bg-zinc-400 mt-3 rounded-md '>
            <h1 className="text-center p-8 border-b border-black w-5/6 mx-auto">Article list</h1>
            <div className="flex justify-center">
                <div className="p w-80 rounded-lg bg-gray-100 p-6 text-center shadow-md m-6">
                    {articles.map((article, index) => (
                        <>
                        <ArticleLink key={index} {...article} />
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
            <div className='z-10 border-t border-black mt-20 flex justify-end w-5/6 mx-auto pb-10'>
            <div className=' pt-3 text-3xl mr-32'>
                <p>Our Free Encyclopedia</p>
            </div>
                <div>
            <p className='px-2 pt-3'>Matěj Landa </p>
            <p className='px-2 pt-2'>Marek Kubelka</p>
            </div> 
            <div>
            <p className='px-2 pt-3'>Dominick Correia</p>
            <p className='px-2 pt-2'>Vojta Vlček</p>
            </div>
           
            </div>
            </div>
            
        </>
    )
}
