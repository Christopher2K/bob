import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/services/query";
import { orm, schema } from "@/services/sql";

const getCategories = async () => orm.select().from(schema.categoryTable);

export const useGetCategoriesQuery = () => {
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    error: categoriesError,
  } = useQuery({
    queryKey: queryKeys.categories.all(),
    queryFn: getCategories,
  });

  return {
    categories,
    isCategoriesLoading,
    categoriesError,
  };
};
