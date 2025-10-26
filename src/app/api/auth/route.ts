import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = await cookies();

  const res = await request.json();
  const sessionToken = res.sessionToken as string;

  if (!sessionToken) {
    return Response.json(
      { message: "không nhận được session token" },
      { status: 400 }
    );
  }

  cookieStore.set("sessionToken", sessionToken, { path: "/", httpOnly: true });

  return Response.json(res);
}
