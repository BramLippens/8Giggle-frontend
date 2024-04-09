import { useEffect, useState } from "react";
import Post from "./Post";
import api from "../api";

type Post = {
  id: number;
  title: string;
  imagePath: string;
};

function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    api.get("/posts").then((response) => {
      setPosts(response.data.data.items);
    });
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
