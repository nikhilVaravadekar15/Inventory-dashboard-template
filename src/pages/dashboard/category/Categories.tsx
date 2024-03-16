import * as React from "react";
import { Pencil, PlusCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useQuery } from "react-query";
import { getAllCategories } from "../../../http";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import TokenService from "../../../services/TokenService";
import CetegoryDialog from "../../../components/CetegoryDialog";
import DashboardLayout from "../../../components/layouts/DashboardLayout";

export type Category = {
  id: number;
  productCategory: string;
};

const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "id",
    header: "Id",
    cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "productCategory",
    header: "Category",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("productCategory")}</div>
    ),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      return (
        <CetegoryDialog
          id={row.getValue("id")}
          productCategory={row.getValue("productCategory")}
          update={true}
        >
          <Button
            variant="destructive"
            className="flex gap-2 items-center justify-center"
          >
            <Pencil className="ml-2 h-4 w-4" />
            Edit
          </Button>
        </CetegoryDialog>
      );
    },
  },
];

function SearchCategory() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const query = useQuery("categories", async () => {
    return await getAllCategories(TokenService.getAuthToken());
  });
  const data: Category[] = query?.data?.data ?? [];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    initialState: {
      pagination: {
        pageSize: 7,
      },
    },
  });

  return (
    <DashboardLayout>
      <div className="py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Search category</h1>
        <div className="flex gap-4 items-center justify-between">
          <Input
            placeholder="Filter category..."
            value={
              (table
                .getColumn("productCategory")
                ?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table
                .getColumn("productCategory")
                ?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <CetegoryDialog>
            <Button type="button" variant="outline" className="rounded-full">
              <PlusCircle />
            </Button>
          </CetegoryDialog>
        </div>
      </div>
      <div className="rounded-md border overflow-scroll">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default SearchCategory;
