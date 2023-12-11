/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { PlusCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { addCategorySchema } from "../zod";
import { TAddCategorySchema } from "../types";



export default function AddCetegoryDialog() {

    const { register, handleSubmit } = useForm<TAddCategorySchema>({
        resolver: zodResolver(addCategorySchema)
    });

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button type="button" variant="outline" className="rounded-full">
                    <PlusCircle />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add category</DialogTitle>
                </DialogHeader>
                <form
                    className="grid gap-4 py-4"
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
                            id="name"
                            autoComplete="off"
                            {...register("name", { required: true })}
                        />
                    </div>
                    <div className="flex gap-2 flex-col">
                        <Label htmlFor="username">
                            Description
                        </Label>
                        <Input
                            id="username"
                            autoComplete="off"
                            {...register("description")}
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
