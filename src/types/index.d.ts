import { z } from "zod"
import {
    mail,
    name,
    passwd,
    signinFormSchema,
    signupFormSchema,
    addProductSchema,
    addCategorySchema,
} from "../zod/index"


export type TName = z.infer<typeof name>
export type TEmail = z.infer<typeof mail>
export type TPassword = z.infer<typeof passwd>

export type TUsersignin = z.infer<typeof signinFormSchema>
export type TUsersignup = z.infer<typeof signupFormSchema>

export type TAddProductSchema = z.infer<typeof addProductSchema>
export type TAddCategorySchema = z.infer<typeof addCategorySchema>
