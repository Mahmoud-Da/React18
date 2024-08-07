import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  userId: number | undefined;
  page: number;
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  const fetchPosts = () =>
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          userId: query.userId,
          _start: (query.page - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);

  return useQuery<Post[], Error>({
    //  /users/1/posts
    // queryKey: userId ? ["users", userId, "posts"] : ["posts"],
    queryKey: ["posts", query],
    queryFn: fetchPosts,
    staleTime: 1 * 60 * 1000, // 1m
    keepPreviousData: true,
  });
};

export default usePosts;
