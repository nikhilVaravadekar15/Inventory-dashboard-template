import { Edit } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import DeleteProductAlertDialog from "./DeleteProductAlertDialog";

const products = [
  {
    id: 1,
    name: "sugar",
    batchNo: "BAH13B",
    purchasePrice: 27.41,
    sellingPrice: 33.0,
    quantity: 32,
    manufacturingDate: "2023-01-01",
    expiryDate: "2025-01-01",
    status: "active",
    category: {
      id: 1,
      productCategory: "grocery",
    },
  },
  {
    id: 2,
    name: "sugar",
    batchNo: "SUG19G",
    purchasePrice: 30.0,
    sellingPrice: 33.0,
    quantity: 16,
    manufacturingDate: "2023-06-01",
    expiryDate: "2026-05-01",
    status: "active",
    category: {
      id: 1,
      productCategory: "grocery",
    },
  },
  {
    id: 3,
    name: "white bread",
    batchNo: "WB12HY",
    purchasePrice: 18.2,
    sellingPrice: 23.59,
    quantity: 80,
    manufacturingDate: "2023-11-08",
    expiryDate: "2023-11-11",
    status: "active",
    category: {
      id: 1,
      productCategory: "grocery",
    },
  },
  {
    id: 4,
    name: "Brown bread",
    batchNo: "BBI90M",
    purchasePrice: 21.5,
    sellingPrice: 30.59,
    quantity: 17,
    manufacturingDate: "2023-11-09",
    expiryDate: "2023-11-11",
    status: "active",
    category: {
      id: 1,
      productCategory: "grocery",
    },
  },
  {
    id: 5,
    name: "Maxeral Tablet",
    batchNo: "MT1234",
    purchasePrice: 19.0,
    sellingPrice: 24.95,
    quantity: 0,
    manufacturingDate: "2023-11-09",
    expiryDate: "2024-11-11",
    status: "inactive",
    category: {
      id: 2,
      productCategory: "medicial",
    },
  },
  {
    id: 6,
    name: "Cough syrup",
    batchNo: "CSJ89K",
    purchasePrice: 83.0,
    sellingPrice: 113.0,
    quantity: 0,
    manufacturingDate: "2023-11-05",
    expiryDate: "2025-11-11",
    status: "inactive",
    category: {
      id: 2,
      productCategory: "medicial",
    },
  },
  {
    id: 7,
    name: "Knor Soup",
    batchNo: "KSJ89K",
    purchasePrice: 25.23,
    sellingPrice: 30.0,
    quantity: 71,
    manufacturingDate: "2023-11-05",
    expiryDate: "2024-05-11",
    status: "active",
    category: {
      id: 1,
      productCategory: "grocery",
    },
  },
  {
    id: 8,
    name: "Colgate toothpaste",
    batchNo: "CT9891",
    purchasePrice: 120.35,
    sellingPrice: 140.0,
    quantity: 0,
    manufacturingDate: "2023-11-05",
    expiryDate: "2024-08-11",
    status: "inactive",
    category: {
      id: 1,
      productCategory: "grocery",
    },
  },
  {
    id: 9,
    name: "Cocacola",
    batchNo: "CC1800",
    purchasePrice: 17.63,
    sellingPrice: 20.0,
    quantity: 20,
    manufacturingDate: "2023-11-05",
    expiryDate: "2023-12-02",
    status: "active",
    category: {
      id: 3,
      productCategory: "oil",
    },
  },
];

export default function ProductTable() {
  return (
    <Table className="mt-4 mb-16 border h-full overflow-scroll">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Sr.No.</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Purchase</TableHead>
          <TableHead>Selling</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Manufacturing</TableHead>
          <TableHead>Expiry</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-center border">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{index}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.purchasePrice}</TableCell>
            <TableCell>{product.sellingPrice}</TableCell>
            <TableCell>{product.quantity}</TableCell>
            <TableCell>{product.manufacturingDate}</TableCell>
            <TableCell>{product.expiryDate}</TableCell>
            <TableCell>{product.category.productCategory}</TableCell>
            <TableCell className="text-right flex gap-2 items-center justify-center border">
              <Button variant={"outline"} className="rounded-full">
                <Edit size={"0.8rem"} />
              </Button>
              <DeleteProductAlertDialog id={index.toString()} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
