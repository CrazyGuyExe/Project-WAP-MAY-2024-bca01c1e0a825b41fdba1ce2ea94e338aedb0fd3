import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateArticle, getArticle } from "../../models/Article";

export default function ArticleUpdateForm() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState("");
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const load = async () => {
    const data = await getArticle(id);
    if (data.status === 500 || data.status === 404) {
      setLoaded(null);
    } else if (data.status === 200) {
      setArticle(data.payload);
      setFormData(data.payload); // Initialize formData with article data
      setLoaded(true);
    }
  };

  const postForm = async () => {
    try {
      const updatedFormData = { ...formData, date: new Date().toISOString() };
      console.log("Form data before sending:", updatedFormData);
      const article = await updateArticle(id, updatedFormData);
      if (article.status === 200) {
        navigate(`/article/${id}`);
      } else {
        setInfo(article.msg);
      }
    } catch (error) {
      console.error("Error updating article:", error);
      setInfo("Failed to update article");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return <p>Article not found</p>;
  }

  if (!isLoaded) {
    return <p>Article is loading...</p>;
  }

  return (
    <>
      <h1>Article update form</h1>
      <p>{id}</p>
      <form>
        <input
          type="text"
          value={formData.name || ""}
          name="name"
          required
          placeholder="Enter Article name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={formData.heading || ""}
          name="heading"
          required
          placeholder="Enter heading"
          onChange={handleChange}
        />
        <input
          type="text"
          value={formData.body || ""}
          name="body"
          required
          placeholder="Enter text"
          onChange={handleChange}
        />
        <input
          type="text"
          value={formData.heading2 || ""}
          name="heading2"
          placeholder="Enter heading (not required)"
          onChange={handleChange}
        />
        <input
          type="text"
          value={formData.body2 || ""}
          name="body2"
          placeholder="Enter text (not required)"
          onChange={handleChange}
        />
        <input
          type="text"
          value={formData.reference || ""}
          name="reference"
          placeholder="Enter reference (not required)"
          onChange={handleChange}
        />
        <input
          type="text"
          value={formData.content || ""}
          name="content"
          placeholder="Paste your HTML here"
          onChange={handleChange}
        />
        <input
          type="text"
          value={formData.author || ""}
          name="author"
          required
          placeholder="Enter author name"
          onChange={handleChange}
        />
        <button onClick={handlePost}>Update article</button>
      </form>
      {info && <p>{info}</p>}
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
