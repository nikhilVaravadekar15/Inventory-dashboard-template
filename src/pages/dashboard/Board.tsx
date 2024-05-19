import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  getExpiredProducts,
  getLowStockProducts,
  getNearExpiryProducts,
  getTodaysInvoicesCount,
  getTodaysLoss,
  getTodaysProfit,
  // getYearlyLoss,
  // getYearlyProfit,
} from "../../http";
import { Suspense } from "react";
import { useQuery } from "react-query";
import TokenService from "../../services/TokenService";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import LoadingSpinner from "../../components/LoadingSpinner";
import ProductTable from "../../components/ProductTable";

function Board() {
  const nearExpiryProductsQuery = useQuery("near-expiry-products", async () => {
    return await getNearExpiryProducts(TokenService.getAuthToken());
  });

  const lowStockProductsQuery = useQuery("products-in-low-stock", async () => {
    return await getLowStockProducts(20, TokenService.getAuthToken());
  });

  const expiredProductsQuery = useQuery("expired-products", async () => {
    return await getExpiredProducts(TokenService.getAuthToken());
  });

  return (
    <DashboardLayout>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="py-4 grid gap-2 grid-cols-3 items-center justify-between grid-flow-row">
          <GetTodaysProfit />
          <GetTodaysLoss />
          <GetTodaysInvoicesCount />
          {/* <GetYearlyProfit />
        <GetYearlyLoss /> */}
        </div>
        <Tabs
          defaultValue="products-in-low-stock"
          className="h-full w-full mb-2"
        >
          <TabsList>
            <TabsTrigger value="products-in-low-stock">
              Products in low stock
            </TabsTrigger>
            <TabsTrigger value="expired-products">Expired products</TabsTrigger>
            <TabsTrigger value="near-expiry-products">
              Near expiry products
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="products-in-low-stock"
            className="h-full overflow-y-scroll"
          >
            {lowStockProductsQuery.isLoading ? (
              <div className="flex gap-3 items-center">
                <LoadingSpinner classname="h-6 w-6" color={"white"} />
                <span>loading...</span>
              </div>
            ) : lowStockProductsQuery.data?.data.length === 0 ? (
              <div className="text-xl font-bold">No data available</div>
            ) : (
              <ProductTable products={lowStockProductsQuery.data?.data} />
            )}
          </TabsContent>
          <TabsContent
            value="expired-products"
            className="h-full overflow-y-scroll"
          >
            {expiredProductsQuery.isLoading ? (
              <div className="flex gap-3 items-center">
                <LoadingSpinner classname="h-6 w-6" color={"white"} />
                <span>loading...</span>
              </div>
            ) : expiredProductsQuery.data?.data.length === 0 ? (
              <div className="text-xl font-bold">No data available</div>
            ) : (
              <ProductTable products={expiredProductsQuery.data?.data} />
            )}
          </TabsContent>
          <TabsContent
            value="near-expiry-products"
            className="h-full overflow-y-scroll"
          >
            {nearExpiryProductsQuery.isLoading ? (
              <div className="flex gap-3 items-center">
                <LoadingSpinner classname="h-6 w-6" color={"white"} />
                <span>loading...</span>
              </div>
            ) : nearExpiryProductsQuery.data?.data.length === 0 ? (
              <div className="text-xl font-bold">No data available</div>
            ) : (
              <ProductTable products={nearExpiryProductsQuery.data?.data} />
            )}
          </TabsContent>
        </Tabs>
      </Suspense>
    </DashboardLayout>
  );
}

function GetTodaysProfit() {
  const query = useQuery("TodaysProfit", async () => {
    return await getTodaysProfit(TokenService.getAuthToken());
  });
  return (
    <div className="p-2 h-20 flex items-center justify-between border rounded hover:shadow hover:shadow-black dark:hover:shadow dark:hover:shadow-white">
      <span className="font-semibold capitalize">Today's profit</span>
      <h1 className="text-2xl font-extrabold text-green-700">
        <span>Rs. </span>
        <span>{query.data?.data}</span>
      </h1>
    </div>
  );
}

function GetTodaysLoss() {
  const query = useQuery("TodaysLoss", async () => {
    return await getTodaysLoss(TokenService.getAuthToken());
  });
  return (
    <div className="p-2 h-20 flex items-center justify-between border rounded hover:shadow hover:shadow-black dark:hover:shadow dark:hover:shadow-white">
      <span className="font-semibold capitalize">Today's loss</span>
      <h1 className="text-2xl font-extrabold text-red-700">
        <span>Rs. </span>
        <span>{query.data?.data}</span>
      </h1>
    </div>
  );
}

function GetTodaysInvoicesCount() {
  const query = useQuery("TodaysInvoicesCount", async () => {
    return await getTodaysInvoicesCount(TokenService.getAuthToken());
  });
  return (
    <div className="p-2 h-20 flex items-center justify-between border rounded hover:shadow hover:shadow-black dark:hover:shadow dark:hover:shadow-white">
      <span className="font-semibold capitalize">Today invoices Count</span>
      <h1 className="text-2xl font-extrabold text-amber-700">
        <span>{query.data?.data.length}</span>
      </h1>
    </div>
  );
}

// function GetYearlyProfit() {
//   const query = useQuery("categories", async () => {
//     return await getYearlyProfit(
//       new Date().getFullYear(),
//       TokenService.getAuthToken()
//     );
//   });
//   return (
//     <div className="p-2 h-20 flex items-center justify-between border rounded hover:shadow hover:shadow-black dark:hover:shadow dark:hover:shadow-white">
//       <span className="font-semibold capitalize">Today's profit</span>
//       <h1 className="text-2xl font-extrabold text-green-700">
//         <span>Rs. </span>
//         <span>{query.data?.data}</span>
//       </h1>
//     </div>
//   );
// }

// function GetYearlyLoss() {
//   const query = useQuery("categories", async () => {
//     return await getYearlyLoss(
//       new Date().getFullYear(),
//       TokenService.getAuthToken()
//     );
//   });
//   return (
//     <div className="p-2 h-20 flex items-center justify-between border rounded hover:shadow hover:shadow-black dark:hover:shadow dark:hover:shadow-white">
//       <span className="font-semibold capitalize">Today's loss</span>
//       <h1 className="text-2xl font-extrabold text-red-700">
//         <span>Rs. </span>
//         <span>{query.data?.data}</span>
//       </h1>
//     </div>
//   );
// }

export default Board;
