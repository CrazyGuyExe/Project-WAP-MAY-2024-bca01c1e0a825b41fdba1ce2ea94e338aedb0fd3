import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createArticle } from "../../models/Article";

export default function ArticleCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const article = await createArticle(formData);
    if (article.status === 201) {
      redirectToSuccessPage(article.payload._id);
    } else {
      setInfo(article.msg);
    }
  }
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  
  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  }

  const redirectToSuccessPage = (id) => {
    return navigate(`/createdarticle/${id}`)
  }

  return (
    <>
      <h1>Article create form</h1>
      <form>
        <input type="text" name="name" required placeholder="Enter Article name" onChange={e => handleChange(e)}/>
        <br></br>
        <input type="text" name="heading" required placeholder="Enter heading" onChange={e => handleChange(e)}/>
        <br></br>
        <textarea type="text" name="body" required placeholder="Enter text" onChange={e => handleChange(e)}/>
        <br></br>
        <input type="text" name="heading2" required placeholder="Enter heading (not required)" onChange={e => handleChange(e)}/>
        <br></br>
        <textarea type="text" name="body2" required placeholder="Enter text (not required)" onChange={e => handleChange(e)}/>
        <br></br>
        <input type="text" name="reference" required placeholder="Enter references (not required)" onChange={e => handleChange(e)}/>
        <br></br>
        <textarea type="text" name="content" required placeholder="Article content (HTML)" onChange={e => handleChange(e)} />
        <br></br>
        <input type="text" name="author" required placeholder="Enter author name" onChange={e => handleChange(e)}/>
        <br></br>
        <button onClick={handlePost}>
          Create Article
        </button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
