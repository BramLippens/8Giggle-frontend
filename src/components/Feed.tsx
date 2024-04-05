import React, { useState } from "react";
import Post from "./Post";

const POSTS = [
  {
    id: 1,
    title:
      "This is the first postThis is the first postThis is the first postThis is the first postThis is the first post",
    image: "https://picsum.photos/400/300",
  },
  {
    id: 2,
    title: "Post 2",
    content: "This is the second post",
    image: "https://picsum.photos/500/200",
  },
  {
    id: 3,
    title: "This is the third post",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    title: "This is the fourth post",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    title: "This is the fifth post",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 6,
    title: "This is the sixth post",
    image: "https://picsum.photos/1200/300",
  },
];

function Feed() {
  const [posts, setPosts] = useState(POSTS);
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
