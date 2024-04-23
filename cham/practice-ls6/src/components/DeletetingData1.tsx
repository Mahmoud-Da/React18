import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Posts {
  id: number;
  title: string;
  body: string;
}

const DeletetingData1 = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const deletePosts = (post: Posts) => {
    const originalPosts = [...posts];
    setPosts(posts.filter((po) => po.id != post.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/posts" + post.id)
      .catch((err) => {
        setError(err);
        setPosts(originalPosts);
      });
  };
  useEffect(() => {
    const controler = new AbortController();
    setIsLoading(true);
    axios
      .get<Posts[]>("https://jsonplaceholder.typicode.com/posts", {
        signal: controler.signal,
      })
      .then((res) => {
        setPosts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => controler.abort();
  }, []);
  return (
    <>
      <h2>DeletetingData1</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <th scope="row">{post.id}</th>
              <th>{post.title}</th>
              <th>{post.body}</th>
              <button
                className="btn btn-outline-danger"
                onClick={() => deletePosts(post)}
              >
                Del
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && (
        <div className="spinner-border text-primary" role="status">
          Loading
        </div>
      )}
    </>
  );
};

export default DeletetingData1;
