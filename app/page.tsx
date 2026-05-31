export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">
        <span className="text-xs uppercase tracking-widest text-[#58a6ff] mb-4 border border-[#58a6ff33] rounded-full px-4 py-1">
          Open Hardware
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight mb-6">
          The Marketplace for{" "}
          <span className="text-[#58a6ff]">Open-Source Laptop</span>{" "}
          Designs
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mb-10">
          Buy and sell open laptop designs, components, and assembly guides.
          Built for makers, hardware enthusiasts, and educational institutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get Access — $29/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          {[
            ["500+", "Open Designs"],
            ["12k+", "Makers"],
            ["98%", "Satisfaction"]
          ].map(([stat, label]) => (
            <div key={label}>
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center px-6 py-20 bg-[#161b22]">
        <h2 className="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-12">Everything you need to build and sell open hardware.</p>
        <div className="border border-[#58a6ff] rounded-2xl p-8 max-w-sm w-full bg-[#0d1117] shadow-lg shadow-[#58a6ff11]">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Maker</div>
          <div className="text-5xl font-bold text-white mb-1">$29<span className="text-xl text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Cancel anytime. No hidden fees.</p>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited design listings",
              "Component marketplace access",
              "Assembly guide uploads",
              "Integrated Lemon Squeezy payments",
              "Community forum access",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Building Today
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">FAQ</h2>
        <div className="space-y-6">
          {[
            [
              "What can I sell on the marketplace?",
              "You can list open-source laptop designs (schematics, PCB files), individual components, and step-by-step assembly guides. All listings must be open-hardware licensed."
            ],
            [
              "How do payments work?",
              "Payments are processed securely via Lemon Squeezy. You receive payouts directly to your bank account after each sale, with transparent fee breakdowns."
            ],
            [
              "Is my design protected if I share it openly?",
              "Yes. Open-hardware licenses like CERN OHL protect your attribution rights while allowing the community to build upon your work. You retain credit as the original designer."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-8 text-[#8b949e] text-sm border-t border-[#21262d]">
        © {new Date().getFullYear()} Open Laptop Marketplace. All rights reserved.
      </footer>
    </main>
  );
}
