"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function SearchShortcut() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const isModK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
      if (isModK) {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const term = q.trim();
    setOpen(false);
    setQ("");
    router.push(`/directory${term ? `?q=${encodeURIComponent(term)}` : ""}`);
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-shortcut-title"
      className="fixed inset-0 z-50 flex items-start justify-center bg-ink/70 px-4 pt-[max(5rem,calc(0.5rem+env(safe-area-inset-top,0px)))]"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-h-[min(85dvh,36rem)] max-w-2xl overflow-y-auto bg-paper-cream border-2 border-ink animate-drawer-pull"
      >
        <div className="flex items-center justify-between px-4 py-2 border-b border-ink ledger-sm">
          <span id="search-shortcut-title">CARD · CATALOG · DRAWER · 0001</span>
          <span aria-hidden="true">⌘ K · ESC · TO · CLOSE</span>
        </div>
        <form onSubmit={submit} className="catalog-search px-4 border-b border-ink">
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="SEARCH · BY · TITLE · CODE · TAG · CITATION"
            aria-label="Search the directory"
          />
        </form>
        <ul className="px-4 py-3 ledger-sm flex flex-wrap gap-x-5 gap-y-2 opacity-80">
          <li>· TCPA</li>
          <li>· CMS · MCMG</li>
          <li>· HIPAA</li>
          <li>· SOA</li>
          <li>· VOICE · VERIFICATION</li>
          <li>· BOX · ARCHIVE</li>
        </ul>
        <div className="px-4 py-3 border-t border-ink flex items-center justify-between ledger-sm">
          <span>ENTER · TO · FILE · QUERY</span>
          <span className="opacity-70">RETURNS · TO · /DIRECTORY</span>
        </div>
      </div>
    </div>
  );
}
