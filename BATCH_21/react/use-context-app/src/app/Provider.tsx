"use client";
import { CounterContextProvider } from "@/service/CounterService/CounterContext";
import React from "react";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CounterContextProvider>{children}</CounterContextProvider>;
}
