/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import {
  getAllActiveProducts,
  getAllInactiveProducts,
  getAllProducts,
  getAllProductsByBatch,
  getAllProductsByCategory,
  getAllProductsByName,
} from "../../../http";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import TokenService from "../../../services/TokenService";
import { useToast } from "../../../components/ui/use-toast";
import ProductTable from "../../../components/ProductTable";
import LoadingSpinner from "../../../components/LoadingSpinner";
import DashboardLayout from "../../../components/layouts/DashboardLayout";

type TQuery = {
  search: string;
};

function SearchProduct() {
  const { toast } = useToast();
  const [isMutation, setIsMutation] = React.useState<boolean>(false);
  const [selectOption, setSelectOption] = React.useState<string>("name");
  const [searchReasultData, setSearchReasultData] = React.useState<[]>([]);
  const { register, handleSubmit } = useForm<TQuery>();
  const query = useQuery("allProducts", async () => {
    return await getAllProducts(TokenService.getAuthToken());
  });

  const searchProductsMutation = useMutation({
    mutationFn: async (data: string) => {
      switch (selectOption) {
        case "name":
          return await getAllProductsByName(data, TokenService.getAuthToken());
        case "batch":
          return await getAllProductsByBatch(data, TokenService.getAuthToken());
        case "category":
          return await getAllProductsByCategory(
            data,
            TokenService.getAuthToken()
          );
        case "active":
          return await getAllActiveProducts(TokenService.getAuthToken());
        case "inactive":
          return await getAllInactiveProducts(TokenService.getAuthToken());
        default:
          break;
      }
    },
    onSuccess: (data: any) => {
      setSearchReasultData(data.data);
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please try again later.",
      });
    },
  });

  return (
    <DashboardLayout>
      <div className="mb-4 flex gap-1 flex-col">
        <h1 className="text-xl font-bold">Search product</h1>
        <div className="flex gap-2 items-end">
          <select
            onChange={(event) => {
              setSelectOption(event.target.value);
            }}
            value={selectOption}
            className="w-72 p-2 rounded bg-transparent border"
          >
            <option className="p-2 m-2 dark:bg-slate-800" value={"name"}>
              Name
            </option>
            <option className="p-2 m-2 dark:bg-slate-800" value={"batch"}>
              Batch
            </option>
            <option className="p-2 m-2 dark:bg-slate-800" value={"category"}>
              Category
            </option>
            <option className="p-2 m-2 dark:bg-slate-800" value={"active"}>
              Active
            </option>
            <option className="p-2 m-2 dark:bg-slate-800" value={"inactive"}>
              Inactive
            </option>
          </select>

          {selectOption === "active" || selectOption === "inactive" ? (
            <div className="w-full flex gap-2 items-center">
              <div className="w-full flex flex-col">
                <Input type="text" disabled autoComplete={"off"} />
              </div>
              <Button
                type="submit"
                variant={"outline"}
                className="font-semibold rounded-full"
                onClick={() => {
                  setIsMutation(true);
                  searchProductsMutation.mutate("");
                }}
              >
                <Search />
              </Button>
            </div>
          ) : (
            <form
              className="w-full flex gap-2 items-center"
              onSubmit={handleSubmit((data: TQuery) => {
                setIsMutation(true);
                searchProductsMutation.mutate(data.search);
              })}
            >
              <div className="w-full flex flex-col">
                <Input
                  type="text"
                  autoComplete={"off"}
                  {...register("search", { required: true })}
                />
              </div>
              <Button
                type="submit"
                variant={"outline"}
                className="font-semibold rounded-full"
              >
                <Search />
              </Button>
            </form>
          )}
        </div>
      </div>
      <div className="h-full overflow-y-scroll">
        {isMutation ? (
          searchProductsMutation.isLoading ? (
            <div className="h-[90%] flex gap-1 items-center justify-center">
              <LoadingSpinner classname="h-6 w-6" color={"white"} />
              <span>loading..</span>
            </div>
          ) : (
            <ProductTable products={searchReasultData} />
          )
        ) : query.isLoading ? (
          <div className="h-[90%] flex gap-1 items-center justify-center">
            <LoadingSpinner classname="h-6 w-6" color={"white"} />
            <span>loading..</span>
          </div>
        ) : (
          <ProductTable products={query.data?.data} />
        )}
      </div>
    </DashboardLayout>
  );
}

export default SearchProduct;
