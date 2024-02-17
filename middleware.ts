import createI18nMiddleware from "next-intl/middleware";

import { defaultLocale, locales } from "@/config/i18n.config";

export default createI18nMiddleware({ defaultLocale, locales });

export const config = {
  matcher: ["/", "/(de|en)/:path*"],
};
