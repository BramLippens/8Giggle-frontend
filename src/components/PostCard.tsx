import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  imagePath: string;
}

const PostCard = React.forwardRef(({ id, title, imagePath }: Props, ref) => {
  const navigate = useNavigate();
  function handleClick(): void {
    navigate(`/posts/${id}`);
  }

  const postBody = (
    <div className="border p-2 my-4 max-w-[400px]">
      <h2
        className="text-xl font-semibold hover:cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap"
        onClick={handleClick}
      >
        {title}
      </h2>

      <img className="mt-2 w-full h-auto" src={imagePath} alt={title} />
    </div>
  );

  const content = ref ? <div ref={ref}>{postBody}</div> : <div>{postBody}</div>;

  return content;
});

export default PostCard;
