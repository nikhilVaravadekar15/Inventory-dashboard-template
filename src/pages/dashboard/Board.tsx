import TableDemo from "../../components/Table";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

function Board() {
  return (
    <DashboardLayout>
      <Tabs defaultValue="account" className="h-full w-full">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="h-full overflow-y-scroll">
          <TableDemo />
        </TabsContent>
        <TabsContent value="password" className="h-full overflow-y-scroll">
          <TableDemo />
        </TabsContent>
        <TabsContent value="details" className="h-full overflow-y-scroll">
          <TableDemo />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}

export default Board;
