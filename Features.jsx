import { Target, Layers, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Focus",
    description: "See what deserves your attention today, without digging through five different tools.",
  },
  {
    icon: Layers,
    title: "Context",
    description: "Keep tasks, notes and project information together, right where the work happens.",
  },
  {
    icon: TrendingUp,
    title: "Progress",
    description: "Understand what's moving and what needs attention at a glance.",
  },
];

function Features() {
  return (
    <section className="border-b border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-wide text-muted">
            Why FlowDesk
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">
            One workspace, built around what actually needs doing.
          </h2>
        </div>

        <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-line bg-surface p-6 hover:border-forest/40 hover:shadow-[0_12px_30px_-18px_rgba(22,33,29,0.25)] transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-light text-forest-dark">
                <Icon size={19} strokeWidth={2} />
              </div>
              <h3 className="mt-4 font-display text-xl text-ink">{title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
