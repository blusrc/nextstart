import { ThemeToggle } from "@/components/theme-toggle";
import SonnerDemo from "@/components/toast-example";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <span className="font-bold tracking-tight">appname</span>
        <SonnerDemo />
        <ThemeToggle />
      </div>
    </main>
  );
}
