import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { Locale } from "@/config/i18n.config";

/**
 * In Next.js 14.1.1-canary.58 getting the following compile error when using the "edge" runtime:
 * 
 * ```
 * ./node_modules/.pnpm/next@14.1.1-canary.58_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/client/components/navigation.js
 * Attempted import error: 'useContext' is not exported from 'react' (imported as 'useContext').
 * ```
 * 
 * When *not* using the "edge" runtime, everything compiles without error.
 * 
 * Also note that with 14.1.0 everything compiles without error when using the "edge" runtime.
 */
export const runtime = "edge";

export const size = { width: 1200, height: 630 };

export default async function OpenGraphImage({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale });
  const title = t("hello-world");

  return new ImageResponse(<div>{title}</div>, { ...size });
}
