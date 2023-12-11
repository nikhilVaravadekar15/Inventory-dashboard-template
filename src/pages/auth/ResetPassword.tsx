/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
    BiLeftArrowAlt,
    BiRightArrowAlt
} from "react-icons/bi"
import { passwd } from "../../zod";
import { TPassword } from "../../types";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message"
import AuthLayout from "../../components/layouts/AuthLayout"


function ResetPassword() {
    // @ts-ignore
    const { token }: { token: string } = useParams();
    console.log(typeof (token), token)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TPassword>({
        resolver: zodResolver(passwd)
    });

    return (
        <AuthLayout>
            <a
                href="/"
                className="w-fit font-semibold flex gap-3 items-center transition-all duration-200 hover:text-blue-500"
            >
                <BiLeftArrowAlt className="ml-2" size={16} />
                <span>Home</span>
            </a>
            <h2 className="text-2xl font-bold leading-tight">Reset password</h2>
            <p className="mt-2 text-sm">
                Enter your new password below.
            </p>
            <form className="mt-4"
                onSubmit={handleSubmit((data: TPassword) => {
                    console.log(data);
                })}
            >
                <div className="space-y-4">
                    <div className="h-24">
                        <Label className="text-base font-medium">
                            New password
                        </Label>
                        <div className="mt-2">
                            <Input
                                type="text"
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
                            Reset password
                            <BiRightArrowAlt className="ml-2" size={16} />
                        </Button>
                    </div>
                </div>
            </form>
        </AuthLayout>
    )
}

export default ResetPassword
