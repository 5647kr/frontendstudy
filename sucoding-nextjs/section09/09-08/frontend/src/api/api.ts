export async function getTeamMembers(): Promise<TeamMemberResponse> {
  try {
    const res = await fetch("http://localhost:4000/team-members", {
      next: {
        revalidate: 60 * 60,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to Fetch Team Members");
    }

    return await res.json();
  } catch {
    throw new Error("Error to Fetch Team Members");
  }
}

export async function searchMember(query: string): Promise<TeamMemberResponse> {
  try {
    const res = await fetch(`/api/team-members/search?q=${query}`);

    if (!res.ok) {
      throw new Error("Failed to Search Team Members");
    }

    return await res.json();
  } catch {
    throw new Error("Error to Search Team Members");
  }
}
