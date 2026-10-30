const steps = [
  {
    number: "01",
    title: "Capture",
    description: "Bring your work together, from wherever it currently lives.",
  },
  {
    number: "02",
    title: "Prioritize",
    description: "Decide what matters today, and let the rest wait.",
  },
  {
    number: "03",
    title: "Execute",
    description: "Work from a focused view, one task at a time.",
  },
];

function HowItWorks() {
  return (
    <section id="workflow" className="border-b border-line bg-forest-light/40">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <span className="font-mono text-xs uppercase tracking-wide text-muted">
          The workflow
        </span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight max-w-lg">
          Three steps between a scattered day and a clear one.
        </h2>

        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-4">
          {steps.map((step, index) => (
            <div key={step.number} className="flex sm:flex-1 gap-4 sm:gap-0 sm:flex-col">
              <div className="flex sm:hidden flex-col items-center">
                <span className="font-mono text-sm text-forest">{step.number}</span>
                {index < steps.length - 1 && (
                  <span className="mt-1 h-full w-px flex-1 bg-line" aria-hidden="true" />
                )}
              </div>

              <div className="flex-1 pb-2 sm:pb-0">
                <div className="hidden sm:flex items-center gap-3">
                  <span className="font-mono text-sm text-forest">{step.number}</span>
                  {index < steps.length - 1 && (
                    <span className="h-px flex-1 bg-line" aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-2 sm:mt-4 font-display text-xl text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed max-w-[240px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
