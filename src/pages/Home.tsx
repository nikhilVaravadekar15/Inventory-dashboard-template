import { Link } from "react-router-dom"
import RootLayout from "../components/layouts/RootLayout"


function Home() {
    return (
        <RootLayout>
            <div className="w-full h-full flex flex-col">
                <div className="w-full p-4 flex items-center justify-between border shadow dark:shadow-white">
                    <div className="flex gap-3 items-center justify-center cursor-pointer">
                        <img
                            alt="logo"
                            src="/logo.ico"
                            draggable={false}
                            className="rounded-md"
                        />
                        <div>Inventory-dashboard</div>
                    </div>
                    <div className="flex gap-3 items-center justify-center">
                        <Link
                            to={"/auth/sign-in"}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Signin
                        </Link>
                        <Link
                            to={"/auth/sign-up"}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Signup
                        </Link>
                    </div>
                </div>
            </div>
        </RootLayout>
    )
}

export default Home
