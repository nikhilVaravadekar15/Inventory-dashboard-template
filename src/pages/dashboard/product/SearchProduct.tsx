import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import ProductTable from "../../../components/ProductTable";

type TQuery = {
  search: string;
};

function SearchProduct() {
  const { register, handleSubmit } = useForm<TQuery>();

  return (
    <DashboardLayout>
      <div className="mb-4 flex gap-1 flex-col">
        <h1 className="text-xl font-bold">Search product</h1>
        <div className="flex gap-2 items-end">
          <select className="w-72 p-2 rounded bg-transparent border">
            {/* {query.data?.data?.map((option: any, index: number) => {
            return (
              <option
                key={index}
                value={option?.productCategory}
                className="p-2 m-2 dark:bg-slate-800"
              >
                {option?.productCategory}
              </option>
            );
          })} */}
            <option className="p-2 m-2 dark:bg-slate-800">Name</option>
            <option className="p-2 m-2 dark:bg-slate-800">Batch</option>
            <option className="p-2 m-2 dark:bg-slate-800">category</option>
          </select>
          <form
            className="w-full flex gap-2 items-center"
            onSubmit={handleSubmit((data: TQuery) => {
              console.log(data);
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
        <ProductTable />
      </div>
    </DashboardLayout>
  );
}

export default SearchProduct;
