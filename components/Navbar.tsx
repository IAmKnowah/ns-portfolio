import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link href="/" className="font-semibold tracking-tight">
          NS.Portfolio
        </Link>

        <div className="flex gap-6 text-sm text-zinc-400">
          <Link className="hover:text-white transition" href="/projects">
            Projects
          </Link>
          <Link className="hover:text-white transition" href="/about">
            About
          </Link>
          <Link className="hover:text-white transition" href="/resume">
            Resume
          </Link>
        </div>

      </nav>
    </header>
  );
}