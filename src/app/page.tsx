'use client';
import { NextUIProvider } from "@nextui-org/react";
import Landing from "./landing/page";

export default function Home() {
  return (
  <NextUIProvider>
    <Landing />
  </NextUIProvider>
  )
}
