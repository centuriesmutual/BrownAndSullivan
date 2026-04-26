import {
  ChevronRight,
  FolderOpen,
  LayoutGrid,
  MoreHorizontal,
  Plus,
  Search,
  Upload,
  FileText,
  FileSpreadsheet,
} from "lucide-react";

const files = [
  {
    id: "01",
    name: "Operating Agreement.pdf",
    body: "Defines agent authority, consumer notice, escalation standards, file ownership, and evidence retention before work begins.",
    type: "PDF",
    modified: "2026-04-25",
    size: "284 KB",
    icon: "pdf" as const,
  },
  {
    id: "02",
    name: "Counsel Review Memo.docx",
    body: "Records counsel review of disclosure language, complaint response, retention posture, and carrier-facing production standards.",
    type: "Word",
    modified: "2026-04-24",
    size: "112 KB",
    icon: "doc" as const,
  },
  {
    id: "03",
    name: "Disclosure Register.xlsx",
    body: "Indexes CMS, TCPA, recording, and scope notices as required events before any product recommendation is made.",
    type: "Excel",
    modified: "2026-04-23",
    size: "96 KB",
    icon: "xls" as const,
  },
  {
    id: "04",
    name: "Audit Production Folder",
    body: "Assembles the retained record continuously so regulators, carriers, and consumers can receive a coherent file without reconstruction.",
    type: "Folder",
    modified: "2026-04-22",
    size: "—",
    icon: "folder" as const,
  },
];

const sidebarNav = [
  { label: "All files", active: true },
  { label: "Governing", active: false },
  { label: "Production", active: false },
  { label: "Shared", active: false },
  { label: "Starred", active: false },
];

const stats = [
  ["04", "governing files"],
  ["10y", "Medicare retention"],
  ["07y", "ACA retention"],
  ["01", "counsel standard"],
];

function FileIcon({ kind }: { kind: (typeof files)[number]["icon"] }) {
  if (kind === "folder") {
    return (
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-paper-cream text-ink">
        <FolderOpen className="h-5 w-5" strokeWidth={1.5} aria-hidden />
      </span>
    );
  }
  if (kind === "xls") {
    return (
      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray bg-white text-ink">
        <FileSpreadsheet className="h-5 w-5" strokeWidth={1.5} aria-hidden />
      </span>
    );
  }
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray bg-white text-ink">
      <FileText className="h-5 w-5" strokeWidth={1.5} aria-hidden />
    </span>
  );
}

