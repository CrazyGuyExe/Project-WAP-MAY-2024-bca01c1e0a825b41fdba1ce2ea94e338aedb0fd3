import { Link, useParams, useNavigate } from 'react-router-dom'
import { getArticle, deleteArticle } from '../../models/Article'
import { useState, useEffect } from 'react'

export default function ArticleView() {
    const { id } = useParams()
    const [article, setArticle] = useState()
    const [isLoaded, setLoaded] = useState(false)
    const [info, setInfo] = useState()
    const [formData, setFormData] = useState()
    const navigate = useNavigate()

    const load = async () => {
        const data = await getArticle(id)
        if (data.status === 500 || data.status === 404) return setLoaded(null)
        if (data.status === 200) {
            setArticle(data.payload)
            setLoaded(true)
        }
    }

    useEffect(() => {
        load()
    }, [])

    const handleChange = (e) => {
        setFormData(e.target.value)
    }

    const handlePost = (e) => {
        e.preventDefault()
        postForm()
    }

    const postForm = async () => {
        const updatedFormData = { ...formData, date: new Date().toISOString() }
        const article = await updateArticle(id, updatedFormData)
        if (article.status === 200) {
            navigate(`/article/${id}`)
        } else {
            setInfo(article.msg)
        }
    }

    const handleDelete = async () => {
        const res = await deleteArticle(id)
        if (res.status === 500) return setInfo(res.msg)
        if (res.status === 200) {
            setInfo(res.msg)
            navigate('/articles')
        }
    }

    if (isLoaded === null)
        return (
            <div>
                <h1>Article was not found</h1>
                <Link to={'/'}>
                    <p>Go back</p>
                </Link>
            </div>
        )

    if (!isLoaded) return <h1>Loading article...</h1>

    return (
        <div className="container mx-auto p-6">
            <div className="rounded-lg bg-white p-6 shadow">
                <h1>{article.name}</h1>
                <h2>{article.heading}</h2>
                <p>{article.body}</p>
                <h2>{article.heading2}</h2>
                <p>{article.body2}</p>
                <div
                    dangerouslySetInnerHTML={{ __html: article.content }}
                    
                />
                <p className="mb-2 text-sm text-gray-600"></p>
                <div className="mb-2 text-sm text-gray-600">
                    <p>Reference: {article.reference}</p>
                    <p>Author: {article.author}</p>
                    <p>Last Edited: {article.date}</p>
                </div>
                <div className="mt-6 flex space-x-4">
                    <Link
                        to={'/'}
                        className="rounded bg-white px-4 py-2 shadow-sm transition-colors duration-300 hover:bg-red-500 hover:text-white"
                    >
                        Go back
                    </Link>
                    <Link
                        to={`/updatearticle/${id}`}
                        className="rounded bg-white px-4 py-2 shadow-sm transition-colors duration-300 hover:bg-green-500 hover:text-white"
                    >
                        Update article
                    </Link>
                </div>
            </div>
        </div>
    )
}
