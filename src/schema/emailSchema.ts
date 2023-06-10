/**
 * Created by https://github.com/AzouKr.
 * schema/emailSchema.ts
 */

import { object, string, TypeOf } from "zod";


export const emailSchema = object({
  body: object({
    to: string({
      required_error: "Address sent to is required",
    }).email("Not a valid email"),
    subject: string({
      required_error: "subject is required",
    }),
    body: string({
        required_error: "body is required",
      }),
  }),
});

export type EmailSchema = TypeOf<typeof emailSchema>;
