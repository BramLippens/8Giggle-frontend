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

  if (id > 20) {
    const temp = imagePath.split("wwwroot")[1];
    imagePath = "https://localhost:7264/" + temp;
  }

  const postBody = (
    <div className="p-2 my-4 max-w-[400px]">
      <h2
        className="text-xl font-semibold hover:cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap px-2"
        onClick={handleClick}
      >
        {title}
      </h2>
      <hr className="my-1 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      <img className="mt-2 w-full h-auto" src={imagePath} alt={title} />
    </div>
  );

  const content = ref ? <div ref={ref}>{postBody}</div> : <div>{postBody}</div>;

  return content;
});

export default PostCard;
