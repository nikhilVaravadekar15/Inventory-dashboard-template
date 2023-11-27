import {
    BarChart,
    Wallet,
    Newspaper,
    BellRing,
    Wrench,
    LogOut,
    Settings,
    User,
    PlusCircle,
    Search,
    Pencil,
    Layers3,
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../components/ui/dropdown-menu'
import { Link } from 'react-router-dom'
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import ThemeToggle from "./ThemeToggle"


function LeftSidebar() {
    return (
        <aside className="flex h-full w-full flex-col overflow-y-auto border-r px-5 py-8 shadow-md dark:shadow-white">
            <Link
                to="/dashboard"
                className="flex gap-1 items-center">
                <img
                    alt="logo"
                    src="/logo.ico"
                    draggable={false}
                    className="rounded-md"
                />
                <div className="font-bold">Inventory</div>
            </Link>
            <div className="mt-6 flex flex-1 flex-col justify-between">
                <nav className="-mx-3 space-y-6 ">
                    <div className="space-y-3 ">
                        <Label className="px-3 text-xs font-semibold uppercase">analytics</Label>
                        <Link
                            to={"/dashboard/board"}
                            className="flex transform items-center rounded-lg px-3 py-3 transition-colors duration-300 hover:bg-gray-300 hover:text-gray-700"

                        >
                            <BarChart className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Dashboard</span>
                        </Link>
                        <Link
                            to={"/dashboard/sales"}
                            className="flex transform items-center rounded-lg px-3 py-3 transition-colors duration-300 hover:bg-gray-300 hover:text-gray-700"
                        >
                            <Wallet className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Sales</span>
                        </Link>
                    </div>
                    <div className="space-y-3 ">
                        <Label className="px-3 text-xs font-semibold uppercase">content</Label>
                        <ProductDropdownMenu />
                        <Link
                            to={"/dashboard/invoice"}
                            className="flex transform items-center rounded-lg px-3 py-3 transition-colors duration-300 hover:bg-gray-300 hover:text-gray-700"
                        >
                            <Newspaper className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Invoice</span>
                        </Link>
                        <CategoryDropdownMenu />
                    </div>
                    <div className="space-y-3 ">
                        <Label className="px-3 text-xs font-semibold uppercase">Customization</Label>
                        <SettingDropdownMenu />
                    </div>
                </nav>
            </div>
        </aside>
    )
}

function ProductDropdownMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={"ghost"}
                    className="w-full flex transform items-start justify-start rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-gray-300 hover:text-gray-700"
                >
                    <BellRing className="h-5 w-5" aria-hidden="true" />
                    <span className="mx-2 text-sm font-medium">Product</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link
                            to={"/dashboard/product/add"}
                            className="flex transform items-center rounded-lg px-4 py-4 transition-colors duration-300 cursor-pointer hover:bg-gray-300 hover:text-gray-700"
                        >
                            <PlusCircle className="mr-2 h-4 w-4" />
                            <span>Add Product</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link
                            to={"/dashboard/product/search"}
                            className="flex transform items-center rounded-lg px-4 py-4 transition-colors duration-300 cursor-pointer hover:bg-gray-300 hover:text-gray-700"
                        >
                            <Search className="mr-2 h-4 w-4" />
                            <span>Search Product</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link
                            to={"/dashboard/product/update"}
                            className="flex transform items-center rounded-lg px-4 py-4 transition-colors duration-300 cursor-pointer hover:bg-gray-300 hover:text-gray-700"
                        >
                            <Pencil className="mr-2 h-4 w-4" />
                            <span>Update Product</span>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function CategoryDropdownMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={"ghost"}
                    className="w-full flex transform items-start justify-start rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-gray-300 hover:text-gray-700"
                >
                    <Layers3 className="h-5 w-5" aria-hidden="true" />
                    <span className="mx-2 text-sm font-medium">Category</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link
                            to={"/dashboard/category/add"}
                            className="flex transform items-center rounded-lg px-4 py-4 transition-colors duration-300 cursor-pointer hover:bg-gray-300 hover:text-gray-700"
                        >
                            <PlusCircle className="mr-2 h-4 w-4" />
                            <span>Add Category</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link
                            to={"/dashboard/category/search"}
                            className="flex transform items-center rounded-lg px-4 py-4 transition-colors duration-300 cursor-pointer hover:bg-gray-300 hover:text-gray-700"
                        >
                            <Search className="mr-2 h-4 w-4" />
                            <span>Search Category</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link
                            to={"/dashboard/category/update"}
                            className="flex transform items-center rounded-lg px-4 py-4 transition-colors duration-300 cursor-pointer hover:bg-gray-300 hover:text-gray-700"
                        >
                            <Pencil className="mr-2 h-4 w-4" />
                            <span>Update Category</span>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function SettingDropdownMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Link
                    to="#"
                    className="flex transform items-center rounded-lg px-3 py-3 transition-colors duration-300 hover:bg-gray-300 hover:text-gray-700"

                >
                    <Wrench className="h-5 w-5" aria-hidden="true" />
                    <span className="mx-2 text-sm font-medium">Setting</span>
                </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>
                    My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link
                            to={"/user/profile"}
                            className="flex transform items-center rounded-lg px-4 py-4 transition-colors duration-300 cursor-pointer hover:bg-gray-300 hover:text-gray-700"
                        >
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link
                            to={"/user/settings"}
                            className="flex transform items-center rounded-lg px-4 py-4 transition-colors duration-300 cursor-pointer hover:bg-gray-300 hover:text-gray-700"
                        >
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        {/* <Link
                            to={"/user/settings"}
                            className="flex transform items-center rounded-lg px-4 py-4 transition-colors duration-300 cursor-pointer hover:bg-gray-300 hover:text-gray-700"
                        >
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                        </Link> */}
                        <ThemeToggle />
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Button
                        variant={"destructive"}
                        className="w-full"
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LeftSidebar
