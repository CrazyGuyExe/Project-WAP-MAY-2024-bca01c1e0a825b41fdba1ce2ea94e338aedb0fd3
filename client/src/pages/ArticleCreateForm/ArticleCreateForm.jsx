import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { createArticle } from '../../models/Article'

export default function ArticleCreateForm() {
    const [formData, setFormData] = useState()
    const [info, setInfo] = useState()
    const navigate = useNavigate()

    const postForm = async () => {
        const article = await createArticle(formData)
        if (article.status === 201) {
            redirectToSuccessPage(article.payload._id)
        } else {
            setInfo(article.msg)
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handlePost = (e) => {
        e.preventDefault()
        postForm()
    }

    const redirectToSuccessPage = (id) => {
        return navigate(`/createdarticle/${id}`)
    }

    return (
        <>
            <h1 className="p-10 text-center">Article create form</h1>
            <form className="">
                <div className="flex items-center justify-center">
                    <p className="b mr-2">Article name:</p>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter Article Name"
                        onChange={(e) => handleChange(e)}
                        className="rounded-md border-2 border-gray-200 px-3 py-2 text-gray-700 placeholder-gray-500 focus:border-green-600 focus:outline-none"
                    />
                </div>

                <br></br>
                <div className="flex items-center justify-center">
                    <p className="mr-2">Header name:</p>
                    <input
                        type="text"
                        name="heading"
                        required
                        placeholder="Enter Header Name"
                        onChange={(e) => handleChange(e)}
                        className="rounded-md border-2 border-gray-200 px-3 py-2 text-gray-700 placeholder-gray-500 focus:border-green-600 focus:outline-none"
                    />
                </div>
                <br></br>
                <div className="flex items-center justify-center">
                    <p className="mr-2">Article name:</p>
                    <input
                        type="text"
                        name="body"
                        required
                        placeholder="Enter text"
                        onChange={(e) => handleChange(e)}
                        className="rounded-md border-2 border-gray-200 px-3 py-2 text-gray-700 placeholder-gray-500 focus:border-green-600 focus:outline-none"
                    />
                </div>

                <br></br>
                <div className="flex items-center justify-center">
                    <p className="mr-2">Article name:</p>
                    <input
                        type="text"
                        name="heading2"
                        required
                        placeholder="Enter heading (not required)"
                        onChange={(e) => handleChange(e)}
                        className="rounded-md border-2 border-gray-200 px-3 py-2 text-gray-700 placeholder-gray-500 focus:border-green-600 focus:outline-none"
                    />
                </div>

                <br></br>
                <div className="flex items-center justify-center">
                    <p className="mr-2">Article name:</p>
                    <textarea
                        type="text"
                        name="body2"
                        required
                        placeholder="Enter text (not required)"
                        onChange={(e) => handleChange(e)}
                        className="rounded-md border-2 border-gray-200 px-3 py-2 text-gray-700 placeholder-gray-500 focus:border-green-600 focus:outline-none"
                    />
                </div>

                <br></br>
                <div className="flex items-center justify-center">
                    <p className="mr-2">Article name:</p>
                    <textarea
                        type="text"
                        name="reference"
                        required
                        placeholder="Enter references (not required)"
                        onChange={(e) => handleChange(e)}
                        className="rounded-md border-2 border-gray-200 px-3 py-2 text-gray-700 placeholder-gray-500 focus:border-green-600 focus:outline-none"
                    />
                </div>

                <br></br>
                <div className="flex items-center justify-center">
                    <p className="mr-2">Article name:</p>
                    <textarea
                        type="text"
                        name="content"
                        required
                        placeholder="Article content (HTML)"
                        onChange={(e) => handleChange(e)}
                        className="rounded-md border-2 border-gray-200 px-3 py-2 text-gray-700 placeholder-gray-500 focus:border-green-600 focus:outline-none"
                    />
                </div>

                <br></br>
                <div className="flex items-center justify-center">
                    <p className="mr-2">Article name:</p>
                    <input
                        type="text"
                        name="author"
                        required
                        placeholder="Enter author name"
                        onChange={(e) => handleChange(e)}
                        className="rounded-md border-2 border-gray-200 px-3 py-2 text-gray-700 placeholder-gray-500 focus:border-green-600 focus:outline-none"
                    />
                </div>

                <br></br>
                <div className="flex items-center justify-center">
                    <button
                        className='shadow-lg relative mr-2 inline-block px-3 py-1 rounded-md border border-transparent transition-colors duration-300 hover:bg-green-500  hover:text-white'
                        onClick={handlePost}
                    >
                        Create Article
                    </button>{' '}
                </div>
            </form>
            <Link to={'/'}>
                <p className='shadow-lg relative mr-2 inline-block px-3 py-1 rounded-md border border-transparent transition-colors duration-300 hover:bg-red-500  hover:text-white '>Go back</p>
            </Link>
        </>
    )
}
