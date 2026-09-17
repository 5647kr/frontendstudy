import Link from "next/link";
import { KakaoIcon, MailIcon } from "../ui/Icons";

export default function LoginMain() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Link
          href="/login/email"
          className="flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-card text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          <MailIcon className="h-5 w-5" />
          Continue with Email
        </Link>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">
            Or continue with
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <button
          type="button"
          className="flex h-12 items-center justify-center gap-2 rounded-lg bg-[#FEE500] text-sm font-medium text-[#191919] transition-opacity hover:opacity-90"
        >
          <KakaoIcon className="h-5 w-5" />
          Continue with Kakao
        </button>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">
            {"Don't have an account?"}
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <Link
          href="/signup"
          className="flex h-12 items-center justify-center rounded-lg bg-secondary text-sm font-medium text-secondary-foreground transition-colors hover:opacity-90"
          replace={true}
        >
          Create an account
        </Link>
      </div>
    </>
  );
}
