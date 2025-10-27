"use client";

import authApiRequest from "@/api-resquest/auth";
import { handleErrorApi } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function ButtonLogout() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await authApiRequest.logoutFromNextClientToNextServer();
      router.push("/");
    } catch (error) {
      handleErrorApi({
        error,
        duration: 3000,
      });
    }
  };

  return <Button onClick={handleLogout}>Đăng xuất</Button>;
}
