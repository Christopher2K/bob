import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "@/services/query";
import { orm, schema } from "@/services/sql";
import type { NewCategory } from "@/services/sql/schema";

export const createCategory = async (category: NewCategory) => {
  return orm.insert(schema.categoryTable).values(category).returning();
};

export const useCreateCategoryMutation = () => {
  const {
    mutateAsync: createCategoryAsync,
    isPending: isCreateCategoryLoading,
    error: createCategoryError,
  } = useMutation({
    mutationFn: createCategory,
    meta: {
      invalidateKeys: [queryKeys.categories.all()],
    },
  });

  return {
    createCategoryAsync,
    isCreateCategoryLoading,
    createCategoryError,
  };
};
