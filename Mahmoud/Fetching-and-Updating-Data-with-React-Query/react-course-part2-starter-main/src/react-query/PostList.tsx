import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const [userId, setUserID] = useState<number>();
  const { data: posts, error, isLoading } = usePosts(userId);

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        onChange={(event) => setUserID(parseInt(event.target.value))}
        value={userId}
        className="form-select mb3"
      >
        <option value="">All Users</option>
        <option value="1">User1</option>
        <option value="2">User2</option>
        <option value="3">User3</option>
      </select>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
