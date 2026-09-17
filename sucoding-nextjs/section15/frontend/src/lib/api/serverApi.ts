"use server";

import { cookies } from "next/headers";

const API_URL = process.env.API_URL || "http://localhost:40010";

interface ServerApiOptions extends RequestInit {
  skipContentType?: boolean;
}

/**
 * 서버 측 API 요청을 수행합니다.
 * 쿠키가 있으면 자동으로 포함됩니다.
 * @param path - API 경로 (예: "/auth/login")
 * @param options - fetch 옵션 및 추가 설정
 * @returns fetch Response
 */
export async function serverApi(
  path: string,
  options: ServerApiOptions = {},
): Promise<Response> {
  const { skipContentType = false, ...init } = options;

  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  const headers: Record<string, string> = {
    ...(init.headers as Record<string, string>),
  };

  if (!skipContentType && !(init.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  if (cookieHeader) {
    headers.Cookie = cookieHeader;
  }

  try {
    return await fetch(`${API_URL}${path}`, {
      ...init,
      headers,
    });
  } catch (error) {
    console.error(`[serverApi] Failed to fetch ${path}:`, error);
    throw error;
  }
}
