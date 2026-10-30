import ProductPreview from "./ProductPreview.jsx";

function Hero() {
  return (
    <section id="top" className="relative ruled-bg border-b border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-10 items-center">
          <div className="max-w-xl animate-fadeUp">
            <span className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-xs font-mono uppercase tracking-wide text-muted">
              For people juggling too many tabs
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] leading-[1.08] sm:text-5xl sm:leading-[1.08] lg:text-[3.4rem] lg:leading-[1.06] text-ink">
              Turn scattered work into{" "}
              <span className="relative inline-block whitespace-nowrap">
                focused execution
                <svg
                  className="absolute left-0 -bottom-1 w-full"
                  viewBox="0 0 300 14"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 10 C 80 4, 220 4, 298 10"
                    fill="none"
                    stroke="#E8A33D"
                    strokeWidth="6"
                    strokeLinecap="round"
                    pathLength="300"
                    strokeDasharray="300"
                    className="animate-drawline"
                  />
                </svg>
              </span>
              .
            </h1>

            <p className="mt-6 text-lg text-muted leading-relaxed">
              FlowDesk brings your tasks, priorities and projects into one clear workspace, so you always know what to do next.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-base font-medium text-white shadow-sm hover:bg-forest-dark hover:shadow-md transition-all"
              >
                Start building
                <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href="#product"
                className="text-base text-ink underline decoration-line underline-offset-4 hover:decoration-ink transition-colors"
              >
                See how it works
              </a>
            </div>
          </div>

          <div id="product" className="lg:justify-self-end w-full">
            <ProductPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
