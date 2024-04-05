import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  image: string;
}

function Post({ id, title, image }: Props) {
  const navigate = useNavigate();
  function handleClick(): void {
    navigate(`/posts/${id}`);
  }

  return (
    <div className="border p-2 my-4 max-w-[400px]">
      <h2
        className="text-xl font-semibold hover:cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap"
        onClick={handleClick}
      >
        {title}
      </h2>

      <img className="mt-2 w-full h-auto" src={image} alt={title} />
    </div>
  );
}

export default Post;
