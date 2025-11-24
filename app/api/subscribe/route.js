import { redirect } from "next/navigation";

export async function POST(req) {
  try {
    const form = await req.formData();
    const email = form.get("email");

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = process.env.BREVO_LIST_ID;

    const addContact = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        listIds: listId ? [Number(listId)] : []
      })
    });

    if (!addContact.ok) {
      return Response.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/subscribe"
      }
    });
  } catch (err) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}