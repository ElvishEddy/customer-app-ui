import { ReactElement } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

import { EmotionCache } from "@emotion/react";

export interface LayoutProps {
  children: React.ReactNode;
}

export type NextPageWithLayout = NextPage & {
  Layout?: (props: LayoutProps) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};
