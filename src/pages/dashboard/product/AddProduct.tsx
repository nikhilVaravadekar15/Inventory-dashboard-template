/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { addProductSchema } from "../../../zod";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import AddCetegoryDialog from "../../../components/AddCetegoryDialog";
import DashboardLayout from "../../../components/layouts/DashboardLayout"
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addProduct, getAllCategories } from "../../../http";
import { TAddProductSchema } from "../../../types";
import { useToast } from "../../../components/ui/use-toast";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { cn } from "../../../lib/utils";


function AddProduct() {

    const { toast } = useToast()
    const queryClient = useQueryClient()

    const { register, handleSubmit, } = useForm<TAddProductSchema>({
        resolver: zodResolver(addProductSchema)
    });

    const query = useQuery("categories", async () => {
        return await getAllCategories()
    })

    const addProductMutation = useMutation({
        mutationFn: async (data: TAddProductSchema) => {
            return await addProduct(data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries('products')
            toast({
                title: "Product added",
            })
        },
        onError: () => {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
            })
        },
    })

    return (
        <DashboardLayout>
            <h1 className="my-2 text-xl font-bold">
                Add Product
            </h1>
            <form
                className={cn(
                    "py-4 flex gap-2 flex-col",
                    addProductMutation.isLoading ? "pointer-events-none" : "pointer-events-auto"
                )}
                onSubmit={handleSubmit((data: TAddProductSchema) => {
                    data = {
                        ...data,
                        // @ts-expect-error
                        category: {
                            productCategory: data.category
                        }
                    }
                    console.log(data);
                    addProductMutation.mutate(data)
                })}>
                <div className="space-y-2">
                    <div className="flex flex-col">
                        <Label>Product name:</Label>
                        <div className="my-2">
                            <Input
                                type="text"
                                autoComplete={"off"}
                                {...register("name", { required: true })}
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
                                autoComplete={"off"}
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
                                autoComplete={"off"}
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
                                autoComplete={"off"}
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
                                placeholder="sellingPrice"
                                autoComplete={"off"}
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
                                    placeholder="manufacturingDate"
                                    autoComplete={"off"}
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
                                    placeholder="expiryDate"
                                    autoComplete={"off"}
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
                                {
                                    query.data?.data.options.map((option: any, index: number) => {
                                        return (
                                            <option
                                                key={index}
                                                value={option.value}
                                                className="p-2 m-2 dark:bg-slate-800"
                                            >
                                                {option.label}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                            <AddCetegoryDialog />
                        </div>
                    </div>
                </div>
                <div className="space-y-3 h-16 flex">
                    <Button
                        type="submit"
                        variant={"secondary"}
                        className="font-semibold"
                    >
                        {
                            addProductMutation.isLoading
                                ? (
                                    <>
                                        <LoadingSpinner classname="h-6 w-6" />
                                    </>
                                )
                                : (
                                    <>Submit</>
                                )
                        }
                    </Button>
                </div>
            </form>
        </DashboardLayout>
    )
}

export default AddProduct
