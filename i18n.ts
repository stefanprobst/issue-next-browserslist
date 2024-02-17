import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
	const _messages = await import(`@/messages/${locale}.json`)
	const messages = _messages.default as IntlMessages;
	const timeZone = "UTC";

	return {
		messages,
		timeZone,
	};
});
