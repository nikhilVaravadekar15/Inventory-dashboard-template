import { z } from "zod";

const email = z.string()
    .min(1, "Required")
    .email("Invalid email address")

const username = z.string()
    .min(1, "Required")
    .max(256, "username can not be greater then 256 characters")

const password = z.string()
    .min(1, "Required")
    .min(8, "Password must be greater than 8 characters")
    .max(12, "Password must be less than 12 characters")

export const name = z.object({
    username: username
})

export const mail = z.object({
    email: email
})

export const passwd = z.object({
    password: password
})

export const signinFormSchema = z.object({
    email: email,
    password: password
})

export const signupFormSchema = z.object({
    username: username,
    email: email,
    password: password
})

export const addProductSchema = z.object({
    name: z.string()
        .min(1, "Required"),
    batchNo: z.string()
        .min(1, "Required"),
    quantity: z.string(),
    purchasePrice: z.string(),
    sellingPrice: z.string(),
    manufacturingDate: z.string(),
    expiryDate: z.string(),
    category: z.string(),
    description: z.string().optional()
})

export const addCategorySchema = z.object({
    name: z.string()
        .min(1, "Required"),
    description: z.string().optional()
})
