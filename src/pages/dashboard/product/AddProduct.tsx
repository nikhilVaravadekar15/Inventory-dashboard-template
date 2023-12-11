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


function AddProduct() {

    const { register, handleSubmit, } = useForm({
        resolver: zodResolver(addProductSchema)
    });

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <DashboardLayout>
            <h1 className="my-2 text-xl font-bold">
                Add Product
            </h1>
            <form
                className="py-4 flex gap-2 flex-col"
                onSubmit={handleSubmit((data: any) => {
                    data = {
                        ...data,
                        category: {
                            productCategory: data.category
                        }
                    }
                    console.log(data);
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
                                    options.map((option: any, index: number) => {
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
                        Submit
                    </Button>
                </div>
            </form>
        </DashboardLayout>
    )
}

export default AddProduct
