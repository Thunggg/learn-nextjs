import envConfig from "@/config/config";
import { cookies } from "next/headers";
import { toast } from "sonner";

export default async function MeProfile() {
  try {
    const cookieStore = await cookies();
    const sessionStorage = cookieStore.get("sessionToken");
    const result = await fetch(
      `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage?.value}`,
        },
        method: "GET",
      }
    ).then(async (res) => {
      const payload = await res.json();
      const data = {
        status: res.status,
        payload,
      };
      if (!res.ok) {
        throw data;
      }
      return data;
    });

    toast.success("Đăng nhập thành công", {
      position: "top-right",
      richColors: true,
    });
  } catch (error: any) {
    console.log(error);
  }
  return <div>Me</div>;
}
