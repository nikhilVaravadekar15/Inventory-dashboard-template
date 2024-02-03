import {
    BsPatchCheck
} from "react-icons/bs"
import {
    BiRightArrowAlt
} from "react-icons/bi"
import { Link } from "react-router-dom"
import AuthLayout from "../../components/layouts/AuthLayout"

function SignupCompleted() {

    return (
        <AuthLayout>
            <div className="font-semibold flex gap-3 items-center transition-all duration-200">
                <BsPatchCheck size="2rem" className="text-green-600 hover:text-green-700" />
                <h1 className="text-2xl font-bold leading-tight">Accout created</h1>
            </div>
            <div className="mt-2 text-base">
                Hurray! Your accout has been created. You can now login.
            </div>
            <div className="mt-4">
                <Link
                    to={"/auth/sign-in"}
                    className="flex w-full items-center justify-center rounded-md bg-gray-200 px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-gray-300"
                >
                    Sign In
                    <BiRightArrowAlt className="ml-2 font-black" size={16} />
                </Link>
            </div>
        </AuthLayout>
    )
}

export default SignupCompleted
