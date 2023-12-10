"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { web3wallTheme } from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={web3wallTheme}>{children}</ChakraProvider>;
}
