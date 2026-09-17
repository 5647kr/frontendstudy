import Modal from "@/components/common/Modal";
import EmailInfoForm from "@/components/auth/EmailInfoForm";
import { Suspense } from "react";

export default function EmailInfoInterceptPage() {
  return (
    <Modal>
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
    </Modal>
  );
}
