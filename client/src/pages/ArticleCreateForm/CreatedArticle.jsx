import { Link, useParams } from 'react-router-dom'

export default function CreatedArticle() {
    const { id } = useParams()

    return (
        <div className='bg-stone-700 h-screen pt-3'>
            <div className="mx-auto max-w-4xl p-8 bg-gray-50 rounded-md">
                <div className="mb-4 rounded-md bg-gray-200 p-4 shadow-md">
                    <p className="mb-2 text-xl font-semibold"> Created article: {id}
                    </p>
                    <Link
                        to="/"
                        className="inline-block rounded-md border border-transparent bg-slate-50 px-3 py-2 shadow-sm transition-colors duration-300 hover:bg-red-500 hover:text-white"
                    >
                        <p className="text-center">Go home</p>
                    </Link>
                    <Link
                        to={`/article/${id}`}
                        className="mb-2 inline-block rounded-md border border-transparent bg-slate-50 px-3 py-2 shadow-sm transition-colors duration-300 hover:bg-green-500 hover:text-white"
                    >
                        <p className="text-center">View article</p>
                    </Link>
                   
                </div>
            </div>
        </div>
    )
}
