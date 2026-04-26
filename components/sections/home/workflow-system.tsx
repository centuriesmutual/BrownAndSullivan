import { FolderOpen, FileText, FileSpreadsheet } from "lucide-react";

const files = [
  {
    id: "01",
    name: "Operating Agreement.pdf",
    body: "Defines agent authority, consumer notice, escalation standards, file ownership, and evidence retention before work begins.",
    modified: "2026-04-25",
    size: "284 KB",
    icon: "pdf" as const,
  },
  {
    id: "02",
    name: "Counsel Review Memo.docx",
    body: "Records counsel review of disclosure language, complaint response, retention posture, and carrier-facing production standards.",
    modified: "2026-04-24",
    size: "112 KB",
    icon: "doc" as const,
  },
  {
    id: "03",
    name: "Disclosure Register.xlsx",
    body: "Indexes CMS, TCPA, recording, and scope notices as required events before any product recommendation is made.",
    modified: "2026-04-23",
    size: "96 KB",
    icon: "xls" as const,
  },
  {
    id: "04",
    name: "Audit Production Folder",
    body: "Assembles the retained record continuously so regulators, carriers, and consumers can receive a coherent file without reconstruction.",
    modified: "2026-04-22",
    size: "—",
    icon: "folder" as const,
  },
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
          aria-label="Governing files list"
        >
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

          <div className="min-w-0 bg-white">
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
                    <div className="sm:grid sm:grid-cols-[1fr_120px_100px] sm:items-center sm:gap-4 sm:items-start">
                      <div className="flex min-w-0 items-start gap-3">
                        <FileIcon kind={file.icon} />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-ink">
                            {file.name}
                          </p>
                          <p className="mt-1 line-clamp-3 text-xs leading-5 text-ink/50 sm:line-clamp-none">
                            {file.body}
                          </p>
                        </div>
                      </div>
                      <p className="ml-12 mt-2 font-mono text-xs text-ink/45 sm:ml-0 sm:mt-0 sm:pt-0.5">
                        {file.modified}
                      </p>
                      <p className="ml-12 mt-0.5 text-xs text-ink/50 sm:ml-0 sm:pt-0.5">
                        {file.size}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
