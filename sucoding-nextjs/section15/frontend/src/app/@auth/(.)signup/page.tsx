import Modal from "@/components/common/Modal";
import SignupForm from "@/components/auth/SignupForm";

export default function SignupInterceptPage() {
  return (
    <Modal>
      <div className="rounded-xl border border-border bg-card p-8">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-2xl font-bold text-foreground">
            Create Account
          </h1>
          <p className="text-sm text-muted-foreground">
            Sign up to start using SULOG
          </p>
        </div>

        <SignupForm />
      </div>
    </Modal>
  );
}
