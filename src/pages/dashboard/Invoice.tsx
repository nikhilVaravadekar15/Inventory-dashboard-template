/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Trash2,
    PlusSquare
} from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../components/ui/table"
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { useFieldArray, useForm } from "react-hook-form";
import DashboardLayout from "../../components/layouts/DashboardLayout"


function InvoicePage() {

    const {
        register,
        control,
        handleSubmit,
        // watch
    } = useForm({});

    const { fields, append, remove } = useFieldArray({
        name: "products",
        control: control
    });
    // const products = watch("products", fields);


    return (
        <DashboardLayout>
            <form
                className="h-full"
                onSubmit={handleSubmit((data: any) => {
                    console.log(data)
                })}
            >
                <div className="my-4 flex items-center justify-between">
                    <h1 className="text-xl font-bold">
                        Add invoice
                    </h1>
                    <Button
                        type="submit"
                        variant={"outline"}
                        className="flex gap-1 items-center justify-center"
                    >
                        <span className="font-bold">Submit</span>
                    </Button>
                </div>
                <div className="grid gap-2 grid-cols-2">
                    <div className="space-y-2">
                        <div className="flex flex-col">
                            <Label>
                                Customer Name
                                <span className="text-red-500">*</span>
                            </Label>
                            <div className="my-2">
                                <Input
                                    type="text"
                                    autoComplete={"off"}
                                    {...register("customerName", { required: true })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex flex-col">
                            <Label>
                                Manufacturing date:
                                <span className="text-red-500">*</span>
                            </Label>
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
                </div>
                <div className="h-full flex gap-1 flex-col">
                    <Table className="border">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Sr. No.</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Product name</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead className="text-right">
                                    <Button
                                        onClick={() => {
                                            append({})
                                        }}
                                        variant={"outline"} type="button"
                                        className="flex gap-1 items-center justify-center"
                                    >
                                        <PlusSquare />
                                        <span className="font-bold">Add</span>
                                    </Button>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="h-full overflow-scroll">
                            {
                                fields.map((field, index: number) => {
                                    return (
                                        <TableRow key={field.id}>
                                            <TableCell className="font-medium">{index + 1}</TableCell>
                                            <TableCell className="font-medium">
                                                <Input
                                                    type="text"
                                                    autoComplete="off"
                                                    placeholder="Category"
                                                    {...register(`products.${index}.category` as const, { required: true })}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Input
                                                    type="text"
                                                    autoComplete="off"
                                                    {...register(`products.${index}.productName` as const, { required: true })}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Input
                                                    type="number"
                                                    autoComplete="off"
                                                    {...register(`products.${index}.quantity` as const, { required: true })}
                                                />
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <Button
                                                    onClick={() => {
                                                        remove(index)
                                                    }}
                                                    variant={"link"}
                                                    type="button"
                                                    disabled={index === 0}
                                                >
                                                    <Trash2 color={"red"} />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </div>

            </form>
        </DashboardLayout>
    )
}

export default InvoicePage
