export const getArticles = async () => {
  const req = await fetch("http://localhost:3000/articles", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};
export const getArticle = async (id) => {
  const req = await fetch(`http://localhost:3000/articles/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};
export const createArticle = async (formData) => {
  const req = await fetch(`http://localhost:3000/articles`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formData),
  });
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};
export const updateArticle = async (id, formData) => {
  const req = await fetch(`http://localhost:3000/articles/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(formData),
  });
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};
export const deleteArticle = async (id) => {
  const req = await fetch(`http://localhost:3000/articles/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};



export const searchArticlesByName = async (searchTerm) => {
  let url = "http://localhost:3000/articles";
  if (searchTerm) {
    url += `?name=${searchTerm}`;
  }
  try {
    const req = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  } catch (error) {
    console.error("Error while searching articles:", error);
    return {
      status: 500,
      payload: null,
      msg: "Error while searching articles",
    };
  }
};

