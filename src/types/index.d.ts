import { z } from "zod";
import {
  mail,
  name,
  passwd,
  signinFormSchema,
  signupFormSchema,
  addCategorySchema,
  invoiceProductsSchema,
  invoiceSchema,
} from "../zod/index";

export type TName = z.infer<typeof name>;
export type TEmail = z.infer<typeof mail>;
export type TPassword = z.infer<typeof passwd>;

export type TUsersignin = z.infer<typeof signinFormSchema>;
export type TUsersignup = z.infer<typeof signupFormSchema>;

export type TAddCategorySchema = z.infer<typeof addCategorySchema>;
export type TInvoiceProducts = z.infer<typeof invoiceProductsSchema>;
export type TInvoice = z.infer<typeof invoiceSchema>;

export type TUser = {
  tokenType: string;
};

export type TToken = {
  accessToken: string;
  tokenType: string;
};

export type TTokenContext = {
  token: TToken;
  setTokenDetails: (token: TToken) => void;
};

// type TInvoiceProducts = {
//     category: string
//     productName: string
//     quantity: number
// }

// type TInvoice = {
//     customerName: string
//     invoiceDate: string
//     products: TInvoiceProducts[]
// }
