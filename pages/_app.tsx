import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { config } from '../config/wagmi';

const queryClient = new QueryClient();

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import '@rainbow-me/rainbowkit/styles.css';


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider ><Component {...pageProps} /></RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </NextThemesProvider>
  </NextUIProvider >
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
