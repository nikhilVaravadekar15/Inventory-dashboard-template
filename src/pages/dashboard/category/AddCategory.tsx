import { useForm } from "react-hook-form";
import { addCategorySchema } from "../../../zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { TAddCategorySchema } from "../../../types";
import { Button } from "../../../components/ui/button";
import DashboardLayout from "../../../components/layouts/DashboardLayout"


function AddCategory() {

    const { register, handleSubmit } = useForm<TAddCategorySchema>({
        resolver: zodResolver(addCategorySchema)
    });

    return (
        <DashboardLayout>
            <h1 className="my-2 text-xl font-bold">
                Add Category
            </h1>
            <form
                className="py-4 flex gap-4 flex-col"
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
                        Submit
                    </Button>
                </div>
            </form>
        </DashboardLayout>
    )
}

export default AddCategory
