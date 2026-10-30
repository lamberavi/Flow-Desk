function CTA() {
  return (
    <section id="pricing" className="bg-ink">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-20 sm:py-28 text-center">
        <h2 className="font-display text-3xl sm:text-5xl leading-tight text-paper">
          Less managing.
          <br />
          More making.
        </h2>
        <div className="mt-8 flex justify-center">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-base font-medium text-ink hover:bg-amber-dark hover:text-white transition-colors"
          >
            Start building
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
