import {
    BiLeftArrowAlt,
    BiRightArrowAlt
} from "react-icons/bi"
import { Link } from "react-router-dom"
import { TUsersignup } from "../../types/index";
import AuthLayout from "../../components/layouts/AuthLayout"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupFormSchema } from "../../zod";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { ErrorMessage } from "@hookform/error-message";


function Signup() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TUsersignup>({
        resolver: zodResolver(signupFormSchema)
    });

    return (
        <AuthLayout>
            <Link
                to={"/"}
                className="w-fit font-semibold flex gap-3 items-center transition-all duration-200 hover:text-blue-500"
            >
                <BiLeftArrowAlt className="ml-2" size={16} />
                <span>Back</span>
            </Link>
            <h2 className="text-2xl font-bold leading-tight">Sign up to create account</h2>
            <p className="mt-2 text-base">
                {"Already have an account? "}
                <Link
                    to={"/auth/sign-in"}
                    className="font-semibold transition-all duration-200 hover:underline hover:text-blue-500"
                >
                    Sign In
                </Link>
            </p>
            <form className="mt-4"
                onSubmit={handleSubmit((data: TUsersignup) => {
                    console.log(data);
                })}
            >
                <div className="space-y-1">
                    <div className="h-24">
                        <Label className="text-base font-medium">
                            Fullname
                        </Label>
                        <div>
                            <Input
                                type="text"
                                autoComplete={"off"}
                                {...register("username", { required: true })}
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                            <ErrorMessage
                                errors={errors}
                                name="username"
                                as={<p className="text-xs text-red-500"></p>}
                            />
                        </div>
                    </div>
                    <div className="h-24">
                        <Label className="text-base font-medium">
                            Email
                        </Label>
                        <div>
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
                        </div>
                        <div>
                            <Input
                                type="password"
                                autoComplete={"off"}
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

export default Signup
