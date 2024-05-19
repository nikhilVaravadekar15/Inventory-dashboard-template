import { z } from "zod";

const email = z.string().min(1, "Required").email("Invalid email address");

const username = z
  .string()
  .min(1, "Required")
  .max(256, "username can not be greater then 256 characters");

const password = z
  .string()
  .min(1, "Required")
  .min(8, "Password must be greater than 8 characters")
  .max(12, "Password must be less than 12 characters");

export const name = z.object({
  username: username,
});

export const mail = z.object({
  email: email,
});

export const passwd = z.object({
  password: password,
});

export const signinFormSchema = z.object({
  usernameOrEmail: username,
  password: password,
});

export const signupFormSchema = z.object({
  username: username,
  email: email,
  password: password,
  cpassword: password,
});

export const addCategorySchema = z.object({
  productCategory: z.string().min(1, "Required"),
});

export const invoiceProductsSchema = z.object({
  category: z.string().min(1, "Required"),
  productName: z.string().min(1, "Required"),
  quantity: z.number(),
});

export const invoiceSchema = z.object({
  customerName: z.string().min(1, "Required"),
  invoiceDate: z.string().min(1, "Required"),
  products: invoiceProductsSchema.array(),
});
