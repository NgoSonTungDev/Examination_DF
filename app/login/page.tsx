import React from "react";
import { Box } from "@mui/material";
import vie from "../../assets/images/vie.png";
import eng from "../../assets/images/eng.png";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const LoginScreen = () => {
  const { t } = useTranslation("common");

  return (
    <Box className="w-full h-[100vh] bg-[url('https://images.pexels.com/photos/4993966/pexels-photo-4993966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover grid place-items-center">
      <Box>{t("login")}</Box>
      <Box className="w-[40px] h-[40px] absolute right-7 top-7">
        <Image alt="eng" src={vie} className="rounded-full cursor-pointer" />
      </Box>
    </Box>
  );
};

export default LoginScreen;
