"use client";
import { useAppSelector } from "@/redux_store";
import { PATH } from "@/types/path";
import { Box } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();
  const { access_token } = useAppSelector((state) => state.authSlice);
  const token = access_token || Cookies.get("access_token") || "";

  useEffect(() => {
    if (!token) {
      router.push(PATH.login);
    }
  }, [token]);

  return <Box className="w-full">{children}</Box>;
};

export default MainLayout;
