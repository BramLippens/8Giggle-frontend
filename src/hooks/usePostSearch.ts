import { useEffect, useState } from "react";
import api from "../api";

export type Post = {
  id: number;
  title: string;
  imagePath: string;
};

export default function usePostSearch(query: string, pagenumber: number) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    api
      .get(`/posts?PageIndex=${pagenumber}`)
      .then((response) => {
        setPosts((prevPosts) => {
          const seenIds = new Map();
          const uniquePosts = [];
          for (const post of [...prevPosts, ...response.data.data.items]) {
            if (seenIds.has(post.id)) continue;
            seenIds.set(post.id, true);
            uniquePosts.push(post);
          }

          return uniquePosts;
        });
        console.log(response.data.data.hasNextPage);

        setHasMore(response.data.data.hasNextPage);
      })
      .catch((e: Error) => {
        console.error(e);
        setError(true);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query, pagenumber]);
  return {
    loading,
    error,
    posts,
    hasMore,
  };
}
