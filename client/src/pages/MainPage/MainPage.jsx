
import { Link } from 'react-router-dom'

export default function MainPage() {
    return (
        <>
            <div className="max-w-5xl mx-auto">
                <h1 className="pt-6 text-center">Lidlpedia</h1>
                <div className=" text-center">
                  <p className="p-8 ">Welcome to Lidlpedia our free encyclopedia</p>
                </div>
                <Link to={'/createarticle'}>
                    <p className='border-2 border-gray-600 bg-slate-400' >Create article</p>
                </Link>
                <Link to={'/articles'}>
                    <p>Articles</p>
                </Link>
                <Link to="/search">Search Articles</Link>
            </div>
        </>
    )
}
