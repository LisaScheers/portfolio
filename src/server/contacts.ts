import { db } from "@/server/db";
import { Contacts } from "@/server/db/schema";

export async function createContact(contact: {
  name: string;
  email: string;
  message: string;
}) {
  const tmp = {
    name: contact.name,
    email: contact.email,
    message: contact.message,
    date: new Date().toISOString(),
  };
  return db.insert(Contacts).values(tmp).execute();
}
