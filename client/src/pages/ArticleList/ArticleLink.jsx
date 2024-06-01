import { Link } from "react-router-dom"

export default function ConsoleLink(props) {
   
    return (
        <>
            <Link to={`/article/${props._id}`}>
                <p>{props.name}</p>
            </Link>
        </>
    )
}