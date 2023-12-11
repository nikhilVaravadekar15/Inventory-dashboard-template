import {
    BiLeftArrowAlt,
    BiRightArrowAlt
} from "react-icons/bi"
import { mail } from "../../zod";
import { TEmail } from "../../types/index";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthLayout from "../../components/layouts/AuthLayout"
import { ErrorMessage } from "@hookform/error-message";



function ForgetPassword() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TEmail>({
        resolver: zodResolver(mail)
    });

    return (
        <AuthLayout>
            <Link
                to={"/"}
                className="w-fit font-semibold flex gap-3 items-center transition-all duration-200 hover:text-blue-500"
            >
                <BiLeftArrowAlt className="ml-2" size={16} />
                <span>Home</span>
            </Link>
            <h2 className="text-2xl font-bold leading-tight">Forgot password</h2>
            <p className="mt-2 text-base">
                {"Forgotten your password? Enter your e-mail address below, and we'll send you an e-mail allowing you to reset it."}
            </p>
            <form
                className="mt-4"
                onSubmit={handleSubmit((data: TEmail) => {
                    console.log(data);
                })}
            >
                <div className="space-y-4">
                    <div className="h-24">
                        <div className="h-20">
                            <Label htmlFor="" className="text-base font-medium">
                                Email address
                            </Label>
                            <div className="mt-2">
                                <Input
                                    type="email"
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
                        <div className="h-4">
                            <div className="my-2 flex items-center justify-end">
                                <p className="text-sm font-medium">
                                    {"Didn't receive"}
                                </p>
                                <Button
                                    type="button"
                                    variant={"link"}
                                    className="text-sm font-semibold hover:underline hover:text-blue-500"
                                >
                                    Send again
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="h-16 flex items-center">
                        <Button
                            type="submit"
                            className="inline-flex w-full items-center justify-center rounded-md bg-gray-200 px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-gray-300"
                        >
                            Reset my password
                            <BiRightArrowAlt className="ml-2" size={16} />
                        </Button>
                    </div>
                </div>
            </form>
            <div className="mt-3 space-y-3">
                <p className="text-sm">
                    Read our
                    <span className="mx-1 capitalize cursor-pointer text-blue-500 hover:text-blue-600">
                        privacy policy
                    </span>
                    and
                    <span className="mx-1 capitalize cursor-pointer text-blue-500 hover:text-blue-600">
                        terms of service
                    </span>
                    to learn more
                </p>
            </div>
        </AuthLayout>
    )
}

export default ForgetPassword
