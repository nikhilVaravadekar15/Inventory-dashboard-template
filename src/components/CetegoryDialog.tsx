import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button"
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { addCategorySchema } from "../zod";
import { TAddCategorySchema } from "../types";
import { useToast } from "./ui/use-toast";
import { useMutation, useQueryClient } from "react-query";
import { addCategory, updateCategoryById } from "../http";
import TokenService from "../services/TokenService";

type TCetegoryDialog = {
    children: React.ReactNode
    id?: string
    productCategory?: string
    update?: boolean
}

export default function CetegoryDialog({ children, id, productCategory, update }: TCetegoryDialog) {

    const { toast } = useToast()
    const queryClient = useQueryClient()
    const { register, handleSubmit, reset } = useForm<TAddCategorySchema>({
        resolver: zodResolver(addCategorySchema),
        defaultValues: {
            productCategory: productCategory ? productCategory : "",
        }
    });

    const categoryMutation = useMutation({
        mutationFn: async (data: TAddCategorySchema) => {
            if (update) {
                console.log(data)
                return await updateCategoryById(id!, data, TokenService.getAuthToken())
            } else {
                return await addCategory(data, TokenService.getAuthToken())
            }
        },
        onSuccess: () => {
            toast({
                title: update ? "Category updated" : "Category added",
            })
            queryClient.invalidateQueries("categories");
        },
        onError: () => {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Category already exits, please add a new category.",
            })
        },
        onSettled: () => {
            reset()
        }
    })

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        {
                            update ? (
                                "Update category"
                            ) : (
                                "Add category"
                            )
                        }
                    </DialogTitle>
                </DialogHeader>
                <form
                    className="grid gap-4 py-4"
                    onSubmit={handleSubmit((data: TAddCategorySchema) => {
                        categoryMutation.mutate(data)
                    })}
                >
                    <div className="flex gap-2 flex-col">
                        <Label htmlFor="productCategory">
                            Name
                            <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="name"
                            autoComplete="off"
                            {...register("productCategory", { required: true })}
                        />
                    </div>
                    <div className="flex items-center justify-end">
                        <Button
                            variant={"secondary"}
                            className="font-semibold"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
