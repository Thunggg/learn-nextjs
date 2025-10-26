import accountApiRequest from "@/api-resquest/account";
import { cookies } from "next/headers";
import { toast } from "sonner";

export default async function MeProfile() {
  try {
    const cookieStore = await cookies();
    const sessionStorage = cookieStore.get("sessionToken");
    const result = await accountApiRequest.me(sessionStorage?.value ?? "");

    toast.success("Đăng nhập thành công", {
      position: "top-right",
      richColors: true,
    });
  } catch (error: any) {
    console.log(error);
  }
  return <div>Me</div>;
}
