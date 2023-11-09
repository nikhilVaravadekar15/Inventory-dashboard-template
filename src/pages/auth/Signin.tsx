import {
    BiLeftArrowAlt,
    BiRightArrowAlt
} from "react-icons/bi"
import { z } from "zod"
import { Link } from "react-router-dom"
import { useFormik } from "formik";
import { TUsersignin } from "../../types/index";
import AuthLayout from "../../components/layouts/AuthLayout"


function Signin() {

    const formSchema = z.object({
        email: z.string()
            .min(1, "Required")
            .email("Invalid email address"),
        password: z.string()
            .min(1, "Required")
            .min(8, "Password must be greater than 8 characters")
            .max(12, "Password must be less than 12 characters")
    })

    const formik = useFormik<TUsersignin>({
        initialValues: {
            email: "",
            password: "",
        },
        validate: (values: TUsersignin) => {
            const errors: Partial<TUsersignin> = {};
            const result = formSchema.safeParse(values)

            if (!result.success) {
                const formErrors = result.error.format()

                if (formErrors.email) {
                    errors.email = formErrors.email?._errors[0]
                }
                if (formErrors.password) {
                    errors.password = formErrors.password?._errors[0]
                }

            }
            return errors
        },
        onSubmit: (values: TUsersignin) => {
            alert(JSON.stringify(values, null, 2));
        },
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
            <h2 className="text-2xl font-bold leading-tight">Sign in to your account</h2>
            <p className="mt-2 text-sm text-gray-700">
                {"Don't have an account? "}
                <Link
                    to={"/auth/sign-up"}
                    className="font-semibold transition-all duration-200 hover:underline hover:text-blue-500"
                >
                    Create a free account
                </Link>
            </p>
            <form className="mt-4" onSubmit={formik.handleSubmit}>
                <div className="space-y-2">
                    <div className="h-24">
                        <span className="text-base font-medium">
                            Email address
                        </span>
                        <div className="my-2">
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                autoComplete={"off"}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                            {
                                formik.errors.email && formik.touched.email && (
                                    <span className="text-xs text-red-500">{formik.errors.email}</span>
                                )
                            }
                        </div>
                    </div>
                    <div className="h-24">
                        <div className="flex items-center justify-between">
                            <span className="text-base font-medium">
                                Password
                            </span>
                            <Link to={"/auth/forget-password"} className="text-sm font-semibold hover:underline hover:text-blue-500">
                                Forgot password?
                            </Link>
                        </div>
                        <div className="my-2">
                            <input
                                name="password"
                                type="password"
                                placeholder="********"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                            {
                                formik.errors.password && formik.touched.password && (
                                    <span className="text-xs text-red-500">{formik.errors.password}</span>
                                )
                            }
                        </div>
                    </div>
                    <div className="h-16 flex items-center">
                        <button
                            type="submit"
                            className="inline-flex w-full items-center justify-center rounded-md bg-gray-200 px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-gray-300"
                        >
                            Get started
                            <BiRightArrowAlt className="ml-2" size={16} />
                        </button>
                    </div>
                </div>
            </form>
        </AuthLayout>
    )
}

export default Signin