import { useForm } from "react-hook-form";
import { addCategorySchema } from "../../../zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { TAddCategorySchema } from "../../../types";
import { Button } from "../../../components/ui/button";
import DashboardLayout from "../../../components/layouts/DashboardLayout"
import { useMutation, useQueryClient } from "react-query";
import { addCategory } from "../../../http";
import { useToast } from "../../../components/ui/use-toast";
import { cn } from "../../../lib/utils";
import LoadingSpinner from "../../../components/LoadingSpinner";


function AddCategory() {

    const { toast } = useToast()
    const queryClient = useQueryClient()

    const { register, handleSubmit } = useForm<TAddCategorySchema>({
        resolver: zodResolver(addCategorySchema)
    });

    const addCategoryMutation = useMutation({
        mutationFn: async (data: TAddCategorySchema) => {
            return await addCategory(data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries('categories')
            toast({
                title: "Category added",
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
                Add Category
            </h1>
            <form
                className={cn(
                    "py-4 flex gap-4 flex-col",
                    addCategoryMutation.isLoading ? "pointer-events-none" : "pointer-events-auto"
                )}
                onSubmit={handleSubmit((data: TAddCategorySchema) => {
                    console.log(data);
                })}
            >
                <div className="flex gap-2 flex-col">
                    <Label htmlFor="name">
                        Name
                        <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        autoComplete="off"
                        {...register("name", { required: true })}
                    />
                </div>
                <div className="flex gap-2 flex-col">
                    <Label htmlFor="username">
                        Description
                    </Label>
                    <Input
                        autoComplete="off"
                        {...register("description")}
                    />
                </div>
                <div className="flex items-center">
                    <Button
                        variant={"secondary"}
                        className="font-semibold"
                    >
                        {
                            addCategoryMutation.isLoading
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

export default AddCategory
