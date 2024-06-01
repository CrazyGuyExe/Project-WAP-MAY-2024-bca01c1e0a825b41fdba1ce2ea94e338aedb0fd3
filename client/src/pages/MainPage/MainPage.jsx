import { Link } from 'react-router-dom'

export default function MainPage() {
    return (
        <>
            <div className="mx-auto my-auto mt-2 max-w-6xl bg-slate-100">
                <h1 className="pt-6 text-center">Lidlpedia</h1>
                <div className="pb-5 pt-8 text-center">
                    <p className=" ">
                        Welcome to Lidlpedia our free encyclopedia
                    </p>
                    <p className="">
                        Here you can find, update or create articles about any
                        theme you want
                    </p>
                </div>
                <div className="mx-auto max-w-5xl p-2">
                    <Link to={'/createarticle'}>
                        <p className="mb-3 border-4 border-gray-600 bg-slate-400 p-3 text-center text-2xl font-semibold">
                            Create article
                        </p>
                    </Link>
                    <div className="flex space-x-28">
                        <Link
                            className="w-full max-w-md border-2 border-gray-600 bg-slate-400 text-center text-2xl font-semibold"
                            to={'/articles'}
                        >
                            Articles
                        </Link>
                        <Link
                            className="w-full max-w-md border-2 border-gray-600 bg-slate-400 text-center text-2xl font-semibold"
                            to="/search"
                        >
                            Search Articles
                        </Link>
                    </div>
                    <p></p>
                </div>
            </div>
        </>
    )
}
