import { useCallback, useRef, useState } from "react";
import PostCard from "./PostCard";
import usePostSearch, { Post } from "../hooks/usePostSearch";

interface FeedProps {
  // Add an optional props interface if needed
}

function Feed({}: FeedProps) {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { posts, hasMore, loading, error } = usePostSearch("", pageNumber);

  const intObserver = useRef<IntersectionObserver | null>(null);
  const lastPostRef = useCallback(
    (post: Post | null) => {
      // Type the post argument
      if (loading) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("near bottom");
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });

      if (post) intObserver.current.observe(post);
    },
    [loading, hasMore]
  );

  if (error) return <p className="center">Error</p>;

  const content = posts.map((post, index) => {
    if (posts.length === index + 1) {
      return <PostCard ref={lastPostRef} key={post.id} {...post} />;
    }
    return <PostCard key={post.id} {...post} />;
  });

  return (
    <div className="flex justify-center flex-1 bg-stone-800 text-white">
      <div className="flex flex-col">
        {content}
        {loading && <p className="center">Loading...</p>}
      </div>
    </div>
  );
}

export default Feed;
