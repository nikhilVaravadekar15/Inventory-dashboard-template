/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Trash2, PlusSquare } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import React from "react";
import { cn } from "../../lib/utils";
import { addInvoice, getAllCategories } from "../../http";
import { useMutation, useQuery } from "react-query";
import { TInvoice } from "../../types";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import TokenService from "../../services/TokenService";
import { useToast } from "../../components/ui/use-toast";
import { useFieldArray, useForm } from "react-hook-form";
import LoadingSpinner from "../../components/LoadingSpinner";
import DashboardLayout from "../../components/layouts/DashboardLayout";

function InvoicePage() {
  const { toast } = useToast();

  const { register, control, handleSubmit } = useForm<TInvoice>();

  const { fields, append, remove } = useFieldArray({
    name: "products",
    control: control,
  });

  const categoriesQuery = useQuery("categories", async () => {
    return await getAllCategories(TokenService.getAuthToken());
  });

  const addInvoiceMutation = useMutation({
    mutationFn: async (data: TInvoice) => {
      console.log(data);
      return await addInvoice(data, TokenService.getAuthToken());
    },
    onSuccess: (data: any) => {
      console.log(data);
      toast({
        title: "Invoice added",
      });
    },
    onError: (error: any) => {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    },
  });

  React.useEffect(() => {
    append({
      category: "",
      productName: "",
      quantity: 1,
    });
    return () => {
      remove(0);
    };
  }, []);

  return (
    <DashboardLayout>
      <form
        className={cn(
          "h-full overflow-scroll",
          addInvoiceMutation.isLoading
            ? "pointer-events-none"
            : "pointer-events-auto"
        )}
        onSubmit={handleSubmit((data: TInvoice) => {
          addInvoiceMutation.mutate(data);
        })}
      >
        <div className="my-2 flex items-center justify-between">
          <h1 className="text-xl font-bold">Add invoice</h1>
          <Button
            type="submit"
            variant={"outline"}
            className="flex gap-1 items-center justify-center"
          >
            {addInvoiceMutation.isLoading ? (
              <>
                <LoadingSpinner classname="h-6 w-6" />
              </>
            ) : (
              <>
                <span className="font-bold">Submit</span>
              </>
            )}
          </Button>
        </div>
        <div className="p-2 grid gap-2 grid-cols-2">
          <div className="space-y-2">
            <div className="flex flex-col">
              <Label>
                Customer Name
                <span className="text-red-500">*</span>
              </Label>
              <div className="my-1">
                <Input
                  type="text"
                  autoFocus={true}
                  autoComplete={"off"}
                  {...register("customerName", { required: true })}
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex flex-col">
              <Label>
                Invoice date:
                <span className="text-red-500">*</span>
              </Label>
              <div className="my-2">
                <Input type="date" {...register("invoiceDate")} />
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
                      append({
                        category: "",
                        productName: "",
                        quantity: 1,
                      });
                    }}
                    variant={"outline"}
                    type="button"
                    className="flex gap-1 items-center justify-center"
                  >
                    <PlusSquare />
                    <span className="font-bold">Add</span>
                  </Button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="h-full overflow-scroll">
              {fields.map((field, index: number) => {
                return (
                  <TableRow key={field.id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className="font-medium">
                      <select
                        className="w-72 p-2 rounded bg-transparent border"
                        {...register(`products.${index}.category`, {
                          required: true,
                        })}
                      >
                        {categoriesQuery.data?.data?.map(
                          (option: any, index: number) => {
                            return (
                              <option
                                key={index}
                                value={option?.productCategory}
                                className="p-2 m-2 dark:bg-slate-800"
                              >
                                {option?.productCategory}
                              </option>
                            );
                          }
                        )}
                      </select>
                    </TableCell>
                    <TableCell>
                      <Input
                        type="text"
                        autoComplete="off"
                        {...register(`products.${index}.productName`, {
                          required: true,
                        })}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        {...register(`products.${index}.quantity`)}
                      />
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        onClick={() => {
                          remove(index);
                        }}
                        variant={"link"}
                        type="button"
                        disabled={index === 0}
                      >
                        <Trash2 color={"red"} />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </form>
    </DashboardLayout>
  );
}

export default InvoicePage;
