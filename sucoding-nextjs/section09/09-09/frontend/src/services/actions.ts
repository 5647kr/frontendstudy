"use server";
import { revalidatePath } from "next/cache";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export async function addTodo(title: string) {
  try {
    const response = await fetch(`${BASE_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to add todo");
    }

    revalidatePath("/", "page");
    return await response.json();
  } catch (e) {
    console.error("Error addding todo:", e);
    throw e;
  }
}

export async function toggleTodo(id: number) {
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}/toggle`, {
      method: "PATCH",
    });

    if (!response.ok) {
      throw new Error("Failed to toggle todo");
    }

    revalidatePath("/", "page");
    return await response.json();
  } catch (e) {
    console.error("Error toggling todo:", e);
    throw e;
  }
}

export async function updateTodo(id: number, title: string) {
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update todo");
    }

    revalidatePath("/", "page");
    return await response.json();
  } catch (e) {
    console.error("Error updating todo:", e);
    throw e;
  }
}

export async function deleteTodo(id: number) {
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete todo");
    }

    revalidatePath("/", "page");
    return await response.json();
  } catch (e) {
    console.error("Error deleting todo:", e);
    throw e;
  }
}
