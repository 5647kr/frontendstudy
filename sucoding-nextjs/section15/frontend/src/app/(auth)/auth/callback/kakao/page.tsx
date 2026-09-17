import { redirect } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ email: string; access_token: string }>;
}) {
  const { email, access_token } = await searchParams;

  if (email === "N") {
    redirect(`/login/email-info?access_token=${access_token}`);
  }
  return null;
}
