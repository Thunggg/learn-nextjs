import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = await cookies();

  const res = await request.json();
  const sessionToken = res.payload.data.token;
  cookieStore.set("sessionToken", sessionToken, {path: "/" ,  httpOnly: true});

  return Response.json(res.payload);
}
