"use cache";
import { cookies, headers } from "next/headers";

export default async function PostPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // 요청 시점의 데이터에 접근하는 경우
  const cookieStore = await cookies();
  const headerStore = await headers();
  const search = await searchParams;
  const { id } = await params;

  return <h1>캐싱할 수 없음 </h1>;
}
