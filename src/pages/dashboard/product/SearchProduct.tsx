import {
    Search
} from "lucide-react"
import { useForm } from "react-hook-form";
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button";
import DashboardLayout from "../../../components/layouts/DashboardLayout"
import TableDemo from "../../../components/Table";

type TQuery = {
    search: string
}

function SearchProduct() {

    const { register, handleSubmit } = useForm<TQuery>();

    return (
        <DashboardLayout>
            <div className="mb-4 flex gap-1 flex-col">
                <div>Search product</div>
                <form
                    className="w-full flex gap-2 items-center"
                    onSubmit={handleSubmit((data: TQuery) => {
                        console.log(data);
                    })}>
                    <div className="w-full flex flex-col">
                        <Input
                            type="text"
                            autoComplete={"off"}
                            {...register("search", { required: true })}
                        />
                    </div>
                    <Button
                        type="submit"
                        variant={"outline"}
                        className="font-semibold rounded-full"
                    >
                        <Search />
                    </Button>
                </form>
            </div>
            <div className="h-full overflow-y-scroll">
                <TableDemo />
            </div>
        </DashboardLayout >
    )
}

export default SearchProduct

