interface TeamMember {
  id: string;
  name: string;
  email: string;
  lastOnline: string;
  avatar: string;
}

interface TeamMemberResponse {
  ok: boolean;
  count: number;
  data: TeamMember[];
}
