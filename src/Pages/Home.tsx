import { useContext } from "react";
import Feed from "../components/Feed";
import CategoriesContext from "../hooks/CategoriesContext";

function Home() {
  const { categories, isLoading, error } = useContext(CategoriesContext);
  return (
    <div className="pt-24 bg-stone-800 text-white">
      <div className="flex justify-center flex-row items-center gap-1">
        {categories?.map((category) => (
          <button
            key={category.id}
            className="bg-stone-900 text-white m-2 p-2 rounded-lg"
          >
            {category.name}
          </button>
        ))}
      </div>
      <Feed />
    </div>
  );
}

export default Home;
