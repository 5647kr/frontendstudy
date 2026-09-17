import EmailInfoForm from "@/components/auth/EmailInfoForm";
import { Suspense } from "react";

export default function EmailInfoPage() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-16 min-h-[calc(100vh-60px-76px)] translate-y-1.75">
      <div className="relative z-10 w-full max-w-md px-4">
        <div className="rounded-xl border border-border bg-card p-8">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-2xl font-bold text-foreground">
              {"You're almost there"}
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign up with just your email!
            </p>
          </div>

          <Suspense fallback={null}>
            <EmailInfoForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
