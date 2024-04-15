import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

type DetailPost = {
  title: string;
  body: string;
};

const PostDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<DetailPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    api
      .get(`/posts/${id}`)
      .then((response) => {
        setPost(response.data.data);
      })
      .catch((e: Error) => {
        console.error(e);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (error || post === null) return <p className="center">Error</p>;

  return (
    <div className="flex flex-1 bg-stone-800 text-white">
      <div className="flex justify-center bfg">
        <h1 className="">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default PostDetailPage;
