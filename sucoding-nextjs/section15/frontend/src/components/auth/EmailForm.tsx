import { EyeOffIcon, LockIcon, MailIcon } from "../ui/Icons";

export default function EmailForm() {
  return (
    <>
      <form className="flex flex-col gap-5">
        {/* <div className="rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          Error: This is a sample error message.
        </div> */}

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

        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-foreground"
          >
            Password
          </label>
          <div className="relative">
            <LockIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="h-11 w-full rounded-lg border-none bg-secondary pl-10 pr-10 text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label={"Hide password"}
            >
              <EyeOffIcon className="h-4 w-4" />
              {/* <EyeIcon className="h-4 w-4" /> */}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="h-11 rounded-lg bg-secondary text-sm font-medium text-secondary-foreground transition-colors hover:opacity-90"
          >
            Back
          </button>
          <button
            type="submit"
            className="h-11 rounded-lg bg-primary text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  );
}
