import { cookies, headers } from "next/headers";

export default async function Page() {
  const headerList = await headers();

  const cookieStore = await cookies();
  const nameCookie = cookieStore.get("name");
  return (
    <>
      <h1>user-agent: {headerList.get("user-agent")}</h1>
      <h1>user-agent: {headerList.get("host")}</h1>
      <h1>user-agent: {headerList.get("host")}</h1>

      <h1>nameCookie: {nameCookie?.value}</h1>
    </>
  );
}
