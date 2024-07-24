import Airtable from "airtable";
import { NextApiRequest, NextApiResponse } from "next";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    email: string;
  };
}

const base = new Airtable({ apiKey: process.env.AIRTABLE_ACCESS_TOKEN }).base(
  process.env.AIRTABLE_BASE_ID as string
);

export async function POST(req: any, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email } = await req.json();

    try {
      await base("Emails").create([
        {
          fields: {
            "Email Address": email,
          },
        },
      ]);

      return Response.json({ message: "Email added successfully" });
    } catch (error) {
      console.error(error);
      return Response.json({ message: "Adding email has failed", error });
    }
  } else {
    return Response.json({ message: "Method not allowed" });
  }
}
