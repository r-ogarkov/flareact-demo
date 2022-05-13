import { useRouter } from "flareact/router";
import { useTranslation } from "react-i18next";

const User = ({ user: { email, first_name, last_name, avatar } }) => {
  const router = useRouter();
  const { t } = useTranslation("users");
  return (
    <div>
      <div>
        <img src={avatar} />
        <p>{email}</p>
        <p>{first_name}</p>
        <p>{last_name}</p>
      </div>
      <div>
        <a href="" onClick={(event) => {event.preventDefault(); router.back();}}>{t("go_back_to_users_page")}</a>
      </div>
    </div>
  )
}

export const getEdgeProps = async ({ params: { id } = {} }) => {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  const { data: user } = await response.json();
  return {
    props: {
      user
    }
  }
}

export default User;
