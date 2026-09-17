import Modal from "@/components/common/Modal";
import LoginMain from "@/components/auth/LoginMain";

export default function LoginInterceptPage() {
  return (
    <Modal>
      <div className="rounded-xl border border-border bg-card p-8">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-2xl font-bold text-foreground">
            Welcome to SULOG
          </h1>
          <p className="text-sm text-muted-foreground">
            Sign in with your account
          </p>
        </div>

        <LoginMain />
      </div>
    </Modal>
  );
}
