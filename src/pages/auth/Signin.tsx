import {
    BiRightArrowAlt
} from "react-icons/bi"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { signinFormSchema } from "../../zod";
import { TUsersignin } from "../../types/index";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import AuthLayout from "../../components/layouts/AuthLayout"


function Signin() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TUsersignin>({
        resolver: zodResolver(signinFormSchema)
    });

    return (
        <AuthLayout>
            <h2 className="text-2xl font-bold leading-tight">Sign in to your account</h2>
            <p className="mt-2 text-sm">
                {"Don't have an account? "}
                <Link
                    to={"/auth/sign-up"}
                    className="font-semibold transition-all duration-200 hover:underline hover:text-blue-500"
                >
                    Create a free account
                </Link>
            </p>
            <form className="mt-4"
                onSubmit={handleSubmit((data: TUsersignin) => {
                    console.log(data);
                })}
            >
                <div className="space-y-2">
                    <div className="h-24">
                        <Label className="text-base font-medium">
                            Email
                        </Label>
                        <div className="my-2">
                            <Input
                                type="email"
                                autoComplete={"off"}
                                {...register("email", { required: true })}
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                            <ErrorMessage
                                errors={errors}
                                name="email"
                                as={<p className="text-xs text-red-500"></p>}
                            />
                        </div>
                    </div>
                    <div className="h-24">
                        <div className="flex items-center justify-between">
                            <Label className="text-base font-medium">
                                Password
                            </Label>
                            <Link to={"/auth/forget-password"} className="text-sm font-semibold hover:underline hover:text-blue-500">
                                Forgot password?
                            </Link>
                        </div>
                        <div className="my-2">
                            <Input
                                type="password"
                                {...register("password", { required: true })}
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                            <ErrorMessage
                                errors={errors}
                                name="password"
                                as={<p className="text-xs text-red-500"></p>}
                            />
                        </div>
                    </div>
                    <div className="h-16 flex items-center">
                        <Button
                            type="submit"
                            className="inline-flex w-full items-center justify-center rounded-md bg-gray-200 px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-gray-300"
                        >
                            Get started
                            <BiRightArrowAlt className="ml-2" size={16} />
                        </Button>
                    </div>
                </div>
            </form>
        </AuthLayout>
    )
}

export default Signin
