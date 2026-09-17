import { MailIcon } from "../ui/Icons";

export default function EmailInfoForm() {
  return (
    <>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email Address
          </label>
          <div className="relative">
            <MailIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="h-11 w-full rounded-lg border-none bg-secondary pl-10 pr-4 text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <p className="text-sm font-medium text-destructive">
          Error: Invalid email address
        </p>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="h-11 rounded-lg bg-secondary text-sm font-medium text-secondary-foreground transition-colors hover:opacity-90"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="h-11 rounded-lg bg-primary text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Continue
          </button>
        </div>
      </form>
    </>
  );
}
