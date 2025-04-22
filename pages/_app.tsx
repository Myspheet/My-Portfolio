import type { AppProps } from "next/app";
import "../styles/global.css";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo } from "next-seo";
import SEO from "@/next-seo.config";

const DynamicLayout = dynamic(() => import("@/components/Layout"), {
  ssr: false,
});
const DynamicTransition = dynamic(() => import("@/components/Transition"), {
  ssr: false,
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <DynamicLayout>
        <AnimatePresence mode="wait">
          <DynamicTransition />
          <Component {...pageProps} />
          <Analytics />
        </AnimatePresence>
      </DynamicLayout>
    </>
  );
}
