import type { MiddlewareConfig } from "next/server";
import createI18nMiddleware from "next-intl/middleware";

import { defaultLocale, locales } from "@/config/i18n.config";

export default createI18nMiddleware({ defaultLocale, locales });

export const config: MiddlewareConfig = {
  matcher: ["/", "/(de|en)/:path*"],
};
