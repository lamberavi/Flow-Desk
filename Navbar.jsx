import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Product", href: "#product" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-lg tracking-tight text-ink">
            FlowDesk
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <a href="#login" className="text-sm text-muted hover:text-ink transition-colors">
              Log in
            </a>
            <a
              href="#get-started"
              className="inline-flex items-center gap-1.5 rounded-full bg-forest px-4 py-2 text-sm font-medium text-white hover:bg-forest-dark transition-colors"
            >
              Get started
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-paper px-5 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base text-ink border-b border-line/70"
              >
                {link.label}
              </a>
            ))}
            <a href="#login" onClick={() => setOpen(false)} className="py-2.5 text-base text-ink">
              Log in
            </a>
          </nav>
          <a
            href="#get-started"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-forest px-4 py-3 text-sm font-medium text-white"
          >
            Get started
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
