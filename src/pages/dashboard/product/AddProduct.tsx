/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { cn } from "../../../lib/utils";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import TokenService from "../../../services/TokenService";
import { useToast } from "../../../components/ui/use-toast";
import { addProduct, getAllCategories } from "../../../http";
import CetegoryDialog from "../../../components/CetegoryDialog";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { useMutation, useQuery, useQueryClient } from "react-query";
import DashboardLayout from "../../../components/layouts/DashboardLayout";

function AddProduct() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { register, handleSubmit } = useForm();

  const query = useQuery("categories", async () => {
    return await getAllCategories(TokenService.getAuthToken());
  });

  const addProductMutation = useMutation({
    mutationFn: async (data: any) => {
      return await addProduct(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("products");
      toast({
        title: "Product added",
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    },
  });

  return (
    <DashboardLayout>
      <h1 className="my-2 text-xl font-bold">Add Product</h1>
      <form
        className={cn(
          "py-4 flex gap-2 flex-col",
          addProductMutation.isLoading
            ? "pointer-events-none"
            : "pointer-events-auto"
        )}
        onSubmit={handleSubmit((data) => {
          data = {
            ...data,
            quantity: parseInt(data?.quantity),
            purchasePrice: parseInt(data?.purchasePrice),
            sellingPrice: parseInt(data?.sellingPrice),
            category: {
              productCategory: data.category,
            },
          };
          console.log(data);
          // addProductMutation.mutate(data)
        })}
      >
        <div className="space-y-2">
          <div className="flex flex-col">
            <Label>Product name:</Label>
            <div className="my-2">
              <Input
                type="text"
                placeholder="name"
                {...register("name", { required: true, min: 0 })}
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col">
            <Label>Batch no.:</Label>
            <div className="my-2">
              <Input
                type="text"
                placeholder="batch no."
                {...register("batchNo", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col">
            <Label>Quantity:</Label>
            <div className="my-2">
              <Input
                type="number"
                placeholder="quantity"
                {...register("quantity", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col">
            <Label>Purchase price:</Label>
            <div className="my-2">
              <Input
                type="number"
                placeholder="purchase price"
                {...register("purchasePrice", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col">
            <Label>Selling price:</Label>
            <div className="my-2">
              <Input
                type="number"
                placeholder="selling price"
                {...register("sellingPrice", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="my-4 grid gap-2 grid-cols-2">
          <div className="space-y-2">
            <div className="flex flex-col">
              <Label>manufacturing date:</Label>
              <div className="my-2">
                <Input
                  type="date"
                  placeholder="Manufacturing date"
                  {...register("manufacturingDate", { required: true })}
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex flex-col">
              <Label>Expiry date:</Label>
              <div className="my-2">
                <Input
                  type="date"
                  placeholder="Expiry date"
                  {...register("expiryDate", {})}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <Label>Category:</Label>
            <div className="my-2 flex gap-3 items-center justify-center">
              <select
                className="w-72 p-2 rounded bg-transparent border"
                {...register("category", { required: true })}
              >
                {query.data?.data?.map((option: any, index: number) => {
                  return (
                    <option
                      key={index}
                      value={option?.productCategory}
                      className="p-2 m-2 dark:bg-slate-800"
                    >
                      {option?.productCategory}
                    </option>
                  );
                })}
              </select>
              <CetegoryDialog>
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full"
                >
                  <PlusCircle />
                </Button>
              </CetegoryDialog>
            </div>
          </div>
        </div>
        <div className="space-y-3 h-16 flex">
          <Button type="submit" variant={"secondary"} className="font-semibold">
            {addProductMutation.isLoading ? (
              <>
                <LoadingSpinner classname="h-6 w-6" />
              </>
            ) : (
              <>Submit</>
            )}
          </Button>
        </div>
      </form>
    </DashboardLayout>
  );
}

export default AddProduct;
