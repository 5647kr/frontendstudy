const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export async function fetchTodos(): Promise<{ data: Todo[] }> {
  try {
    const response = await fetch(`${BASE_URL}/todos`, {
      cache: "force-cache",
    });
    if (!response.ok) {
      throw new Error("Failed to add todos");
    }
    return await response.json();
  } catch (e) {
    console.error("Error fetching todos:", e);
    throw e;
  }
}
