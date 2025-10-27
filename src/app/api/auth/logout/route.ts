import authApiRequest from "@/api-resquest/auth";
import { HttpError } from "@/lib/http";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = await cookies();

  const sessionToken = cookieStore.get("sessionToken")?.value as string;

  if (!sessionToken) {
    return Response.json(
      { message: "không nhận được session token" },
      { status: 400 }
    );
  }

  try {
    const result = await authApiRequest.logoutFromNextServerToServer(
      sessionToken
    );

    return Response.json(result.payload, {
      status: 200,
      headers: {
        "Set-Cookie": "sessionToken=; Path=/; HttpOnly; Max-Age=0",
      },
    });
  } catch (error) {
    if (error instanceof HttpError) {
      return Response.json(error.payload, { status: error.status });
    } else {
      return Response.json({ message: "Lỗi không xác định" }, { status: 500 });
    }
  }
}
