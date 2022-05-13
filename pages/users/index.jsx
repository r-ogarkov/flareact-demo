import Link from "flareact/link";
import { useTranslation } from "react-i18next";

const Users = ({ users }) => {
  const { t } = useTranslation("users");
return (
    <div>
      <h1>{t("users")}</h1>
      <ul>
        {
          users.map(({ email, id }) => {
            return (
              <li key={id} style={{ marginBottom: "10px" }}>
                <Link href="/users/[id]" as={`/users/${id}`}><a>{email}</a></Link>
              </li>
            )
          })
        }
      </ul>
      <div>
        <Link href="/users" as="/users?page=1"><a>{t("page")} 1</a></Link> {" "}
        <Link href="/users" as="/users?page=2"><a>{t("page")} 2</a></Link>
      </div>
      <br/>
      <div>
        <Link href="/"><a>{t("go_to_home_page")}</a></Link>
      </div>
    </div>
  )
}

export const getEdgeProps = async ({ query: { page = 1 } = {} }) => {
  const response = await fetch(`https://reqres.in/api/users?page=${page}`);
  const { data: users } = await response.json();
  return {
    props: {
      users
    }
  }
}

export default Users;
