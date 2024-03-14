"use client";

import { FormInput } from "@/components/hook_form";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import * as yup from "yup";
import vie from "../assets/images/vie.png";
import eng from "../assets/images/eng.png";
import { useForm } from "react-hook-form";
import { ILogin } from "@/types/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/redux_store";
import { login } from "@/redux_store/auth/auth_action";

import { PATH } from "@/types/path";
import { useRouter } from "next/navigation";
import { useIsRequestPending } from "@/hooks";
import { LoadingButton } from "@mui/lab";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isLoading = useIsRequestPending("auth", "login");
  const { t } = useTranslation("common");
  const locale = "vi";

  const validationInput = yup.object().shape({
    email: yup
      .string()
      .required("Không được bỏ trống email")
      .email("Không đúng định dạng email"),
    password: yup.string().required(),
  });

  const { control, handleSubmit } = useForm<ILogin>({
    defaultValues: {
      email: "frontend.exam@digitalfortress.dev",
      password: "FrontendExam",
    },
    resolver: yupResolver(validationInput),
  });

  const handleLogin = (data: ILogin) => {
    dispatch(login(data))
      .unwrap()
      .then((data) => {
        router.push(PATH.home);
      });
  };

  return (
    <Box className="w-full h-[100vh] bg-[url('https://images.pexels.com/photos/4993966/pexels-photo-4993966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover grid place-items-center">
      <Box
        component={"form"}
        onSubmit={handleSubmit(handleLogin)}
        className="w-[400px]  backdrop-blur-sm bg-white/30 flex flex-col items-center p-5 rounded-md gap-2"
      >
        <Typography className="text-2xl">Đăng nhập {t("login")}</Typography>
        <FormInput control={control} name="email" label="Email" />
        <FormInput
          control={control}
          name="password"
          type="password"
          label="Password"
        />
        <LoadingButton loading={isLoading} type="submit" variant="outlined">
          Login
        </LoadingButton>
      </Box>
      <Box className="w-[40px] h-[40px] absolute right-7 top-7">
        {/* <Link href={router} locale={locale === "vi" ? "en" : "vi"}> */}
        <Image
          alt="eng"
          src={locale === "vi" ? vie : eng}
          className="rounded-full cursor-pointer"
        />
        {/* </Link> */}
      </Box>
    </Box>
  );
};

export default Login;
