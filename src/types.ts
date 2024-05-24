interface Category {
  id: number;
  name: string;
  // Add other properties as needed
}

interface ApiError {
  message: string;
  // ...other relevant error details
}

interface CategoriesContextState {
  categories: Category[] | null;
  selectedCategories: Category[];
  isLoading: boolean;
  error: ApiError | null;
}
