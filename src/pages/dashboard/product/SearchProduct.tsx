/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import {
  getAllProducts,
  getAllProductsByBatch,
  getAllProductsByCategory,
  getAllProductsByName,
} from "../../../http";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import TokenService from "../../../services/TokenService";
import ProductTable from "../../../components/ProductTable";
import LoadingSpinner from "../../../components/LoadingSpinner";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import React from "react";
import { useToast } from "../../../components/ui/use-toast";

type TQuery = {
  search: string;
};

// # TODO:
function SearchProduct() {
  const { toast } = useToast();
  const [isMutation, setIsMutation] = React.useState<boolean>(false);
  const [selectOption, setSelectOption] = React.useState<string>("name");
  // const [searchReasultData, setSearchReasultData] = React.useState<[]>([]);
  const { register, handleSubmit } = useForm<TQuery>();
  const query = useQuery("allProducts", async () => {
    return await getAllProducts(TokenService.getAuthToken());
  });

  const searchProductsMutation = useMutation({
    mutationFn: async (data: string) => {
      switch (selectOption) {
        case "name":
          console.log("name");
          console.log(data);
          return await getAllProductsByName(data, TokenService.getAuthToken());
        case "batch":
          console.log(data);
          return await getAllProductsByBatch(data, TokenService.getAuthToken());
        case "category":
          console.log(data);
          return await getAllProductsByCategory(
            data,
            TokenService.getAuthToken()
          );
        default:
          break;
      }
    },
    onSuccess: (data: any) => {
      console.log(data);
      // setSearchReasultData()
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
          </select>
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
            // <ProductTable products={searchProductsMutation.data?.data} />
            <>yo</>
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
