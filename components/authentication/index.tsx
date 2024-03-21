"use client";
import client from "@/clients";
import { useAppSelector } from "@/redux_store";
import React, { useEffect } from "react";
import Cookies from "js-cookie";

const Authentication = () => {
  const { access_token } = useAppSelector((state) => state.authSlice);
  const token = access_token || Cookies.get("access_token") || "";

  useEffect(() => {
    if (token) {
      client.setToken(token);
    }
  }, [token]);

  return <React.Fragment />;
};

export default Authentication;