export function WorkflowSystem() {
  return (
    <section className="section-y border-y border-gray bg-[#F2F2F0]">
      <div className="container-grid max-w-6xl">
        <p className="ledger-sm mb-4 text-center text-ink-wash lg:text-left">
          Legal Operating Layer
        </p>
        <h2 className="display-section mb-3 text-center lg:text-left">
          The engagement is governed before it is performed.
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-base leading-8 text-ink-wash lg:mx-0 lg:text-left">
          Brown &amp; Sullivan maintains its operating model as a document
          system: agreement, disclosure register, counsel review, and
          production folder. The view below is structured like a file
          browser — the same organization regulators and carriers expect when
          they request a coherent record.
        </p>

        <div
          className="overflow-hidden rounded-2xl border border-[#D0D0CE] bg-white shadow-[0_1px_0_#E0E0DE,0_8px_24px_rgba(10,10,10,0.08),0_32px_64px_rgba(10,10,10,0.06)]"
          role="region"
          aria-label="Document browser preview"
        >
          {/* Window chrome (Dropbox-style) */}
          <div className="flex items-center justify-between border-b border-[#E8E8E6] bg-[#FAFAF8] px-3 py-2.5 pl-4">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full border border-[#C5C5C3] bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full border border-[#B8B8B4] bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full border border-[#9E9E9A] bg-[#28C840]" />
            </div>
            <p className="hidden font-mono text-[10px] uppercase tracking-[0.12em] text-ink/45 sm:block">
              Brown &amp; Sullivan — Legal Operating Layer
            </p>
            <div className="w-10" aria-hidden="true" />
          </div>

          {/* App bar: search (Dropbox global search) */}
          <div className="border-b border-[#E8E8E6] bg-white px-3 py-2.5 sm:px-4">
            <div className="mx-auto flex max-w-3xl items-center gap-2 rounded-lg border border-[#D8D8D4] bg-[#F5F5F2] px-3 py-2 text-sm text-ink/55">
              <Search className="h-4 w-4 shrink-0 text-ink/40" strokeWidth={2} />
              <span>Search in Legal Operating Layer</span>
            </div>
          </div>

          <div className="flex min-h-[min(520px,70vh)] flex-col lg:flex-row">
            {/* Left sidebar (Dropbox) */}
            <aside className="w-full border-b border-[#E8E8E6] bg-[#F7F7F4] lg:w-[220px] lg:border-b-0 lg:border-r">
              <div className="p-2">
                {sidebarNav.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className={
                      item.active
                        ? "flex w-full items-center gap-2 rounded-md bg-white px-3 py-2.5 text-left text-sm font-medium text-ink shadow-sm ring-1 ring-[#E0E0DC]"
                        : "flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-left text-sm text-ink/55 hover:bg-white/80"
                    }
                  >
                    <LayoutGrid
                      className="h-4 w-4 shrink-0"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="mt-2 border-t border-[#E8E8E6] p-3">
                <p className="px-1 font-mono text-[9px] uppercase tracking-[0.1em] text-ink/40">
                  Storage
                </p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#E0E0DC]">
                  <div className="h-full w-[32%] rounded-full bg-ink" />
                </div>
                <p className="mt-1.5 text-[11px] text-ink/50">
                  4 of 12 governing files indexed
                </p>
              </div>
            </aside>

            {/* Main file list area */}
            <div className="min-w-0 flex-1 bg-white">
              {/* Breadcrumb + toolbar (Dropbox) */}
              <div className="border-b border-[#E8E8E6] px-3 py-3 sm:px-4">
                <nav
                  className="mb-3 flex flex-wrap items-center gap-1 text-sm text-ink/55"
                  aria-label="Breadcrumb"
                >
                  <span className="font-medium text-ink">All files</span>
                  <ChevronRight className="h-4 w-4 text-ink/35" aria-hidden />
                  <span className="text-ink/70">Legal Operating Layer</span>
                  <ChevronRight className="h-4 w-4 text-ink/35" aria-hidden />
                  <span className="text-ink">Governing</span>
                </nav>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="inline-flex h-8 items-center gap-1.5 rounded-md border border-[#CFCFC8] bg-white px-3 text-xs font-medium text-ink shadow-sm hover:bg-[#F9F9F6]"
                    >
                      <Upload className="h-3.5 w-3.5" strokeWidth={2} />
                      Upload
                    </button>
                    <button
                      type="button"
                      className="inline-flex h-8 items-center gap-1.5 rounded-md border border-ink bg-ink px-3 text-xs font-medium text-white hover:bg-ink/90"
                    >
                      <Plus className="h-3.5 w-3.5" strokeWidth={2} />
                      Create
                    </button>
                    <button
                      type="button"
                      className="inline-flex h-8 items-center justify-center rounded-md border border-[#CFCFC8] bg-white px-2 text-ink/70 hover:bg-[#F9F9F6]"
                      aria-label="More actions"
                    >
                      <MoreHorizontal className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>

              {/* List header (Dropbox list view) */}
              <div className="hidden border-b border-[#E8E8E6] bg-[#FAFAF8] px-4 sm:grid sm:grid-cols-[1fr_120px_100px] sm:gap-4">
                <div className="py-2.5 text-left text-xs font-medium uppercase tracking-wider text-ink/45">
                  Name
                </div>
                <div className="py-2.5 text-left text-xs font-medium uppercase tracking-wider text-ink/45">
                  Last modified
                </div>
                <div className="py-2.5 text-left text-xs font-medium uppercase tracking-wider text-ink/45">
                  Size
                </div>
              </div>

              <ul className="divide-y divide-[#E8E8E6]">
                {files.map((file) => (
                  <li key={file.id}>
                    <div className="px-2 py-3 transition hover:bg-[#F4F4F0] sm:px-4">
                      <div className="sm:grid sm:grid-cols-[1fr_120px_100px] sm:items-center sm:gap-4">
                        <div className="flex min-w-0 items-start gap-3">
                          <FileIcon kind={file.icon} />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-ink">
                              {file.name}
                            </p>
                            <p className="mt-1 line-clamp-2 text-xs leading-5 text-ink/50 sm:line-clamp-2">
                              {file.body}
                            </p>
                            <p className="mt-1 font-mono text-[10px] text-ink/40 sm:hidden">
                              DOC · {file.id}
                            </p>
                          </div>
                        </div>
                        <p className="ml-12 mt-1 font-mono text-xs text-ink/45 sm:ml-0 sm:mt-0">
                          {file.modified}
                        </p>
                        <p className="ml-12 mt-0.5 text-xs text-ink/50 sm:ml-0 sm:mt-0">
                          {file.size}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats strip (tied to the “folder”) — Dropbox style summary row */}
          <div className="grid gap-0 border-t border-[#E8E8E6] bg-[#FAFAF8] sm:grid-cols-4">
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="border-b border-[#E8E8E6] px-4 py-3 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <p className="text-lg font-semibold tabular-nums text-ink">
                  {value}
                </p>
                <p className="text-[11px] uppercase tracking-[0.08em] text-ink/45">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
