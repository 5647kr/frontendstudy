"use client";

import { Search } from "lucide-react";
import Image from "next/image";

export default function TeamMember({
  teamMembers,
}: {
  teamMembers: TeamMember[];
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Select the team members you would like to invite.
          </h1>
          <p className="text-sm text-gray-500">
            An email invite will be sent on your behalf to the selected team
            members.
          </p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <form>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </form>
          </div>
        </div>

        {/* 로딩 */}
        {/* <p className="text-sm text-gray-500 mb-4">Searching...</p> */}

        <div className="space-y-1 mb-8">
          {teamMembers.map((member) => (
            <button
              key={member.id}
              className={`w-full flex items-center gap-3 p-3 rounded-md transition-colors text-left hover:bg-gray-50`}
            >
              <Image
                src={member.avatar}
                alt={member.name}
                className="w-10 h-10 rounded-full object-cover shrink-0"
                width={40}
                height={40}
              />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900 text-sm">
                  {member.name}
                </div>
                <div className="text-xs text-gray-500 truncate">
                  {member.email} · {member.lastOnline}
                </div>
              </div>
            </button>
          ))}
        </div>
        <button
          className={`w-full py-2.5 rounded-md text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700`}
        >
          Purge Member Cache
        </button>
      </div>
    </div>
  );
}
