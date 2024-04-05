import { useParams } from "react-router-dom";

function PostPage() {
  const { id } = useParams<{ id: string }>();
  return <div>PostPage {id}</div>;
}

export default PostPage;
