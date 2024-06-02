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

    return (//setter max width
       <> 
    <div className=" max-w-3xl mx-auto p-8  bg-zinc-400 mt-3 rounded-md">
        <h1 className="text-center text-2xl font-semibold mb-6">Article Create Form</h1>
        <form>
            <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center">
                    <p className="w-40 rounded-md border border-gray-700 bg-gray-200 px-3 py-2 text-center font-semibold text-gray-700">
                        Article name:
                    </p>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter Article Name"
                        onChange={(e) => handleChange(e)}
                        className="flex-1 ml-4 rounded-md border-2 border-gray-200 px-3 py-2 text-gray-700 placeholder-gray-500 focus:border-green-600 focus:outline-none"
                    />
                </div>

                <div className="flex items-center">
                    <p className="w-40 rounded-md border border-gray-700 bg-gray-200 px-3 py-2 text-center font-semibold text-gray-700">
                        Header name:
                    </p>
                    <input
                        type="text"
                        name="heading"
                        required
                        placeholder="Enter Header Name"
                        onChange={(e) => handleChange(e)}
                        className="flex-1 ml-4 rounded-md border-2 border-gray-200 px-3 py-2 text-gray-700 placeholder-gray-500 focus:border-green-600 focus:outline-none"
                    />
                </div>

                <div className="flex items-center">
                    <p className="w-40 rounded-md border border-gray-700 bg-gray-200 px-3 py-2 text-center font-semibold text-gray-700">
                        Text:
                    </p>
                    <input
                        type="text"
                        name="body"
                        required
                        placeholder="Enter text"
                        onChange={(e) => handleChange(e)}
                        className="flex-1 ml-4 rounded-md border-2 border-gray-200 px-3 py-2 text-gray-700 placeholder-gray-500 focus:border-green-600 focus:outline-none"
                    />
                </div>

                <div className="flex items-center">
                    <p className="w-40 rounded-md border border-gray-700 bg-gray-200 px-3 py-2 text-center font-semibold text-gray-700">
                        Header 2:
                    </p>
                    <input
                        type="text"
                        name="heading2"
                        required
                        placeholder="Enter heading (not required)"
                        onChange={(e) => handleChange(e)}
                        className="flex-1 ml-4 rounded-md border-2 border-gray-200 px-3 py-2 text-gray-700 placeholder-gray-500 focus:border-green-600 focus:outline-none"
                    />
                </div>

                <div className="flex items-center">
                    <p className="w-40 rounded-md border border-gray-700 bg-gray-200 px-3 py-2 text-center font-semibold text-gray-700">
                        Text:
                    </p>
                    <textarea
                        name="body2"
                        required
                        placeholder="Enter text (not required)"
                        onChange={(e) => handleChange(e)}
                        className="flex-1 ml-4 rounded-md border-2 border-gray-200 px-3 py-2 text-gray-700 placeholder-gray-500 focus:border-green-600 focus:outline-none"
                    />
                </div>

                <div className="flex items-center">
                    <p className="w-40 rounded-md border border-gray-700 bg-gray-200 px-3 py-2 text-center font-semibold text-gray-700">
                        Reference:
                    </p>
                    <textarea
                        name="reference"
                        required
                        placeholder="Enter references (not required)"
                        onChange={(e) => handleChange(e)}
                        className="flex-1 ml-4 rounded-md border-2 border-gray-200 px-3 py-2 text-gray-700 placeholder-gray-500 focus:border-green-600 focus:outline-none"
                    />
                </div>

                <div className="flex items-center">
                    <p className="w-40 rounded-md border border-gray-700 bg-gray-200 px-3 py-2 text-center font-semibold text-gray-700">
                        Content:
                    </p>
                    <textarea
                        name="content"
                        required
                        placeholder="Article content (HTML)"
                        onChange={(e) => handleChange(e)}
                        className="flex-1 ml-4 rounded-md border-2 border-gray-200 px-3 py-2 text-gray-700 placeholder-gray-500 focus:border-green-600 focus:outline-none"
                    />
                </div>

                <div className="flex items-center">
                    <p className="w-40 rounded-md border border-gray-700 bg-gray-200 px-3 py-2 text-center font-semibold text-gray-700">
                        Author:
                    </p>
                    <input
                        type="text"
                        name="author"
                        required
                        placeholder="Enter author name"
                        onChange={(e) => handleChange(e)}
                        className="flex-1 ml-4 rounded-md border-2 border-gray-200 px-3 py-2 text-gray-700 placeholder-gray-500 focus:border-green-600 focus:outline-none"
                    />
                </div>

                <div className="flex justify-center mt-6">
                    <button
                        type="button"
                        className=" bg-slate-50 relative mr-2 inline-block rounded-md border border-transparent px-3 py-1 shadow-sm transition-colors duration-300 hover:bg-green-500 hover:text-white"
                        onClick={handlePost}
                    >
                        Create Article
                    </button>
                </div>
            </div>
        </form>
        <div className="flex justify-center mt-4">
            <Link to="/">
                <p className=" bg-slate-50 relative mr-2 inline-block rounded-md border border-transparent px-3 py-1 shadow-sm transition-colors duration-300 hover:bg-red-500 hover:text-white">
                    Go back
                </p>
            </Link>
        </div>
    </div>
</>

    )
}
