import "server-only";

import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { isValidLocale } from "@/config/i18n.config";

export default getRequestConfig(async ({ locale }) => {
	if (!isValidLocale(locale)) notFound();

	const _messages = await import(`@/messages/${locale}.json`)
	const messages = _messages.default as IntlMessages;
	const timeZone = "UTC";

	return {
		messages,
		timeZone,
	};
});
