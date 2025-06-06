"use server";

// this function will return a Promise with success and message as object
export async function createTicket(
  prevState: { success: boolean; message: boolean },
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  const subject = formData.get("subject") as string;
  const description = formData.get("description") as string;
  const priority = formData.get("priority") as string;

  return { success: true, message: "Ticket created successfully" };
}
