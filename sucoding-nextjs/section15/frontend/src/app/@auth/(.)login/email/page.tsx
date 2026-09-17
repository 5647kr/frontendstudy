import Modal from "@/components/common/Modal";
import EmailForm from "@/components/auth/EmailForm";

export default function EmailLoginInterceptPage() {
  return (
    <Modal>
      <div className="rounded-xl border border-border bg-card p-8">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-2xl font-bold text-foreground">
            Welcome to SULOG
          </h1>
          <p className="text-sm text-muted-foreground">
            Please enter your credentials to continue
          </p>
        </div>

        <EmailForm />
      </div>
    </Modal>
  );
}
