import Link from "flareact/link";
import { useTranslation } from "react-i18next";

export default function Index() {
  const { t } = useTranslation("index");
  return (
    <div>
      <h1>
        {t("welcome_to_flareact")}
      </h1>
      <Link href="/users" as="/users?page=1"><a>{t("go_to_user_page")}</a></Link>
    </div>
  );
}
