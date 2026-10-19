  const technologies = [
  "React",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "Figma",
];

const Stack = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#050505] via-[#160711] to-[#050505] px-6 py-10 sm:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff2f92]/70 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:gap-12">
        <h2 className="shrink-0 font-mono-custom text-sm font-bold uppercase tracking-[0.3em] text-[#ff63aa]">
          Tech stack
        </h2>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 md:gap-x-10">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="font-mono-custom text-sm font-medium text-white/80 transition-colors hover:text-[#ff63aa] sm:text-base"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
