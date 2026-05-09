import { company } from "@/data/company";

export default function Stats() {
  return (
    <section className="bg-navy py-14">
      <div className="container-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {company.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-brand-cyan text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
