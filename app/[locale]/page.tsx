import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations()
  const title = t("hello-world");

  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}
