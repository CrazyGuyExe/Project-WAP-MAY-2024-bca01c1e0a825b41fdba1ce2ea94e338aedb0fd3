import { Link, useParams } from "react-router-dom";

export default function CreatedArticle() {
  const { id } = useParams();  

  return (
    <>
      <p>Created article: { id }</p>
      <Link to={`/article/${id}`}>
        <p>View article</p>
      </Link>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
