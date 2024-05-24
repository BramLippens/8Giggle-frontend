import { createContext } from "react";

const CategoriesContext = createContext<CategoriesContextState>({
  categories: [],
  selectedCategories: [],
  isLoading: false,
  error: null,
});

export default CategoriesContext;
