import Link from "next/link";
import BaseLink from "@/components/BaseLink";

export default function Navbar() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <BaseLink href="/" className="font-semibold tracking-tight">
          NS.Portfolio
        </BaseLink>

        <div className="flex gap-6 text-sm text-zinc-400">
          <BaseLink className="hover:text-white transition" href="/projects">
            Projects
          </BaseLink>
          <BaseLink className="hover:text-white transition" href="/about">
            About
          </BaseLink>
          <BaseLink className="hover:text-white transition" href="/resume">
            Resume
          </BaseLink>
        </div>

      </nav>
    </header>
  );
}