"use server";
import { actionClient } from "./safe-action";

import { formSchema } from "@/lib/form-schema";

export const serverAction = actionClient
  .inputSchema(formSchema)
  .action(async () => {
    return {
      success: true,
      message: "Form submitted successfully",
    };
  });
