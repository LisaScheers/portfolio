"use server";
import "server-only";
import { z } from "zod";

import { verifyRecaptcha } from "@/recaptcha";
import { redirect } from "next/navigation";

import sendGrid from "@sendgrid/mail";
import { env } from "@/env";

const ContactRequestSchema = z.object({
  token: z.string(),
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactRequest(
  req: z.infer<typeof ContactRequestSchema>,
) {
  await verifyRecaptcha(req.token, "contact");
  sendGrid.setApiKey(env.SENDGRID_API_KEY);
  await sendGrid.send({
    templateId: "d-720469671a34484288251bc50ed188a7",
    from: "noreply@scheers.tech",
    to: "lisa@scheers.tech",
    dynamicTemplateData: {
      name: req.name,
      email: req.email,
      message: req.message,
    },
    headers: { Priority: "Urgent", Importance: "high", "X-Priority": "1" },
  });
  redirect("/hireme/thank-you");
}
