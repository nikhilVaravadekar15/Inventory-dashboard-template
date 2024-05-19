/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { Edit } from "lucide-react";
import { Link } from "react-router-dom";
import DeleteProductAlertDialog from "./DeleteProductAlertDialog";

export default function ProductTable({ products }: { products: [] }) {
  console.log();
  return (
    <Table className="mt-4 mb-16 border h-full overflow-scroll">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Sr.No.</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Purchase</TableHead>
          <TableHead>Selling</TableHead>
          <TableHead>Batch</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Manufacturing</TableHead>
          <TableHead>Expiry</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-center border">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product: any, index: number) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.purchasePrice}</TableCell>
            <TableCell>{product.sellingPrice}</TableCell>
            <TableCell>{product.batchNo}</TableCell>
            <TableCell>{product.quantity}</TableCell>
            <TableCell>{product.manufacturingDate}</TableCell>
            <TableCell>{product.expiryDate}</TableCell>
            <TableCell>{product.category.productCategory}</TableCell>
            <TableCell>{product.status}</TableCell>
            <TableCell className="text-right flex gap-2 items-center justify-center border">
              <Button variant={"outline"} className="rounded-full">
                <Link to={`/dashboard/product/update?productId=${product.id}`}>
                  <Edit size={"0.8rem"} />
                </Link>
              </Button>
              <DeleteProductAlertDialog id={index.toString()} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
