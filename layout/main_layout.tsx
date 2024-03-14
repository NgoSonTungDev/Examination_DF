import { useAppSelector } from "@/redux_store";
import Container from "@mui/material/Container";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { PATH } from "@/types/path";
import { Box } from "@mui/material";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  const token = Cookies.get("access_token");

  return <Box className="w-full">{children}</Box>;
};

export default MainLayout;
