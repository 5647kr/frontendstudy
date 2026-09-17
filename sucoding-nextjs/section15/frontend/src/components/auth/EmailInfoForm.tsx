"use client";
import { useState } from "react";
import { MailIcon } from "../ui/Icons";
import { validateEmail } from "@/lib/validation";
import clientApi from "@/lib/api/clientApi";
import { useSearchParams, useRouter } from "next/navigation";

export default function EmailInfoForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const accessToken = searchParams.get("access_token") ?? "";
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submitting) return;

    setError("");

    // 이메일 검증
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validateEmail);
      return;
    }

    // 확인 대화상자
    const confirmed = window.confirm(
      "한 번 입력한 이메일은 변경할 수 없습니다. 이 이메일로 저장할까요?",
    );

    if (!confirmed) return;

    setSubmitting(true);

    try {
      const res = await clientApi("/auth/update-email", {
        method: "PATCH",
        body: JSON.stringify({ email: email.trim() }),
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(
          (errorData && errorData.error) || "이메일 업데이트에 실패하였습니다.",
        );
      }

      router.replace("/");
      router.refresh();
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "이메일 업데이트에 실패하였습니다.",
      );
    }
  };
  return (
    <>
      <form className="flex flex-col gap-5" onSubmit={handleFormSubmit}>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground">
            Email Address
          </label>
          <div className="relative">
            <MailIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="h-11 w-full rounded-lg border-none bg-secondary pl-10 pr-4 text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {error && (
          <p className="text-sm font-medium text-destructive">{error}</p>
        )}

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="h-11 rounded-lg bg-secondary text-sm font-medium text-secondary-foreground transition-colors hover:opacity-90">
            Cancel
          </button>
          <button
            type="submit"
            className="h-11 rounded-lg bg-primary text-sm font-medium text-primary-foreground transition-colors hover:opacity-90">
            Continue
          </button>
        </div>
      </form>
    </>
  );
}
