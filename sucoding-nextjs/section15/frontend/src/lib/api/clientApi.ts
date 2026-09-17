const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface ClientApiOptions extends RequestInit {
  skipContentType?: boolean;
}

/**
 * 클라이언트 측 API 요청을 수행합니다.
 * 쿠키는 자동으로 포함됩니다 (credentials: 'include').
 * @param path - API 경로 (예: "/auth/login")
 * @param options - fetch 옵션 및 추가 설정
 * @returns fetch Response
 */
export default async function clientApi(
  path: string,
  options: ClientApiOptions = {},
): Promise<Response> {
  const { skipContentType = false, ...init } = options;

  const headers: Record<string, string> = {
    ...(init.headers as Record<string, string>),
  };

  if (!skipContentType && !(init.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  try {
    const response = await fetch(`${API_URL}${path}`, {
      ...init,
      headers,
      credentials: "include",
    });

    return response;
  } catch (error) {
    console.error(`[clientApi] Failed to fetch ${path}:`, error);
    throw error;
  }
}
